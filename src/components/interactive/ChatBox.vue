<template>
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
</template>

<script>
import { mapState } from 'vuex';
import { ACT_SAY_CHAT_ROOM, ACT_JOIN_CHAT_ROOM } from '../../store/enum';

export default {
  name: 'Hepler',
  props: {
    title: String,
  },
  data() {
    return {
      chatInput: '',
    };
  },
  computed: {
    ...mapState(['user', 'chat']),
  },
  mounted() {
    const $this = this;
    if ($this.user.connected) {
      $this.$store.dispatch('wsEmitMessage', {act: ACT_JOIN_CHAT_ROOM});
    } else {
      $this.timer = window.setTimeout(() => {
        $this.$store.dispatch('wsEmitMessage', {act: ACT_JOIN_CHAT_ROOM});
        $this.timeoutHandler();
      }, 1000);
    }
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
        return window.alert('Please Wait 3 Second To Say Something.');
      }
      this.sendMessage(evt);
    },
    timeoutHandler(evt) {
      window.clearTimeout(this.timer);
      this.timer = 0;
    },
  }
};
</script>