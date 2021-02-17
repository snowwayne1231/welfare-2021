import Vue from 'vue';
import Vuex from 'vuex';
import socketio from 'socket.io-client';
import createSocketIoPlugin from 'vuex-socketio';
import { ACT_SAY_CHAT_ROOM, ACT_GET_HOUSES_DATA, ACT_GET_FAMILY_DATA, ACT_GET_PEOPLE_DATA} from './enum';
console.log('process.env: ', process.env);
const wsLocation = process.env.WS_LOCATION;
const socket = socketio(wsLocation);
const socketPlugin = createSocketIoPlugin(socket, {
    onPrefix: 'wsOn',
    emitPrefix: 'wsEmit',
});

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
};

const moduleUser = {
    state: {...userInitState},
    mutations: {
        wsOnConnect: (state) => {
            console.log('User State Change OnWsConnection');
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
                    console.log(payload);
                    if (payload.users) {
                        state.family = payload.users;
                    }
                    break;
                default:
                    for (let key in userInitState) {
                        if (payload.hasOwnProperty(key)) {
                            if (key=='json') {
                                state[key] = JSON.parse(payload[key]);
                            } else {
                                state[key] = payload[key];
                            }
                        }
                    }
            }
        },
    },
    actions: {
        wsEmitMessage: (context, message) => {
            console.log('wsEmitMessage context: ', message);
            // context.commit('authorize', message);
        },
        wsEmitAuthorize: (context, message) => {
            console.log('wsEmitAuthorize context: ');
        },
    },
}

const moduleGame = {

}

const globalData = {
    state: {
        houses: [],
    },
    mutations: {
        wsOnMessage: (state, message) => {
            
            if (message.act == ACT_GET_HOUSES_DATA) {
                const payload = message.payload;
                state.houses = payload.houses;
                console.log('wsOnMessage ACT_GET_HOUSES_DATA', message);
            }
        },
    },
};

const moduleChatRoom = {
    state: {
        tablePlayers: [0,0,0,0,0,0,0,0,0,0,0,0],
        histories: [],
        publicPeople: [],
    },
    mutations: {
        wsOnMessage: (state, message) => {
            const payload = message.payload;
            if (message.act == ACT_SAY_CHAT_ROOM) {
                const next = [...state.histories];
                if (payload && next.unshift(payload) > 20) {
                    next.splice(-1,1);
                }
                state.histories = next;
            } else if (message.act == ACT_GET_PEOPLE_DATA) {
                const users = payload.users;
                if (Array.isArray(users)) {
                    const lvToInt = {'S': 5,'A': 4,'B': 3,'C': 2,'D': 1, '-': 0};
                    const keys = ['strLv', 'dexLv', 'conLv', 'wisLv', 'chaLv'];
                    const lvColors = [['gold', 20], ['purple', 16], ['blue', 12], ['green', 8], ['gray', 0]];
                    users.map(u => {
                        let score = 0;
                        keys.map(key => {
                            let lv = u[key] || '-';
                            score += lvToInt[lv] || 0;
                        });
                        u.lvScore = score;
                        u.lvColor = lvColors.find(c => c[1] <= score)[0];
                    });
                    state.publicPeople = users;
                }
            }
        },
    }
}

export default new Vuex.Store({
    modules: {
      'user': moduleUser,
      'chat': moduleChatRoom,
      'global': globalData,
    },
    plugins: [socketPlugin]
});
