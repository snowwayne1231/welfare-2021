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
if (port == 81) {
    adminbro.useAdminRouterDev(app);
} else {
    adminbro.useAdminRouter(app);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('ejs', require('ejs').renderFile);
app.set('trust proxy', 1);

const session_middleware = ex_session({
    secret: 'rv88tw',
    name: 'rvtls', 
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // ms
    resave: false,
    saveUninitialized: true,
});
app.use(session_middleware);
app.use(express.static(path.join(__dirname, '..', 'dist'), {maxAge: 1000*60*60*24}));
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
const _twitch = path.join(__dirname, 'twitch.ejs');

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
        if ((userinfo && userinfo.code == 'R343') || req.headers.host.match(/127.0.0.1/i)) {
            return handleAdminSnow(req, res, uris);
        } else {
            return res.status(404).send('Not Found.');
        }
    }

    if (uris[0] == 'twitch') {
        return res.render(_twitch);
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
    const ifLocal = req.headers.host.match(/127.0.0.1/i);
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
            } else if (user_data.pwd == pwd || ifLocal) {
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
        if (nickname.length == 0) {
            error_msg = 'Nickname Empty.';
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

            if (nickname.match(new RegExp(user.firstName, 'i')) || user.firstName.match(new RegExp(nickname, 'i'))) {
                return res.render(_register, {...req.body, msg: 'Failed, Nickname Similar With Name.'});
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
    '7': 'Countryside',
    '8': 'Order',
    '9': 'Voter',
    '10': 'Config',
    '11': 'Prediction',
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
            case 'freshgameresult': return freshGameResult(req, res);
            case 'getvoteresult': return getVoteResult(req, res);
            default:
        }
    }

    for (var key in data) {
        if (req.body[key]) {
            data[key] = req.body[key];
        }
    }

    // console.log(data);

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
    const promise_users = models.User.findAll({
        attributes: ['id', 'firstName', 'str', 'strLv', 'dex', 'dexLv', 'con', 'conLv', 'wis', 'wisLv', 'cha', 'chaLv', 'gender', 'code', 'json', 'rv', 'nickname'],
        where: {'status': 1},
    });
    const promise_orders = models.Order.findAll({
        attributes: ['userId', 'spend']
    });
    Promise.all([promise_users, promise_orders]).then(([users, orders]) => {
        var orderMap = {};
        orders.map(o => {
            var uid = o.userId;
            if (orderMap[uid]) {
                orderMap[uid] += o.spend;
            } else {
                orderMap[uid] = o.spend;
            }
        });
        users = users.filter(u => u.nickname && u.nickname.length > 0);
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
        const resUsers = users.map(u => {
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
            if (ujson.ability_score && ujson.ability_score > add_score) { add_score = ujson.ability_score; }
            const basic_rv = add_score + parseInt(ujson['before_mvp_score'], 10);
            const minus_order_rv = (orderMap[u.id] || 0);
            ujson['ability_score'] = add_score;
            const new_rv = Math.min(Math.max(basic_rv, u.rv), 99);
            
            u.update({
                'json': JSON.stringify(ujson),
                'rv': Math.max(new_rv - minus_order_rv, 0),
            });
            
            const res = u.toJSON();
            res.isdiff = new_rv != basic_rv;
            return res;
        }).filter(e => e.isdiff);

        res.json(resUsers);
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
            case ratio <= 0.12: rank = 'S'; break;
            case ratio <= 0.37: rank = 'A'; break;
            case ratio <= 0.65: rank = 'B';  break;
            case ratio <= 0.90: rank = 'C';  break;
            default: // D
        }
        ele[3] = rank;
        return ele;
    }
}


