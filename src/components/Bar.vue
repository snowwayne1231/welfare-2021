<template>
  <div class="bg-img" id="rv-bar">
    <md-card class="home-card bar-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>酒吧</span>
          </div>
          <div class="md-subhead">
            <span>bar in the kingdom</span>
          </div>
          <div class="note"></div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <div class="bar-content">
          <md-table v-model="showWantedPeople" md-sort="rv" md-sort-order="desc" md-fixed-header class="wanted-table">
            <md-table-toolbar>
              <h1 class="md-title">WANTED</h1>
            </md-table-toolbar>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="Nickname" md-sort-by="nickname" :class="item.lvColor">{{ item.nickname }}</md-table-cell>
              <md-table-cell md-label="Rv" md-sort-by="rv">{{ item.rv }}</md-table-cell>
            </md-table-row>
          </md-table>
        </div>
        <div class="chat-box">
          <div class="chat-history" ref="chatHistory">
            <ul>
              <li v-for="(history, idx) in chat.histories" :key="idx">
                <label>{{history.nickname}}</label>
                <span>: {{history.text}}</span>
              </li>
            </ul>
          </div>
          <div class="chat-tools">
            <input class="chat-tool-input" type="text" v-model="chatInput" maxlength="48" v-on:keyup.enter="onInputEnter" />
            <button @click="sendMessage">Submit</button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ACT_JOIN_CHAT_ROOM, ACT_LEAVE_CHAT_ROOM, ACT_JOIN_FAMILY, ACT_SAY_CHAT_ROOM, ACT_GET_PEOPLE_DATA } from '../store/enum';

export default {
  name: 'Bar',
  data() {
    return {
      chatInput: '',
      timeoutSecond: 5,
    };
  },
  mounted() {
    // console.log(this);
    this.$store.dispatch('wsEmitMessage', {act: ACT_JOIN_CHAT_ROOM});
    this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PEOPLE_DATA});
  },
  beforeDestroy() {
    this.$store.dispatch('wsEmitMessage', {act: ACT_LEAVE_CHAT_ROOM});
  },
  computed: {
    ...mapState(['user', 'chat']),
    showWantedPeople: {
      get() {
        return this.chat.publicPeople.filter(e => {
          return e.houseId == 0 && e.houseIdTmp == 0 && e.mvp == 0;
        });
      },
      set(next) {
        this.$store.commit('updateChat', {publicPeople: next});
      },
    },
  },
  updated() {
    if (this.$refs['chatHistory']) {
      this.$refs['chatHistory'].scrollTop = this.$refs['chatHistory'].scrollHeight;
    }
  },
  methods: {
    sendMessage(evt) {
      // console.log('Bar sendMessage');
      if (this.chatInput.length > 0) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_SAY_CHAT_ROOM, payload: {text: this.chatInput.substr(0,47)}});
        this.chatInput = '';
        this.timer = window.setTimeout(this.timeoutHandler, this.timeoutSecond * 1000);
      }
    },
    onInputEnter(evt) {
      if (this.timer > 0) {
        return window.alert('Please Wait 5 Second To Say Something.');
      }
      this.sendMessage(evt);
    },
    timeoutHandler(evt) {
      window.clearTimeout(this.timer);
      this.timer = 0;
    },
  }
}
</script>
