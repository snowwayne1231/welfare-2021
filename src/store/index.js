import Vue from 'vue';
import Vuex from 'vuex';
import socketio from 'socket.io-client';
import createSocketIoPlugin from 'vuex-socketio';

const socket = socketio();
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
            console.log('wsOnMessage');
            console.log(state, message);
            if (message.redirect) {
                window.location.href = message.redirect;
                return;
            }
            for (let key in userInitState) {
                if (message.hasOwnProperty(key)) {
                    state[key] = message[key];
                }
            }
        },
    },
    actions: {
        wsOnOtherMessage: (context, message) => {

        },
        wsEmitMessage: (context, message) => {
            console.log('context: ', context);
            // context.commit('authorize', message);
        },
        wsEmitAuthorize: (context, message) => {
            console.log('context: ', context);
            console.log('message: ', message);
            // context.commit('authorize', message);
        },
    },
}

const moduleGame = {

}

export default new Vuex.Store({
    modules: {
      'user': moduleUser,
    },
    plugins: [socketPlugin]
});
