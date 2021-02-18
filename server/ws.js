// import { ACT_JOIN_CHAT_ROOM } from '../src/store/enum';

const socketIO = require("socket.io");
const { Op } = require("sequelize");
const models = require('./models');
const enums = require('../src/store/enum');

const ROOM_CHATTING_BAR = 'roomchattingbar';

const inners = {};
const bar_tables = [];



function onMessage(socket) {
    socket.on('MESSAGE', (msg) => {
        const payload = msg.payload;
        const userinfo = socket.request.session.userinfo;
        switch (msg.act) {
            case enums.ACT_JOIN_CHAT_ROOM:
                return socket.join(ROOM_CHATTING_BAR);
            case enums.ACT_LEAVE_CHAT_ROOM:
                return socket.leave(ROOM_CHATTING_BAR);
            case enums.ACT_SAY_CHAT_ROOM:
                return inners.io.to(ROOM_CHATTING_BAR).emit('MESSAGE', {act: enums.ACT_SAY_CHAT_ROOM, payload: {text: payload.text, nickname: userinfo.nickname}});

            case enums.ACT_GET_HOUSES_DATA:
                return models.House.findAll({include: [{model: models.User, as: 'leader'}]}).then((houses) => {
                    socket.emit('MESSAGE', {act: enums.ACT_GET_HOUSES_DATA, payload: {houses}});
                }).catch(err => {
                    console.log(err);
                });
            case enums.ACT_GET_FAMILY_DATA:
                let house_id = 25;
                if (userinfo) { 
                    let house_id = userinfo.houseId > 0 ? userinfo.houseId : userinfo.houseIdTmp;
                }
                
                if (house_id == 0) {
                    return socket.emit('MESSAGE', {act: enums.ACT_GET_FAMILY_DATA, payload: {}});
                } else {
                    return models.User.findAll({
                        attributes: ['id', 'mvp', 'gender', 'rv', 'houseId', 'houseIdTmp', 'nickname'],
                        where: {status: 1, [Op.or]: {houseId: house_id, houseIdTmp: house_id}},
                    }).then(users => {
                        socket.emit('MESSAGE', {act: enums.ACT_GET_FAMILY_DATA, payload: {users}});
                    }).catch(err => {
                        console.log(err);
                    });
                }
            case enums.ACT_GET_PEOPLE_DATA:
                return models.User.findAll({
                    attributes: ['id', 'nickname', 'houseId', 'houseIdTmp', 'mvp', 'rv'],
                    where: [{isLeader: false}],
                }).then(users => {
                    socket.emit('MESSAGE', {act: enums.ACT_GET_PEOPLE_DATA, payload: {users}});
                }).catch(err => {
                    console.log(err);
                });
            case enums.ACT_UPDATE_SKILL:
                return models.User.update(
                    { skillPointJson: JSON.stringify(payload.json) },
                    { where: {id: payload.id} }
                ).then(user => {
                    socket.emit('MESSAGE', {act: enums.ACT_UPDATE_SKILL});
                }).catch(err => console.log(err));
            default:
                
                console.log("Not Found Act: ", msg);
        }
        
    });
}

function onDisconnect(socket) {
    socket.on('disconnect', (msg) => {
        console.log('disconnected: ', socket.request.session.userinfo ? socket.request.session.userinfo.nickname : 'unknown');
    });
}

function bindSockets(socket) {
    onMessage(socket);
    onDisconnect(socket);
}


module.exports = {
    buildWsConnection: function(http_serv, middleware) {
        const io = socketIO(http_serv, {cors: {origin: '*'}});
        io.on('connection', this.onConnect);
        io.use(function(socket, next) {
            middleware(socket.request, socket.request.res || {}, next);
        });
        inners.io = io;
    },
    onConnect: function(socket) {
        const session = socket.request.session;
        const userInfo = session.userinfo || {};
        // console.log('socket.request.headers: ', socket.request.headers);
        // if (!userInfo.id) {
        //     console.log('A user connection be rejected. ');
        //     return socket.disconnect();
        // }
        console.log('A user socket connected: ', userInfo.firstName);
        
        socket.on('AUTHORIZE', (msg) => {
            if (parseInt(msg) == userInfo.loginTimestamp) {
                return models.User.findByPk(userInfo.id).then(user => {
                    const _userInfo = user.toJSON();
                    for (var key in userInfo) {
                        if (_userInfo.hasOwnProperty(key)) {
                            userInfo[key] = _userInfo[key];
                        }
                    }
                    // const loginTimestamp = new Date().getTime();
                    socket.emit('MESSAGE', {act: 0, payload: userInfo});
                });
            } else if (socket.request.headers.host.match(/127.0.0.1/i)) {
                return models.User.findOne({where: {code: 'R019'}}).then(user => {
                    const _userInfo = user.toJSON();
                    session.userinfo = _userInfo;
                    socket.emit('MESSAGE', {act: 0, payload: _userInfo});
                });
            } else {
                socket.emit('MESSAGE', {act: 'failed', redirect: '/logout'});
            }
        });

        bindSockets(socket);
    }
}
