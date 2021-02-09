const express = require('express');
const ex_session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);
const path = require('path');
// const io = require("socket.io")(http, {cors: {origin: '*'}});
const md5 =require("md5");
const { Op } = require("sequelize");

const adminbro = require('./admin');
const models = require('./models');

const ws = require('./ws');


// pares command line parameter
const argvv = process.argv.slice(2);
let port = 81;
if (argvv.length > 0) {
    argvv.forEach(a => {
        let integer = parseInt(a);
        if (integer > 0) {
            port = integer;
        }
    });
}
//


// setting http service
adminbro.useAdminRouter(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
    if (_ary[0] == 'favicon.ico') {
        return res.sendFile(path.join(__dirname, '..', 'static', 'favicon.ico'));
    }
    return renderURI(req, res, _ary);
});
//

ws.buildWsConnection(http, session_middleware);


// listen service by port
http.listen(port, () => {
    console.log('listening on *: ' + port);
});
//



// render and handle the uri
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
        return res.redirect('/');
    }

    if (uris[0] == 'adminsnow') {
        return handleAdminSnow(req, res, uris);
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
        const wis = Math.min(parseInt(req.body.wis, 10), max_ability);
        const cha = Math.min(parseInt(req.body.cha, 10), max_ability);

        let nickname = (req.body.nickname || '').trim();
        let error_msg = '';

        if (setting_pwd != check_pwd || setting_pwd.length > 12) {
            error_msg = 'Different Password or Password Too Long.';
        }

        if (nickname.length > 12) {
            error_msg = 'Too Long Nickname.';
        }

        if (isNaN(str+dex+con+wis+cha)) {
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
                wis,
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



const _adminsnow =  path.join(__dirname, 'adminsnow.ejs');
const _models_map = {
    '1': 'House',
    '2': 'Trophy',
    '3': 'User',
    '4': 'Result',
    '5': 'Game',
    '6': 'Match',
}

function handleAdminSnow(req, res, uris) {
    const data = {
        model: 1,
        func: 1,
        msg: '',
        results: [],
    }

    const sub_order = uris[1];
    if (sub_order) {
        switch (sub_order) {
            case 'resettinglv': return resettingLV(res);
            case 'refreshuserscore': return refreshUserScore(res);
            case 'freshfamilyscore': return refreshFamilyScore(res);
            case 'update': return updateAdminDB(req, res);
            default:
        }
    }

    for (var key in data) {
        if (req.body[key]) {
            data[key] = req.body[key];
        }
    }

    

    console.log(data);

    const _model_name = _models_map[data.model];
    if (_model_name && req.method=='POST') {
        const _model = models[_model_name];
        return _model.findAll({
            // where: {
            //     createdAt: {
            //         [Op.lt]: new Date(),
            //         [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000 * 30)
            //     }
            // }
            attributes: { exclude: ['createdAt', 'updatedAt', 'pwd', 'email', 'isLeader', 'title', 'lastName'] }
        }).then(ary => {
            const _json = ary.map(_ => _.toJSON());
            // console.log(_json);
            data.results = _json;
            res.render(_adminsnow, data);
        }).catch(err => {
            data.msg = err;
            res.render(_adminsnow, data);
        });

    }
    

    return res.render(_adminsnow, data);
}


function resettingLV(res) {
    var should_update_list = [];
    var _length_users = 0;
    models.User.findAll({
        attributes: ['id', 'firstName', 'str', 'strLv', 'dex', 'dexLv', 'con', 'conLv', 'wis', 'wisLv', 'cha', 'chaLv', 'gender', 'code', 'json', 'rv'],
        where: {'status': 1},
    }).then(users => {
        var _strs = [];
        var _dexs = [];
        var _cons = [];
        var _wiss = [];
        var _chas = [];
        _length_users = users.length;
        users.map(u => {
            const code_int = parseInt(u.code.substr(1), 10);
            _strs.push([u.id, u.str+u.gender, code_int, '']);
            _dexs.push([u.id, u.dex+u.gender, code_int, '']);
            _cons.push([u.id, u.con+u.gender, code_int, '']);
            _wiss.push([u.id, u.wis+u.gender, code_int, '']);
            _chas.push([u.id, u.cha+u.gender, code_int, '']);
            return u;
        });

        _strs = _strs.sort(_sort_ability).map(_reset_lv);
        _dexs = _dexs.sort(_sort_ability).map(_reset_lv);
        _cons = _cons.sort(_sort_ability).map(_reset_lv);
        _wiss = _wiss.sort(_sort_ability).map(_reset_lv);
        _chas =  _chas.sort(_sort_ability).map(_reset_lv);

        const lvMap = {
            'S': 5,
            'A': 4,
            'B': 3,
            'C': 2,
            'D': 1,
            '-': 0,
        };
        const sort_lv_scored = [];
        // resetting lv
        users.map(u => {
            const id = u.id;
            const finded_str_lv = _strs.find(_ => _[0] == id)[3];
            const finded_dex_lv = _dexs.find(_ => _[0] == id)[3];
            const finded_con_lv = _cons.find(_ => _[0] == id)[3];
            const finded_wis_lv = _wiss.find(_ => _[0] == id)[3];
            const finded_cha_lv = _chas.find(_ => _[0] == id)[3];
            const str_score = lvMap[finded_str_lv];
            const dex_score = lvMap[finded_dex_lv];
            const con_score = lvMap[finded_con_lv];
            const wis_score = lvMap[finded_wis_lv];
            const cha_score = lvMap[finded_cha_lv];
            const next_str_lv = str_score > lvMap[u.strLv] ? finded_str_lv : u.strLv;
            const next_dex_lv = dex_score > lvMap[u.dexLv] ? finded_dex_lv : u.dexLv;
            const next_con_lv = con_score > lvMap[u.conLv] ? finded_con_lv : u.conLv;
            const next_wis_lv = wis_score > lvMap[u.wisLv] ? finded_wis_lv : u.wisLv;
            const next_cha_lv = cha_score > lvMap[u.chaLv] ? finded_cha_lv : u.chaLv;
            if (next_str_lv != u.strLv || next_dex_lv != u.dexLv || next_con_lv != u.conLv || next_wis_lv != u.wisLv || next_cha_lv != u.chaLv) {
                u.update({
                    strLv: next_str_lv,
                    dexLv: next_dex_lv,
                    conLv: next_con_lv,
                    wisLv: next_wis_lv,
                    chaLv: next_cha_lv,
                });
            }
            const total_score = str_score + dex_score + con_score + wis_score + cha_score;
            sort_lv_scored.push([u.id, total_score, u.gender]);
            return u;
        });

        sort_lv_scored.sort(_sort_ability);

        // basic rv
        users.map(u => {
            const idx = sort_lv_scored.findIndex(e => e[0]==u.id);
            const rate = idx / sort_lv_scored.length;
            var add_score = 1;
            switch (true) {
                case rate < 0.2: add_score = 5; break;
                case rate < 0.4: add_score = 4; break;
                case rate < 0.6: add_score = 3; break;
                case rate < 0.8: add_score = 2; break;
                default:
            }
            const ujson = JSON.parse(u.json);
            const basic_rv = add_score + parseInt(ujson['before_mvp_score'], 10);
            ujson['ability_score'] = add_score;
            const new_rv = Math.min(Math.max(basic_rv, u.rv), 99);
            u.update({
                'json': JSON.stringify(ujson),
                'rv': new_rv,
            });
            return u;
        });

        
        res.json(users);
    }).catch(err => {
        console.log(err);
        res.json({'error': err});
    });

    function _sort_ability(a, b) {
        var aabi = a[1];
        var babi = b[1];
        return aabi == babi ? b[2] - a[2] : babi - aabi;
    }

    function _reset_lv(ele, idx) {
        var ratio = idx / _length_users;
        var rank = 'D';
        switch (true) {
            case ratio <= 0.15: rank = 'S'; break;
            case ratio <= 0.4: rank = 'A'; break;
            case ratio <= 0.65: rank = 'B';  break;
            case ratio <= 0.90: rank = 'C';  break;
            default: // D
        }
        ele[3] = rank;
        return ele;
    }
}


function refreshUserScore(res) {
    models.Match.findAll({
        attributes: {
            exclude: ['name'],
        }
    }).then(matchs => {
        var matchUidScoreMap = {};
        matchs.map(m => {
            var uid = m.userId;
            var mobj = {mvp: m.mvp, shift: m.shift, activity: m.activity, add: m.add};
            if (matchUidScoreMap[uid]) {
                matchUidScoreMap[uid].push(mobj);
            } else {
                matchUidScoreMap[uid] = [mobj];
            }
        });

        models.User.findAll({
            attributes: {
                include: ['id', 'mvp', 'partake', 'json', 'rv'],
            },
        }).then(users => {
            var updated_users = [];
            users.map(user => {
                var user_id = user.id;
                var matches = matchUidScoreMap[user_id];
                if (matches && matches.length > 0) {
                    var my_json = JSON.parse(user.json);
                    var my_mvp = my_json.before_mvp_score > 0 ? 1 : 0;
                    var my_rv = my_json.before_mvp_score + my_json.ability_score;
                    var my_partake = matches.length;
                    matches.map(match => {
                        if (match.mvp > 0) { my_mvp+=1; }
                        my_rv += (match.mvp + match.shift + match.activity + match.add);
                    });
                    if (isNaN(my_rv)) { my_rv = 0; }
                    user.update({
                        rv: my_rv,
                        mvp: my_mvp,
                        partake: my_partake,
                    });
                    updated_users.push(user);
                }
            });
            return res.json(updated_users);
        });
    }).catch(err => {
        return res.json({'error': err});
    });
}


function refreshFamilyScore(res) { // not finished
    models.User.findAll({
        attributes: {
            include: ['id', 'houseId', 'rv', 'strLv', 'dexLv', 'conLv', 'wisLv', 'chaLv', 'thankTimes', 'gender', 'partake', 'mvp', 'departmentName'],
        },
        where: {
            status: 1,
        },
    }).then(users => {
        var houseUserMap = {};
        users.map(user => {
            var hid = user.houseId;
            if (hid && hid > 0) {
                if (houseUserMap[hid]) {
                    houseUserMap[hid].push(user);
                } else {
                    houseUserMap[hid] = [user];
                }
            }
        });

        models.House.findAll().then((houses) => {
            houses.map(house => {
                var id = house.id;
                var usersInHouse = houseUserMap[id];
                if (usersInHouse && usersInHouse.length > 0) {
                    var new_land = 0;
                    var new_scorePersonal = 0;
                    var new_scoreTrophy = 0;
                    var new_rank = 0;
                    var new_rankMove = 0;
                    var new_leaderMatchFamily = 0;
                    var new_sameDepartment = 0;
                    var new_totalPartake = 0;
                }
            });
            res.json(houses);
        });
        
    }).catch(err => {
        res.json({'error': err});
    });
}

function updateAdminDB(req, res) {
    var parameter = req.body;
    var _model;
    var results = [];
    switch (parameter.model) {
        case '1': _model = models.House; break;
        case '2': _model = models.Trophy; break;
        case '3': _model = models.User; break;
        case '4': _model = models.Result; break;
        case '5': _model = models.Game; break;
        case '6': _model = models.Match; break;
        default:
            return res.json({'msg': 'failed'});
    }
    var updateData = {};
    for (var key in parameter) {
        if (key != 'id' && key != 'model') {
            updateData[key] = parameter[key];
        }
    }
    _model.update(updateData, {where: {id: parameter.id}});
    res.json({'msg': 'ok'});
}