function refreshUserScore(res) {
    const promise_matches = models.Match.findAll({
        attributes: ['success', 'add', 'activity', 'shift', 'mvp', 'round', 'userId']
    });
    const promise_orders = models.Order.findAll({
        attributes: ['userId', 'spend']
    });
    const promise_users = models.User.findAll({
        attributes: ['id', 'json', 'mvp', 'partake', 'rv', 'houseId', 'firstName'],
        where: { status: 1 },
    });
    Promise.all([promise_matches, promise_orders, promise_users]).then(([matches, orders, users]) => {
        console.log(matches.length);
        console.log(orders.length);
        console.log(users.length);
        var matchUidScoreMap = {};
        matches.map(m => {
            var uid = m.userId;
            var mobj = m.toJSON();
            if (matchUidScoreMap[uid]) {
                matchUidScoreMap[uid].dataset.push(mobj);
            } else {
                matchUidScoreMap[uid] = {
                    totalSelf: 0,
                    dataset: [mobj],
                };
            }
        });
        
        var orderUidSpendMap = {};
        orders.map(o => {
            var uid = o.userId;
            var spend = o.spend;
            if (orderUidSpendMap[uid]) {
                orderUidSpendMap[uid].dataset.push(spend);
                orderUidSpendMap[uid].total += spend;
            } else {
                orderUidSpendMap[uid] = {
                    total: spend,
                    dataset: [spend],
                };
            }
        });

        const resUsers = users.map(user => {
            var id = user.id;
            var myMatches = matchUidScoreMap[id];
            var myOrders = orderUidSpendMap[id];
            var myJson = JSON.parse(user.json);
            var additionalMvp = 0;
            var partake = 0;
            var res = {};
            res.matchScore = 0;
            res.orderSpend = myOrders ? myOrders.total : 0;
            res.basic = myJson.before_mvp_score + myJson.ability_score;
            if (myMatches && myMatches.dataset.length > 0) {
                var dataset = myMatches.dataset;
                additionalMvp = dataset.filter(m => m.mvp > 0).length;
                var matchRoundMap = {};
                dataset.map(match => {
                    var beforeMatch = matchRoundMap[match.round];
                    if (beforeMatch) {
                        if (match.add > beforeMatch.add) { beforeMatch.add = match.add; }
                        if (match.activity > beforeMatch.activity) { beforeMatch.activity = match.activity; }
                        if (match.shift > beforeMatch.shift) { beforeMatch.shift = match.shift; }
                        if (match.mvp > beforeMatch.mvp) { beforeMatch.mvp = match.mvp; }
                    } else {
                        matchRoundMap[match.round] = {add: match.add, activity: match.activity, shift: match.shift, mvp: match.mvp};
                    }
                });
                Object.keys(matchRoundMap).map(round => {
                    var bestRecord = matchRoundMap[round];
                    res.matchScore += (bestRecord.mvp + bestRecord.activity);
                    partake += bestRecord.add > 0 ? 1 : 0;
                });

            } else {
                
            }
            
            var userNextData = {
                mvp: (myJson.before_mvp_score > 0 ? 1:0) + additionalMvp,
                rv: res.basic + res.matchScore - res.orderSpend,
                partake,
            }
            res.userNextData = userNextData;
            if (user.rv <= userNextData.rv) {
                user.update(userNextData);
            } else {
                res.diff = true;
                res.user = user.toJSON();
            }
            return res;
        });
        
        return res.json(resUsers.filter(e => e.diff));
        
    }).catch(err => res.json({'error': err}));
}


