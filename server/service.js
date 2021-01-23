const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require("socket.io")(http);
const PDDatabase = require('./database');

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






app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use((req, res) => {
    const _ary = req.url.split(/[\/\\]+/g).filter(e=>e.length > 0);
    console.log(`Access [${new Date()}]  Request url: ${req.url}`);
    if (_ary.length < 2) {
        res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
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