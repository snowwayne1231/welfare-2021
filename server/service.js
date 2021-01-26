const express = require('express');
const ex_session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require("socket.io")(http);
const md5 =require("md5");


const adminbro = require('./admin');

const models = require('./models');


const argvv = process.argv.slice(2);

let port = 80;

if (argvv.length > 0) {
    argvv.forEach(a => {
        let integer = parseInt(a);
        if (integer > 0) {
            port = integer;
        }
    });
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

adminbro.useAdminRouter(app);

app.engine('ejs', require('ejs').renderFile);

app.set('trust proxy', 1);

const session_middleware = ex_session({
    secret: 'rv88tw',
    name: 'rvtls', 
    cookie: { maxAge: 30 * 60 * 1000 }, // ms
    resave: false,
    saveUninitialized: true,
});

app.use(session_middleware);

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use((req, res) => {
    const _ary = req.url.split(/[\/\\]+/g).filter(e=>e.length > 0);
    // console.log(`Access [${new Date()}]  Request url: ${req.url}`);
    return renderURI(req, res, _ary);
});


io.on('connection', (socket) => {
    const session = socket.request.session;
    const userInfo = session.userinfo;
    if (!userInfo) {
        console.log('A user connection be rejected. ');
        return socket.disconnect();
    }
    console.log('A user socket connected: ', userInfo.firstName);
    
    socket.on('AUTHORIZE', (msg) => {
        // console.log(session.userinfo);
        if (parseInt(msg) == userInfo.loginTimestamp) {
            socket.emit('MESSAGE', {...userInfo});
        } else {
            socket.emit('MESSAGE', {msg: 'failed', redirect: '/logout'});
        }
    });
});

io.use(function(socket, next) {
    session_middleware(socket.request, socket.request.res || {}, next);
});

http.listen(port, () => {
    console.log('listening on *: ' + port);
});







const _index = path.join(__dirname, '..', 'dist', 'index.ejs');
const _login = path.join(__dirname, 'login.ejs');
const _register = path.join(__dirname, 'register.ejs');

function renderURI(req, res, uris) {
    const userinfo = req.session.userinfo || {};

    if (uris[0] == 'logout') {
        // 登出
        req.session = null;
        res.clearCookie('rvtls');
        res.clearCookie('logintimestamp');
        res.redirect('/');
    }
    
    if (req.method=='POST') {
        return handlePOST(req, res, uris);
    }

    if (uris.length < 2) {
        // console.log('userinfo');
        // console.log(userinfo);
        if (userinfo && userinfo.id) {
            // res.sendFile(_html);
            res.render(_index, {userinfo});
        } else {
            res.render(_login, {msg: ''});
        }
    } else {
        res.status(404).send('Not Found.');
    }
    return res
}


function handlePOST(req, res, uris) {
    // console.log('handlePOST req: ', req.body);
    if (uris[0] == 'login' && req.body.action == 'login') {
        const code = req.body.usercode.trim();
        const pwd = md5(req.body.pwd.trim());
        models.User.findOne({
            where: {
                code: code,
            }
        }).then(user => {
            const user_data = user.toJSON();
            // console.log(user_data)
            if (!user_data.pwd || user_data.pwd == '') {
                // 註冊
                res.render(_register, {...user_data, userid: user_data.id, usercode: code, msg: ''});
            } else if (user_data.pwd == pwd) {
                // 登錄
                const loginTimestamp = new Date().getTime();
                req.session.userinfo = {
                    ...user_data,
                    loginTimestamp,
                };
                res.cookie('logintimestamp', loginTimestamp);
                res.redirect('/');
            } else {
                // 登錄失敗
                res.render(_login, {msg: 'Login Failed, Password Wrong.'});
            }
        }).catch(e => {
            res.render(_login, {msg: 'Login Failed, Code Wrong.'});
        })
    } else if (req.body.action == 'register') {
        const max_ability = 9999999;
        const userid = parseInt(req.body.userid, 10);
        const setting_pwd = req.body.pwd.trim();
        const check_pwd = req.body.check_pwd.trim();
        const usercode = req.body.usercode.trim();
        const str = Math.min(parseInt(req.body.str, 10), max_ability);
        const dex = Math.min(parseInt(req.body.dex, 10), max_ability);
        const con = Math.min(parseInt(req.body.con, 10), max_ability);
        const int = Math.min(parseInt(req.body.int, 10), max_ability);
        const cha = Math.min(parseInt(req.body.cha, 10), max_ability);

        let nickname = (req.body.nickname || '').trim();
        let error_msg = '';

        if (setting_pwd != check_pwd || setting_pwd.length > 12) {
            error_msg = 'Different Password or Password Too Long.';
        }

        if (nickname.length > 12) {
            error_msg = 'Too Long Nickname.';
        }

        if (isNaN(str+dex+con+int+cha)) {
            error_msg = 'Ability Wrong.';
        }
        
        if (error_msg.length > 0) {
            return res.render(_register, {...req.body, msg: error_msg});
        }

        models.User.findByPk(userid).then(user => {
            const user_data = user.toJSON();
            if (user_data.code != usercode) {
                return res.render(_register, {...req.body, msg: 'Failed, Code Not Matched.'});
            }

            if (!nickname || nickname.length == 0) {
                nickname = user_data.firstName;
            }

            user.update({
                pwd: md5(setting_pwd),
                nickname,
                str,
                dex,
                con,
                int,
                cha,
            }).then(_user => {
                const loginTimestamp = new Date().getTime();
                req.session.userinfo = {
                    ..._user.toJSON(),
                    loginTimestamp,
                };
                res.cookie('logintimestamp', loginTimestamp);
                res.redirect('/');
            }).catch(e => {
                console.log(e);
                res.render(_register, {...req.body, msg: 'Failed.'});
            });
        }).catch(e => {
            res.render(_register, {...req.body, msg: 'Failed, User Not Found.'});
        });
    } else {
        res.status(404).send('Wrong Parameter.');
    }
    return res;
}