function refreshFamilyScore(res) {
    const promise_users = models.User.findAll({
        attributes: ['id', 'houseId', 'rv', 'code', 'strLv', 'dexLv', 'conLv', 'wisLv', 'chaLv', 'thankTimes', 'gender', 'partake', 'mvp', 'departmentName', 'nickname'],
        where: { status: 1, intLv: '-' },
    });
    const promise_houses = models.House.findAll();
    const promise_results = models.Result.findAll();
    const promise_matches = models.Match.findAll({
        attributes: ['userId', 'round'],
        where: { add: {[Op.gt]: 0}}
    });
    const mapLvNum = {'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D':1};
    const getLvToNum = (user) => {
        return {
            str: mapLvNum[user.strLv] || 0,
            dex: mapLvNum[user.devLv] || 0,
            con: mapLvNum[user.conLv] || 0,
            wis: mapLvNum[user.wisLv] || 0,
            cha: mapLvNum[user.chaLv] || 0,
        }
    }

    Promise.all([promise_users, promise_houses, promise_results, promise_matches]).then(([users, houses, results, matches]) => {
        var houseUserMap = {};
        var maxRvUsers = [{rv: 0}]; // trophy (1)
        var maxRvUserHouses = [];
        var maxPartakeHouses = [{totalPartake: 0}]; // trophy (2)
        var maxConWisLevelSHouses = [{cw: 0}]; // trophy (3)
        var mapDepartmentUser = {}; // trophy (4)
        var maxDepartments = [{rate: 0}];
        var closestAbility = [{gap: 1000}]; // trophy (5)
        var maxLady = {ladies: 0}; // trophy (7)
        var maxWorkCode = {num: 0, round: 0, house: {}}; // trophy (8)
        var mapUserMatches = {};
        var mapMatchTotalCode = {};
        var maxChas = [{len: 0}]; // trophy (9)
        var maxThanks = [{times: 0}];
        var maxChangeRanks = [{change: 0}]; // trophy (6)
        var mapReusltChanges = {};
        var allDataSroted = {
            '10': [],
            '20': [],
            '30': [],
            '40': [],
            '50': [],
            '60': [],
            '70': [],
            '80': [],
            '90': [],
            '100': [],
        }
        
        results.map(r => {
            var ranking = JSON.parse(r.ranking);
            ranking.map((hid, rank) => {
                if (mapReusltChanges[hid]) {
                    mapReusltChanges[hid].change += Math.abs(mapReusltChanges[hid].ranks.slice(-1)[0] - rank);
                    mapReusltChanges[hid].ranks.push(rank);
                } else {
                    mapReusltChanges[hid] = {ranks: [rank], change: 0};
                }
            });
        });
        //
        matches.map(m => {
            if (mapUserMatches[m.userId]) {
                if (!mapUserMatches[m.userId].includes(m.round)) {
                    mapUserMatches[m.userId].push(m.round);
                }
            } else {
                mapUserMatches[m.userId] = [m.round];
            }
        });

        users.map(user => {
            var hid = user.houseId;
            if (hid && hid > 0) {
                if (houseUserMap[hid]) {
                    houseUserMap[hid].push(user);
                } else {
                    houseUserMap[hid] = [user];
                }
            }
            // trophy (1)
            if (user.rv > maxRvUsers[0].rv) {
                maxRvUsers = [user];
            } else if (user.rv == maxRvUsers[0].rv) {
                maxRvUsers.push(user);
            }
            if (mapDepartmentUser[user.departmentName]) {
                mapDepartmentUser[user.departmentName].push(user);
            } else {
                mapDepartmentUser[user.departmentName] = [user];
            }
        });
        houses.map(house => {
            var id = house.id;
            var usersInHouse = houseUserMap[id];
            usersInHouse.sort((a,b) => b.rv - a.rv);
            allDataSroted['10'].push({house: house.name, maxRvUser: usersInHouse[0]});
            if (usersInHouse && usersInHouse.length > 0) {
                var scorePersonal = 0;
                var rankMove = 0;
                var leaderMatchFamily = 0;
                var sameDepartment = 0;
                var totalFamilyAbility = 0;
                var totalPartake = 0;

                // 
                var lengthConWis = 0;
                var sumThanks = 0;
                usersInHouse.map(user => {
                    scorePersonal += user.rv;
                    if (user.conLv == 'S') { lengthConWis+=1; } // trophy (3)
                    if (user.wisLv == 'S') { lengthConWis+=1; } // trophy (3)
                    sumThanks += user.thankTimes; // trophy (10)
                    totalPartake += user.partake;
                    if (maxRvUsers.findIndex(u => u.id == user.id)>=0) { //trophy (1)
                        maxRvUserHouses.push({house, user});
                    }
                    if (mapUserMatches[user.id]) { //trophy (8)
                        var rounds = mapUserMatches[user.id];
                        var numUserCode = parseInt(user.code.replace(/[A-Z]+/i, ''), 10) || 0;
                        rounds.map(r => {
                            if (mapMatchTotalCode[r]) {
                                if (mapMatchTotalCode[r][user.houseId]) {
                                    mapMatchTotalCode[r][user.houseId] += numUserCode;
                                } else {
                                    mapMatchTotalCode[r][user.houseId] = numUserCode;
                                }
                            } else {
                                mapMatchTotalCode[r] = {[user.houseId]: numUserCode};
                            }
                        });
                    }
                });
                // trophy (3)
                if (lengthConWis > maxConWisLevelSHouses[0].cw) {
                    maxConWisLevelSHouses = [{house, cw: lengthConWis}];
                } else if (lengthConWis == maxConWisLevelSHouses[0].cw) {
                    maxConWisLevelSHouses.push({house, cw: lengthConWis});
                }
                if (sumThanks > maxThanks[0].times) { // trophy (10)
                    maxThanks = [{times: sumThanks, house}];
                } else if (sumThanks == maxThanks[0].times) {
                    maxThanks.push({times: sumThanks, house});
                }
                
                allDataSroted['20'].push({house: house.name, totalPartake});
                allDataSroted['30'].push({house: house.name, lengthConWis});
                allDataSroted['100'].push({house: house.name, sumThanks});

                //
                var leader = users.find(u => u.id == house.leaderId);
                if (leader) {
                    // trophy (4)
                    var department = mapDepartmentUser[leader.departmentName];
                    var usersInSameDepartment = usersInHouse.filter(u => u.departmentName == leader.departmentName);
                    var rate = usersInSameDepartment.length / department.length;
                    if (rate > maxDepartments[0].rate) {
                        maxDepartments = [{rate, house, usersInSameDepartment}];
                    } else if (rate == maxDepartments[0].rate) {
                        maxDepartments.push({rate, house, usersInSameDepartment, department});
                    }
                    sameDepartment = usersInSameDepartment.length;
                    allDataSroted['40'].push({house: house.name, sameDepartment, max: department.length, rate});
                    // trophy (5)
                    var leaderAbility = getLvToNum(leader);
                    var leaderGap = 0;
                    usersInHouse.map(user => {
                        var userAbility = getLvToNum(user);
                        ['str', 'dex', 'con', 'wis', 'cha'].map(loc => {
                            var gap = Math.abs(leaderAbility[loc] - userAbility[loc]);
                            leaderGap += gap;
                            totalFamilyAbility += userAbility[loc];
                        });
                    });
                    if (leaderGap < closestAbility[0].gap) {
                        closestAbility = [{gap: leaderGap, house}];
                    } else if (leaderGap == closestAbility[0].gap) {
                        closestAbility.push({gap: leaderGap, house});
                    }
                    leaderMatchFamily = leaderGap;
                    allDataSroted['50'].push({house: house.name, leaderGap});
                    //trophy (6)
                    var changeRank = mapReusltChanges[house.id] || {change: 0};
                    if (changeRank.change > maxChangeRanks[0].change) {
                        maxChangeRanks = [{change: changeRank.change, house}];
                    } else if (changeRank.change == maxChangeRanks[0].change) {
                        maxChangeRanks.push({change: changeRank.change, house});
                    }
                    rankMove = changeRank.change;
                    allDataSroted['60'].push({house: house.name, rankMove});
                    
                    // trophy (7)
                    var ladies = usersInHouse.filter(u => u.gender == 2).length;
                    if (ladies > maxLady.ladies) {
                        maxLady = {ladies, house};
                    }
                    allDataSroted['70'].push({house: house.name, ladies});
                    
                    // trophy (9)
                    var chaLvS = usersInHouse.filter(u => u.chaLv == 'S').length;
                    if (chaLvS > maxChas[0].len) {
                        maxChas = [{len: chaLvS, house}];
                    } else if (chaLvS == maxChas[0].len) {
                        maxChas.push({len: chaLvS, house});
                    }
                    allDataSroted['90'].push({house: house.name, chaLvS});
                }

                // update houses
                
                [scorePersonal,leaderMatchFamily,sameDepartment,totalFamilyAbility,totalPartake,rankMove].map(loc => {
                    if (isNaN(loc)) {
                        throw `${house.name} has NaN number. [${scorePersonal}, ${leaderMatchFamily}, ${sameDepartment}, ${totalFamilyAbility}, ${totalPartake}]`; 
                    }
                });
                house.update({
                    scorePersonal,
                    leaderMatchFamily,
                    sameDepartment,
                    totalFamilyAbility,
                    totalPartake,
                    rankMove,
                });
            }
        });
        // trophy (2)
        houses.map(house => {
            if (house.totalPartake > maxPartakeHouses[0].totalPartake) {
                maxPartakeHouses = [house];
            } else if (house.totalPartake == maxPartakeHouses[0].totalPartake) {
                maxPartakeHouses.push(house);
            }
        });
        // trophy (8)
        Object.keys(mapMatchTotalCode).map(keyRound => {
            var loc = mapMatchTotalCode[keyRound];
            var obj = {round: keyRound, codeNums: []};
            Object.keys(loc).map(hid => {
                var _number = loc[hid];
                if (_number > maxWorkCode.num) {
                    maxWorkCode.num = _number
                    maxWorkCode.round = keyRound;
                    maxWorkCode.house = houses.find(h => h.id == hid);
                }
                obj.codeNums.push({houseId: hid, num: _number});
            });
            allDataSroted['80'].push(obj);
        });


        var trophyMap = {
            '10': maxRvUserHouses,
            '20': maxPartakeHouses,
            '30': maxConWisLevelSHouses,
            '40': maxDepartments,
            '50': closestAbility,
            '60': maxChangeRanks,
            '70': maxLady,
            '80': maxWorkCode,
            '90': maxChas,
            '100': maxThanks,
        }
        var trophies = {};
        Object.keys(trophyMap).map(key => {
            var loc = trophyMap[key];
            if (Array.isArray(loc)) {
                trophies[key] = loc.map(e => e.house ? e.house.name : e.name);
            } else {
                trophies[key] = loc.house ? loc.house.name : loc.name;
            }
        });
        allDataSroted['10'].sort((a,b) => b.maxRvUser.rv - a.maxRvUser.rv);
        allDataSroted['20'].sort((a,b) => b.totalPartake - a.totalPartake);
        allDataSroted['30'].sort((a,b) => b.lengthConWis - a.lengthConWis);
        allDataSroted['40'].sort((a,b) => b.rate - a.rate);
        allDataSroted['50'].sort((a,b) => b.leaderGap - a.leaderGap);
        allDataSroted['60'].sort((a,b) => b.rankMove - a.rankMove);
        allDataSroted['70'].sort((a,b) => b.ladies - a.ladies);
        allDataSroted['90'].sort((a,b) => b.chaLvS - a.chaLvS);
        allDataSroted['100'].sort((a,b) => b.sumThanks - a.sumThanks);
        res.json({houses, trophies, trophyMap, allDataSroted});
    }).catch(err => {
        console.log(err);
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
        case '7': _model = models.Countryside; break;
        case '8': _model = models.Order; break;
        case '9': _model = models.Voter; break;
        case '10': _model = models.Config; break;
        case '11': _model = models.Prediction; break;
        default:
            return res.status(403).json({'msg': 'failed'});
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


function freshGameResult(req, res) {
    const all_promise = [];
    all_promise.push(models.Result.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']],
    }));
    all_promise.push(models.Match.findAll({
        attributes: ['id', 'success', 'userId', 'houseIdNow', 'add', 'minus', 'shift', 'round', 'activity']
    }));

    Promise.all(all_promise).then(([results, matches]) => {
        results.map(e => {
            e._json = JSON.parse(e.json);
            e._ranking = JSON.parse(e.ranking);
        });
        
        const matchMap = {};
        const datasetMap = {};
        matches.map(match => {
            let hid = match.houseIdNow;
            let round = match.round;
            if (!datasetMap[round]) {
                datasetMap[round] = {};
            }
            if (!datasetMap[round][hid]) {
                datasetMap[round][hid] = {
                    total: {add: 0, minus: 0, shift: 0, success: 0, activity: 0},
                    matchesMap: {},
                };
            }


            if (datasetMap[round][hid].matchesMap[match.userId]) {
                const _user_matches = datasetMap[round][hid].matchesMap[match.userId];
                let max = {
                    add: 0,
                    shift: 0,
                    activity: 0,
                };
                
                _user_matches.map(_m => {
                    if (_m.add > max.add) { max.add = _m.add; }
                    if (_m.shift > max.shift) { max.shift = _m.shift; }
                    if (_m.activity > max.activity) { max.activity = _m.activity; }
                });
                
                if (match.add > max.add) {
                    datasetMap[round][hid].total.add += (match.add - max.add);
                }
                if (match.shift > max.shift) {
                    datasetMap[round][hid].total.shift += (match.shift - max.shift);
                }
                if (match.activity > max.activity) {
                    datasetMap[round][hid].total.activity += (match.activity - max.activity);
                }
                datasetMap[round][hid].matchesMap[match.userId].push(match);
            } else {
                datasetMap[round][hid].total.add+= match.add;
                datasetMap[round][hid].total.shift+= match.shift;
                datasetMap[round][hid].total.activity+= match.activity;
                datasetMap[round][hid].matchesMap[match.userId] = [match];
            }

            datasetMap[round][hid].total.minus+= match.minus;
            datasetMap[round][hid].total.success+= (match.success || 0);
        });
        results.map(result => {
            const data = datasetMap[result._json.round];
            if (!data) return;
            const matchesdata = Object.keys(data).map(houseId => {
                return {houseId: parseInt(houseId), ...data[houseId].total}
            }).filter(e => e.houseId > 0);
            matchesdata.sort((a,b) => {
                const gap = b.success - a.success;
                return gap == 0 ? b.activity - a.activity : gap;
            })
            const nextJson = {...result._json, matchesdata};
            const nextRanking = matchesdata.filter(e => e.add > 0).map(e => e.houseId);
            
            result.update({
                json: JSON.stringify(nextJson),
                ranking: JSON.stringify(nextRanking),
            });
        });

        res.json(results);

    }).catch(err => console.log(err));
}

function getVoteResult(req, res) {
    const promise_1 = models.User.findAll({
        attributes: ['id', 'name', 'nickname', 'mvp', 'houseIdTmp', 'houseId'],
        where: {status: 1},
    });
    const promise_2 = models.Voter.findAll({
        attributes: ['round', 'vote', 'voteTwo', 'voteThree', 'userId'],
    });
    Promise.all([promise_1, promise_2]).then(([users, voters]) => {
        const userMap = {};
        const roundUserVotedMap = {};
        const doneVoteMap = {};
        users.map(user => {
            userMap[user.id] = user;
        });

        voters.map(voter => {
            let round = voter.round;
            let uid = voter.userId;
            let voteTo = [voter.vote, voter.voteTwo, voter.voteThree];
            if (!roundUserVotedMap[round]) {
                roundUserVotedMap[round] = {};
                doneVoteMap[round] = [];
            }
            doneVoteMap[round].push(uid);

            voteTo.map(votedId => {
                if (votedId && votedId > 0) {
                    if (!roundUserVotedMap[round][votedId]) {
                        let user = userMap[uid];
                        roundUserVotedMap[round][votedId] = {id: votedId, voted: 0, house: user.houseId || user.houseIdTmp};
                    }
                    roundUserVotedMap[round][votedId].voted += 1;
                }
            });
        });

        const notVoteUsers = Object.keys(doneVoteMap).map(round => {
            const _result = {round};
            const _ary = doneVoteMap[round];
            _result.users = users.filter(user => !(_ary.includes(user.id) || (user.houseIdTmp == 0 && user.houseId == 0))).map(user => user.name);
            return _result;
        });
        const voteResultList = Object.keys(roundUserVotedMap).map(round => {
            const list = Object.values(roundUserVotedMap[round]).filter(e => e.house>0);
            list.sort((a,b) => {
                return a.house == b.house ? b.voted - a.voted : a.house - b.house;
            });
            return {round, list};
        });
        const top = voteResultList.map(result => {
            const resultMap = {};
            const list = result.list.map(e => {
                if (!resultMap[e.house]) {
                    let user = userMap[e.id];
                    resultMap[e.house] = {...e, username: user.name, nickname: user.nickname};
                }
            });
            return {round: result.round, resultMap};
        });

        res.json({
            notVoteUsers,
            voteResultList,
            top,
        });
    }).catch(err => console.log(err));
}