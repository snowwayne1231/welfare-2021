import Vue from 'vue';
import Vuex from 'vuex';
import socketio from 'socket.io-client';
import createSocketIoPlugin from 'vuex-socketio';
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
    cha: 0,
    strLv: '-',
    dexLv: '-',
    conLv: '-',
    intLv: '-',
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
};

const moduleUser = {
    state: {...userInitState},
    mutations: {
        wsOnConnect: (state) => {
            console.log('wsOnConnect');
            console.log(state);
            state.connected = true;
        },
        wsOnDisconnect: (state) => {
            state.connected = false;
        },
        wsOnMessage: (state, message) => {
            console.log('wsOnMessage User');
            if (message.redirect) {
                window.location.href = message.redirect;
                return;
            }
            if (message.act == 0) {
                const payload = message.payload;
                for (let key in userInitState) {
                    if (payload.hasOwnProperty(key)) {
                        state[key] = payload[key];
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

const moduleChatRoom = {
    state: {
        tablePlayers: [0,0,0,0,0,0,0,0,0,0,0,0],
        histories: [],
    },
    mutations: {
        wsOnMessage: (state, message) => {
            console.log('wsOnMessage Chatroom');
            if (message.act == 6) {
                const payload = message.payload;
                const next = [...state.histories];
                console.log('payload: ', payload);
                if (next.unshift(payload) > 10) {
                    next.splice(-1,1);
                }
                state.histories = next;
            }
        },
    }
}

export default new Vuex.Store({
    modules: {
      'user': moduleUser,
      'chat': moduleChatRoom,
    },
    plugins: [socketPlugin]
});
