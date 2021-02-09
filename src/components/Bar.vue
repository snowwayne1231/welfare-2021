<template>
  <div class="home bg-img" id="rv-bar">
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
import RadarChart from './chart/radar';
import { ACT_JOIN_CHAT_ROOM, ACT_LEAVE_CHAT_ROOM, ACT_JOIN_FAMILY, ACT_SAY_CHAT_ROOM } from '../store/enum';

export default {
  name: 'Bar',
  components: {
    RadarChart
  },
  data() {
    return {
      chatInput: '',
    };
  },
  mounted() {
    // console.log(this);
    this.$store.dispatch('wsEmitMessage', {act: ACT_JOIN_CHAT_ROOM, payload: {}});
  },
  beforeDestroy() {
    this.$store.dispatch('wsEmitMessage', {act: ACT_LEAVE_CHAT_ROOM, payload: {}});
  },
  computed: {
    ...mapState(['user', 'chat']),
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
      }
    },
    onInputEnter(evt) {
      this.sendMessage(evt);
    },
  }
}
</script>
