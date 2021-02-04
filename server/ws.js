


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
                models.User.findByPk(1).then(user => {
                    const userInfo = user.toJSON();
                    // const loginTimestamp = new Date().getTime();
                    socket.emit('MESSAGE', {...userInfo});
                });
                return;
            }
            if (parseInt(msg) == userInfo.loginTimestamp) {
                socket.emit('MESSAGE', {...userInfo});
            } else {
                socket.emit('MESSAGE', {msg: 'failed', redirect: '/logout'});
            }
        });

        socket.on('MESSAGE', (msg) => {
            
        });
    }
}
