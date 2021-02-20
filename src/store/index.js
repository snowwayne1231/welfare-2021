import Vue from 'vue';
import Vuex from 'vuex';
import socketio from 'socket.io-client';
import createSocketIoPlugin from 'vuex-socketio';
import {
    ACT_GET_HOUSES_DATA, ACT_GET_FAMILY_DATA, ACT_GET_PEOPLE_DATA, ACT_UPDATE_SKILL, 
    ACT_JOIN_CHAT_ROOM, ACT_LEAVE_CHAT_ROOM, ACT_MOVE_CHAT_ROOM, ACT_SAY_CHAT_ROOM
} from './enum';
console.log('process.env: ', process.env);
const wsLocation = process.env.WS_LOCATION;
const socket = socketio(wsLocation);
const socketPlugin = createSocketIoPlugin(socket, {
    onPrefix: 'wsOn',
    emitPrefix: 'wsEmit',
});
const lvMap = {'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1, '-': 0};

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
                        state.family = payload.users;
                    }
                    console.log('state.family: ', state.family);
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
                default:
            }
        },
    },
    actions: {
        wsEmitMessage: (context, message) => {
            // console.log('wsEmitMessage context: ', message);
        },
        wsEmitAuthorize: (context, message) => {
            console.log('wsEmitAuthorize context: ');
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
            let str = lvMap[state.strLv] || 0;
            let dex = lvMap[state.dexLv] || 0;
            let con = lvMap[state.conLv] || 0;
            let wis = lvMap[state.wisLv] || 0;
            let cha = lvMap[state.chaLv] || 0;
            return {str,dex,con,wis,cha};
        },
        displayLv: (state, getters) => {
            const nums = getters.lvNums;
            const numToLvMap = {1: 'D', 2: 'C', 3: 'B', 4: 'A'};
            let str = nums.str + state.skillPointJson.sdcwc[0];
            let dex = nums.dex + state.skillPointJson.sdcwc[1];
            let con = nums.con + state.skillPointJson.sdcwc[2];
            let wis = nums.wis + state.skillPointJson.sdcwc[3];
            let cha = nums.cha + state.skillPointJson.sdcwc[4];
            str = str >= 5 ? 'S' : (numToLvMap[str] || '-');
            dex = dex >= 5 ? 'S' : (numToLvMap[dex] || '-');
            con = con >= 5 ? 'S' : (numToLvMap[con] || '-');
            wis = wis >= 5 ? 'S' : (numToLvMap[wis] || '-');
            cha = cha >= 5 ? 'S' : (numToLvMap[cha] || '-');
            return {str,dex,con,wis,cha};
        },
        displayLvNums: (state, getters) => {
            const displayLvs = getters.displayLv;
            let str = lvMap[displayLvs.str] || 0;
            let dex = lvMap[displayLvs.dex] || 0;
            let con = lvMap[displayLvs.con] || 0;
            let wis = lvMap[displayLvs.wis] || 0;
            let cha = lvMap[displayLvs.cha] || 0;
            return {str,dex,con,wis,cha};
        },
        myHouseId: (state) => {
            return state.houseId > 0 ? state.houseId : state.houseIdTmp;
        },
    },
}

const globalData = {
    state: {
        houses: [],
        users: [],
    },
    mutations: {
        wsOnMessage: (state, message) => {
            const payload = message.payload;
            switch (message.act) {
                case ACT_GET_HOUSES_DATA:
                    state.houses = payload.houses;
                    return console.log('Global Data Houses: ', payload);
                case ACT_GET_PEOPLE_DATA:
                    state.users = payload.users;
                    return console.log('Global Data Users: ', payload);
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
    }
};

const moduleChatRoom = {
    state: {
        tablePlayers: [0,0,0,0,0,0,0,0,0,0,0,0],
        histories: [],
        publicPeople: [],
        peopleInBarHouse: [],
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
                    if (payload && next.unshift(payload) > 20) {
                        next.splice(-1,1);
                    }
                    state.histories = next;
                    break;
                case ACT_GET_PEOPLE_DATA:
                    const users = payload.users;
                    if (Array.isArray(users)) {
                        const lvColors = [['gold', 24], ['purple', 16], ['blue', 10], ['green', 4], ['gray', 0]];
                        users.map(u => {
                            let score = u.rv;
                            u.lvColor = lvColors.find(c => c[1] <= score)[0];
                        });
                        state.publicPeople = users;
                    }
                    break;
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

}

export default new Vuex.Store({
    modules: {
      'user': moduleUser,
      'chat': moduleChatRoom,
      'global': globalData,
    },
    plugins: [socketPlugin]
});
