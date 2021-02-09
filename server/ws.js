// import { ACT_JOIN_CHAT_ROOM } from '../src/store/enum';

const socketIO = require("socket.io");
const models = require('./models');
const enums = require('../src/store/enum');

const ROOM_CHATTING_BAR = 'roomchattingbar';

const inners = {};
const bar_tables = [];



function onMessage(socket) {
    socket.on('MESSAGE', (msg) => {
        switch (msg.act) {
            case enums.ACT_JOIN_CHAT_ROOM:
                socket.join(ROOM_CHATTING_BAR);
                console.log(socket.rooms);
                console.log(msg);
                
                return 'qq';
            case enums.ACT_JOIN_TABLE:
                return 'www';
            default:
                inners.io.to(ROOM_CHATTING_BAR).emit('MESSAGE', {act: enums.ACT_JOIN_TABLE, payload: {}});
                console.log(msg);
        }
        
    });
}

function onDisconnect(socket) {
    socket.on('disconnect', (msg) => {
        console.log('disconnected: ', socket.request.session);
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
            // console.log(session.userinfo);
            if (socket.request.headers.host.match(/127.0.0.1/i)) {
                return models.User.findOne({where: {code: 'R019'}}).then(user => {
                    const _userInfo = user.toJSON();
                    session.userinfo = _userInfo;
                    socket.emit('MESSAGE', _userInfo);
                });
            }
            if (parseInt(msg) == userInfo.loginTimestamp) {
                return models.User.findByPk(userInfo.id).then(user => {
                    const _userInfo = user.toJSON();
                    for (var key in userInfo) {
                        if (_userInfo.hasOwnProperty(key)) {
                            userInfo[key] = _userInfo[key];
                        }
                    }
                    // const loginTimestamp = new Date().getTime();
                    socket.emit('MESSAGE', userInfo);
                });
            } else {
                socket.emit('MESSAGE', {msg: 'failed', redirect: '/logout'});
            }
        });

        bindSockets(socket);
    }
}
