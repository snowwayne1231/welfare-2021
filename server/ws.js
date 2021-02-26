
const socketIO = require("socket.io");
const { Op } = require("sequelize");
const models = require('./models');
const enums = require('../src/store/enum');

const ROOM_CHATTING_BAR = 'roomchattingbar';

const inners = {};
const bar_tables = [];
const bar_house_people = [];



function onMessage(socket) {
    socket.on('MESSAGE', (msg) => {
        const payload = msg.payload;
        const userinfo = socket.request.session.userinfo;
        switch (msg.act) {
            case enums.ACT_JOIN_CHAT_ROOM:
                if (!userinfo) { return; }
                let myinfo = {id: userinfo.id, nickname: userinfo.nickname, position: [65,65], box: []};
                if (bar_house_people.findIndex(e => e.id == userinfo.id) < 0) {
                    bar_house_people.push(myinfo);
                }
                socket.join(ROOM_CHATTING_BAR);
                return broadcastChatRoom({act: enums.ACT_JOIN_CHAT_ROOM, payload: {user: myinfo, bar_house_people}});
            case enums.ACT_LEAVE_CHAT_ROOM:
                if (!userinfo) { return; }
                let myinfo_l = {id: userinfo.id, nickname: userinfo.nickname, position: [0,0], box: []};
                socket.leave(ROOM_CHATTING_BAR);
                let idx = bar_house_people.findIndex(e => e.id == userinfo.id);
                if (idx >= 0) {
                    bar_house_people.splice(idx, 1);
                } else {
                    console.log('Failed Find Bar Leave: ', userinfo);
                }
                return broadcastChatRoom({act: enums.ACT_LEAVE_CHAT_ROOM, payload: {user: myinfo_l, bar_house_people}});
            case enums.ACT_SAY_CHAT_ROOM:
                if (!userinfo) { return; }
                return broadcastChatRoom({act: enums.ACT_SAY_CHAT_ROOM, payload: {text: payload.text, nickname: userinfo.nickname}});
            case enums.ACT_MOVE_CHAT_ROOM:
                if (!userinfo) { return; }
                let idx_move = bar_house_people.findIndex(e => e.id == userinfo.id);
                let new_position = [payload.x, payload.y];
                if (idx_move >= 0) {
                    bar_house_people[idx_move].position = new_position;
                }
                return broadcastChatRoom({act: enums.ACT_MOVE_CHAT_ROOM, payload: {user_id: userinfo.id, position: new_position}});

            case enums.ACT_GET_HOUSES_DATA:
                return models.House.findAll({include: [{model: models.User, as: 'leader'}]}).then((houses) => {
                    socket.emit('MESSAGE', {act: enums.ACT_GET_HOUSES_DATA, payload: {houses}});
                }).catch(err => {
                    console.log(err);
                });
            case enums.ACT_GET_FAMILY_DATA:
                if (!userinfo) { return; }
                let house_id = userinfo.houseId > 0 ? userinfo.houseId : userinfo.houseIdTmp;;
                
                if (house_id == 0) {
                    return socket.emit('MESSAGE', {act: enums.ACT_GET_FAMILY_DATA, payload: {users: []}});
                } else {
                    return models.User.findAll({
                        attributes: ['id', 'mvp', 'gender', 'rv', 'houseId', 'houseIdTmp', 'nickname', 'int', 'strLv', 'dexLv', 'conLv', 'wisLv', 'chaLv', 'skillPointJson', 'isLeader'],
                        where: {status: 1, [Op.or]: {houseId: house_id, houseIdTmp: house_id}},
                    }).then(users => {
                        socket.emit('MESSAGE', {act: enums.ACT_GET_FAMILY_DATA, payload: {users}});
                    }).catch(err => {
                        console.log(err);
                    });
                }
            case enums.ACT_GET_PEOPLE_DATA:
                return models.User.findAll({
                    attributes: ['id', 'nickname', 'houseId', 'houseIdTmp', 'mvp', 'rv', 'isLeader'],
                    where: [{status: 1}],
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
            case enums.ACT_GET_ADMIN_DATASET:
                if (userinfo.code=='R343') {
                    let promise; 
                    try {
                        promise = models[payload.model].findAll({
                            where: payload.where,
                            attributes: { exclude: ['createdAt', 'updatedAt', 'pwd', 'email', 'title'] }
                        }).then(dataset => {
                            socket.emit('MESSAGE', {act: enums.ACT_GET_ADMIN_DATASET, payload: {dataset}})
                        });
                    } catch (err) {
                        console.log(err);
                    }
                    return promise
                }
                return socket.emit('MESSAGE', {act: 'not promised', redirect: '/logout'});
            default:
                console.log("Not Found Act: ", msg);
        }
        
    });
}

function onDisconnect(socket) {
    socket.on('disconnect', (msg) => {
        var userinfo = socket.request.session.userinfo;
        if (!userinfo) { return; }
        console.log('disconnected: ', userinfo ? userinfo.nickname : 'unknown');
        var house_idx = bar_house_people.findIndex(e => e.id == userinfo.id);
        if (house_idx >= 0) {
            bar_house_people.splice(house_idx, 1);
        }
    });
}

function bindSockets(socket) {
    onMessage(socket);
    onDisconnect(socket);
}

function broadcastChatRoom(obj) {
    return inners.io.to(ROOM_CHATTING_BAR).emit('MESSAGE', obj);
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
                return models.User.findOne({where: {code: 'R343'}}).then(user => {
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
