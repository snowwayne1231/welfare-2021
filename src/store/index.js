import Vue from 'vue';
import Vuex from 'vuex';
import socketio from 'socket.io-client';
import createSocketIoPlugin from 'vuex-socketio';
import {
    ACT_GET_HOUSES_DATA, ACT_GET_FAMILY_DATA, ACT_GET_PEOPLE_DATA, ACT_UPDATE_SKILL, 
    ACT_JOIN_CHAT_ROOM, ACT_LEAVE_CHAT_ROOM, ACT_MOVE_CHAT_ROOM, ACT_SAY_CHAT_ROOM,
    ACT_GET_ADMIN_DATASET, ACT_GET_COUNTRYSIDE_DATA, ACT_GET_TROPHY, ACT_GET_CONFIG,
    ACT_GET_LOVE, ACT_GET_SELF_VOTE, ACT_GET_PREDICTIONS, ACT_GET_GAMES, ACT_GET_GAME_RESULTS,
    ACT_GET_GAME_MATCHES, ACT_GET_GAME_VIDEO, ACT_GET_USER_MATCHES, ACT_GET_MATCHES
    
} from './enum';
import _Firebase from '@/store/firebase-s';
console.log('process.env: ', process.env);
const wsLocation = process.env.WS_LOCATION;
const socket = socketio(wsLocation);
const socketPlugin = createSocketIoPlugin(socket, {
    onPrefix: 'wsOn',
    emitPrefix: 'wsEmit',
});
const _lvMap = {'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1, '-': 0};
const _numToLvMap = {1: 'D', 2: 'C', 3: 'B', 4: 'A'};
const _lvNums = (s,d,c,w,ca) => {
    let str = _lvMap[s] || 0;
    let dex = _lvMap[d] || 0;
    let con = _lvMap[c] || 0;
    let wis = _lvMap[w] || 0;
    let cha = _lvMap[ca] || 0;
    return {str,dex,con,wis,cha};
}
const _plusLv = (nums, json) => {
    if (typeof json == 'string') { json = JSON.parse(json); }
    if (!json.sdcwc) { json.sdcwc = [0,0,0,0,0]; }
    let str = nums.str + json.sdcwc[0];
    let dex = nums.dex + json.sdcwc[1];
    let con = nums.con + json.sdcwc[2];
    let wis = nums.wis + json.sdcwc[3];
    let cha = nums.cha + json.sdcwc[4];
    str = str >= 5 ? 'S' : (_numToLvMap[str] || '-');
    dex = dex >= 5 ? 'S' : (_numToLvMap[dex] || '-');
    con = con >= 5 ? 'S' : (_numToLvMap[con] || '-');
    wis = wis >= 5 ? 'S' : (_numToLvMap[wis] || '-');
    cha = cha >= 5 ? 'S' : (_numToLvMap[cha] || '-');
    return {str, dex, con, wis, cha};
}
const _houseAbility = (users) => {
    let atk = 0;
    let move = 5;
    let moveAgain = 0;
    let totalRV = 0;
    let vassal = 0;
    users.map(u => {
        if (u.houseId == 0) { return u; }
        const lvmaps = _lvNums(u.strLv, u.dexLv, u.conLv, '-', '-');
        if (lvmaps.str >= 5) {
            atk += 1;
        }
        if (lvmaps.dex >= 5) {
            move += 1;
        }
        if (lvmaps.con >= 5) {
            moveAgain += 1;
        }
        if (u.int > 0) {
            vassal += 1;
        }
        totalRV += u.rv;
    });
    return {atk, move, moveAgain, totalRV, vassal};
}

Vue.use(Vuex);

const userInitState = {
    id: 0,
    code: '',
    name: '',
    nickname: '',
    departmentName: '',
    lastName: '',
    firstName: '',
    rv: 0,
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    strLv: '-',
    dexLv: '-',
    conLv: '-',
    intLv: '-',
    wisLv: '-',
    chaLv: '-',
    isLeader: false,
    houseId: 0,
    houseIdTmp: 0,
    thankTimes: 0,
    gender: 0,
    mvp: 0,
    partake: 0,
    timestamp: 0,
    connected: false,
    family: [],
    json: {},
    skillPointJson: {"origin": 0, "now": 0, "sdcwc": [0,0,0,0,0]},
    skillSpended: -1,
    skillSDCWC: [0,0,0,0,0],
    voter: {},
    matches: [],
};

const moduleUser = {
    state: {...userInitState},
    mutations: {
        wsOnConnect: (state) => {
            state.connected = true;
        },
        wsOnDisconnect: (state) => {
            state.connected = false;
        },
        wsOnMessage: (state, message) => {
            if (message.redirect) {
                window.location.href = message.redirect;
                return;
            }
            const payload = message.payload;
            switch (message.act) {
                case ACT_GET_FAMILY_DATA:
                    if (payload.users && payload.users.length > 0) {
                        state.family = payload.users.map(u => {
                            u.skillPointJson = JSON.parse(u.skillPointJson);
                            const nums = _lvNums(u.strLv, u.dexLv, u.conLv, u.wisLv, u.chaLv);
                            const plused = _plusLv(nums, u.skillPointJson);
                            u.strLv = plused.str;
                            u.dexLv = plused.dex;
                            u.conLv = plused.con;
                            u.wisLv = plused.wis;
                            u.chaLv = plused.cha;
                            return u;
                        });
                    }
                    break;
                case ACT_UPDATE_SKILL:
                    let spended = 0;
                    state.skillSDCWC = state.skillPointJson.sdcwc.map(n => {spended += n; return n;});
                    state.skillSpended = spended;
                    break;
                case 0:
                case ACT_UPDATE_SKILL:
                    for (let key in userInitState) {
                        if (payload.hasOwnProperty(key)) {
                            if ((key=='json' || key=='skillPointJson') && typeof payload[key] == 'string') {
                                state[key] = JSON.parse(payload[key]);
                                if (state[key].origin > 0 && state.skillSpended == -1) {
                                    let spended = 0;
                                    state.skillSDCWC = state[key].sdcwc.map(n => {spended += n;return n;});
                                    state.skillSpended = spended;
                                }
                            } else {
                                state[key] = payload[key];
                            }
                        }
                    }
                    break;
                case ACT_GET_SELF_VOTE:
                    if (payload) {
                        state.voter = payload;
                    } else {
                        state.voter = {
                            id: 0,
                            vote: 0,
                            voteTwo: 0,
                            voteThree: 0,
                        }
                    }
                    break;
                case ACT_GET_USER_MATCHES: {
                    state.matches = payload;
                    break;
                }
                default:
            }
        },
    },
    actions: {
        wsEmitMessage: (context, message) => {
            // console.log('wsEmitMessage context: ', message);
        },
        wsEmitAuthorize: (context, message) => {
            // console.log('wsEmitAuthorize context: ');
        },
        updateSkillPoint: (context, payload) => {
            const idxMap = {'str': 0, 'dex': 1, 'con': 2, 'wis': 3, 'cha': 4};
            let next = {...context.state.skillPointJson};
            let newNow = next.now - payload.point;
            if (newNow < 0) { return; }
            console.log('context.state.skillPointJson.origin  ', context.state.skillPointJson.origin);
            if (newNow > (context.state.skillPointJson.origin - context.state.skillSpended)) {
                return alert('不能重置點數');
            }
            
            let idx = idxMap[payload.key];
            if (idx >= 0) {
                next.now = newNow;
                next.sdcwc[idx] = next.sdcwc[idx] + payload.point;
                if (next.sdcwc[idx] < 0) { return; }
                context.commit('wsOnMessage', {
                    act: 0,
                    payload: {
                        skillPointJson: next,
                    },
                });
            }
        },
    },
    getters: {
        lvNums: (state) => {
            return _lvNums(state.strLv, state.dexLv, state.conLv, state.wisLv, state.chaLv);
        },
        displayLv: (state, getters) => {
            const nums = getters.lvNums;
            return _plusLv(nums, state.skillPointJson);
        },
        displayLvNums: (state, getters) => {
            const displayLvs = getters.displayLv;
            return _lvNums(displayLvs.str, displayLvs.dex, displayLvs.con, displayLvs.wis, displayLvs.cha);
        },
        myHouseId: (state) => {
            return state.houseId > 0 ? state.houseId : state.houseIdTmp;
        },
        myHouseAbility: (state) => {
            return _houseAbility(state.family);
        }
    },
}

const globalData = {
    state: {
        houses: [],
        users: [],
        dataset: [],
        countryBorder: [],
        trophy: [],
        configs: [],
        predictions: [],
        matchesMap: {},
    },
    mutations: {
        wsOnMessage: (state, message) => {
            const payload = message.payload;
            switch (message.act) {
                case ACT_GET_HOUSES_DATA: {
                    const HouseImages = {
                        'stark': 'wolf.png',
                        'eyrie': 'bird.png',
                        'tully': 'fish.png',
                        'lannister': 'lion.png',
                        'tyrell': 'rose.png',
                        'baratheon': 'deer.png',
                        'targaryen': 'dragon.png',
                        'martell': 'sun.png',
                    };
                    //   const house_en = this.myHouse.en;
                    payload.houses.map(house => {
                        const img =  '/static/imgs/' + HouseImages[house.en];
                        house.img = img;
                    });
                    state.houses = payload.houses;
                    return console.log('Global Data Houses: ', payload.houses);
                }
                case ACT_GET_PEOPLE_DATA:
                    state.users = payload.users.map(u => {
                        u.json = JSON.parse(u.json);
                        return u;
                    });
                    return console.log('Global Data Users: ', payload);
                case ACT_GET_ADMIN_DATASET:
                    const nextDataset = payload.dataset.length > 0 && payload.dataset[0].userId > 0 ?
                        payload.dataset.map(d => {
                            let findedUser = state.users.find(e => e.id == d.userId);
                            if (findedUser) {
                                d.userId = findedUser.firstName;
                                d.userNickname = findedUser.nickname;
                            }
                            return d;
                        }) : payload.dataset;
                    state.dataset = nextDataset;
                    return console.log('Global Dataset: ', nextDataset);
                case ACT_GET_COUNTRYSIDE_DATA: {
                    const newBorder = payload.map(e => {
                        let id = e[1];
                        let user = state.users.find(u => u.id == id);
                        e[2] = user ? user.nickname : '';
                        e[3] = user ? user.rv : 0;
                        return e;
                    });
                    newBorder.sort((a,b) => b[3] - a[3]);
                    state.countryBorder = newBorder;
                    return;
                }
                case ACT_GET_TROPHY:
                    state.trophy = payload;
                    return console.log('Global trophy: ', payload);
                case ACT_GET_CONFIG: {
                    state.configs = payload;
                    return;
                }
                case ACT_GET_PREDICTIONS: {
                    state.predictions = payload;
                    return console.log('Global Predictions: ', payload);
                }
                case ACT_GET_MATCHES: {
                    const map = {};
                    payload.map(m => {
                        let uid = m.userId;
                        if (map[uid]) {
                            map[uid].push(m);
                        } else {
                            map[uid] = [m];
                        }
                    });
                    state.matchesMap = map;
                    return console.log('Global Matches: ', map);
                }
                default:
            }
        },
    },
    getters: {
        myHouse: (state, getters) => {
            const id = getters.myHouseId;
            if (id > 0 && state.houses.length > 0) {
                const house = state.houses.find(e => e.id == id);
                if (house) { return house; }
            }
            return false;
        },
        usersColor: (state) => {
            const houseColorMap = {};
            state.houses.map(h => {houseColorMap[h.id] = h.color});
            return state.users.map(u => {
                const hid = u.houseId > 0 ? u.houseId : u.houseIdTmp;
                const color = houseColorMap[hid] || '#fff';
                return {id: u.id, color};
            });
        },
        mapHouseFreefork: (state) => {
            const map = {};
            const mapIds = {};
            state.countryBorder.map(c => {
                const hid = c[0];
                if (mapIds.hasOwnProperty(hid)) {
                    mapIds[hid].push(c.slice(1));
                } else {
                    mapIds[hid] = [c.slice(1)];
                }
            });
            
            state.houses.map(house => {
                map[house.en] = mapIds.hasOwnProperty(house.id) ? mapIds[house.id] : [];
            });
            return map;
        },
        mapHouseAbility: (state) => {
            const map = {};
            state.houses.map(h => {
                const users = state.users.filter(u => u.houseId == h.id).map(u => {
                    const nums = _lvNums(u.strLv, u.dexLv, u.conLv, u.wisLv, u.chaLv);
                    const plused = _plusLv(nums, u.skillPointJson || {});
                    u.strLv = plused.str;
                    u.dexLv = plused.dex;
                    u.conLv = plused.con;
                    u.wisLv = plused.wis;
                    u.chaLv = plused.cha;
                    return u;
                });
                const ability = _houseAbility(users);
                map[h.en] = ability;
            });
            return map;
        },
        VoteConfig: (state) => {
            return state.configs.find(e => e.name=='vote') || {};
        },
        LoveConfig: (state) => {
            return state.configs.find(e => e.name=='love') || {};
        },
        PredictionConfg: (state) => {
            return state.configs.find(e => e.name=='prediction') || {};
        },
        isCountrysideOpen: (state) => {
            const found = state.configs.find(e => e.name=='countryside' && e.status == 1);
            return !!found;
        },
        isVoteOpen: (state, getters) => {
            return !!(getters.VoteConfig.status == 1);
        },
        isPredictionOpen: (state, getters) => {
            return getters.PredictionConfg.status > 0;
        },
        isPredictionAllowed: (state, getters) => {
            return getters.PredictionConfg.status == 1;
        },
        isLoveOpen: (state, getters) => {
            return !!(getters.LoveConfig.status == 1);
        },
        trophyLastDate: (state) => {
            let lastTime = 0;
            state.trophy.map(t => {
                const _date = new Date(t.updatedAt);
                const _time = _date ? _date.getTime() : 0;
                if (_time > 0 && _time > lastTime) {
                    lastTime = _time;
                }
            });
            return new Date(lastTime);
        },
    }
};

const loveMax = 18;
const moduleChatRoom = {
    state: {
        tablePlayers: [0,0,0,0,0,0,0,0,0,0,0,0],
        histories: [],
        peopleInBarHouse: [],
        loveCount: 0,
        loveArray: new Array(loveMax).fill(-1),
    },
    mutations: {
        wsOnMessage: (state, message) => {
            const payload = message.payload;
            switch (message.act) {
                case ACT_JOIN_CHAT_ROOM:
                    state.peopleInBarHouse = payload.bar_house_people;
                    break;
                case ACT_LEAVE_CHAT_ROOM:
                    state.peopleInBarHouse = payload.bar_house_people;
                    
                    break;
                case ACT_MOVE_CHAT_ROOM:
                    const user_id = payload.user_id;
                    const nextHouse = state.peopleInBarHouse.slice();
                    const user_idx = nextHouse.findIndex(e => e.id == user_id);
                    if (user_idx >= 0) {
                        nextHouse[user_idx].position = payload.position;
                    }
                    state.peopleInBarHouse = nextHouse;
                    break;
                case ACT_SAY_CHAT_ROOM:
                    const next = [...state.histories];
                    if (payload && next.unshift(payload) > 28) {
                        next.splice(-1,1);
                    }
                    state.histories = next;
                    break;
                case ACT_GET_LOVE: {
                    if (state.loveCount > 0 && state.loveCount != payload) {
                        let nextArray = state.loveArray.slice();
                        let left = payload % loveMax;
                        let add = Math.floor(Math.random() * 2) + 1;
                        nextArray[left] = (nextArray[left]+add) % 3;
                        state.loveArray = nextArray;
                    }
                    state.loveCount = payload;
                    break;
                }
                default:
            }
        },
        updateChat: (state, payload) => {
            for (let key in payload) {
                if (state.hasOwnProperty(key)) {
                    state[key] = payload[key];
                }
            }
        },
    },
}

const moduleGame = {
    state: {
        results: [],
        list: [],
        matches: [],
        videoLink: false,
    },
    mutations: {
        wsOnMessage: (state, message) => {
            const payload = message.payload;
            switch (message.act) {
                case ACT_GET_GAMES:
                    state.list = payload;
                    state.list.sort((a,b) => {
                        return b.gameNum - a.gameNum;
                    });
                    break;
                case ACT_GET_GAME_RESULTS: {
                    try {
                        state.results = payload.map(loc => {
                            loc.json = JSON.parse(loc.json);
                            loc.ranking = JSON.parse(loc.ranking);
                            return loc;
                        }).filter(e => !!e.json.round);
                        state.results.sort((a,b) => b.json.round - a.json.round);
                    } catch (err) {
                        console.log(err);
                    }
                    break;
                }
                case ACT_GET_GAME_MATCHES: {
                    state.matches = state.matches.concat(payload);
                    state.matches.sort((a,b) => a.game - b.game);
                    break;
                }
                case ACT_GET_GAME_VIDEO: {
                    state.videoLink = payload.VideoLink;
                    break;
                }
                default:
            }
        },
    },
}

export default new Vuex.Store({
    modules: {
      'user': moduleUser,
      'chat': moduleChatRoom,
      'global': globalData,
      'game': moduleGame,
    },
    plugins: [socketPlugin]
});
