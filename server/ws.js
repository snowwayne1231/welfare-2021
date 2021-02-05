const models = require('./models');
const bar_tables = [];


module.exports = {
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
                return models.User.findByPk(1).then(user => {
                    const _userInfo = user.toJSON();
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

        socket.on('MESSAGE', (msg) => {
            
        });
    }
}
