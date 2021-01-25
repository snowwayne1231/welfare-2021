const express = require('express');
const ex_session = require('express-session');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require("socket.io")(http);
const adminbro = require('./admin');

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

adminbro.useAdminRouter(app);

app.engine('ejs', require('ejs').renderFile);

app.set('trust proxy', 1);

app.use(ex_session({
    secret: 'rv88tw',
    name: 'rvtls', 
    cookie: { maxAge: 30 * 60 * 1000 }, // ms
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use((req, res) => {
    const _ary = req.url.split(/[\/\\]+/g).filter(e=>e.length > 0);
    // console.log(`Access [${new Date()}]  Request url: ${req.url}`);
    const user = req.session.user || {};
    
    if (_ary.length < 2) {
        const _html = path.join(__dirname, '..', 'dist', 'index.ejs');
        if (user && user.id) {
            // res.sendFile(_html);
            res.render(_html, {user});
        } else {
            
        }
        
        
    } else {
        res.status(404).send('Not Found.');
    }
});


io.on('connection', (socket) => {
    console.log('a user socket connected');
});

http.listen(port, () => {
    console.log('listening on *: ' + port);
});