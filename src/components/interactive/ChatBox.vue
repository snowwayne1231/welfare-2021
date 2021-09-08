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
      <button @click="sendMessage">送出</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ACT_SAY_CHAT_ROOM, ACT_JOIN_CHAT_ROOM, ACT_LEAVE_CHAT_ROOM } from '../../store/enum';

export default {
  name: 'ChatBox',
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
  beforeDestroy() {
    this.$store.dispatch('wsEmitMessage', {act: ACT_LEAVE_CHAT_ROOM});
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

<style lang="scss">
.chat-box {
    position: relative;
    height: 200px;

    .chat-history {
        height: calc(100% - 28px);
        background-color: #160d07;
        border: 1px solid #805b00;
        box-sizing: border-box;
        color: #fff;
        text-align: left;
        overflow-y: scroll;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column-reverse;
        }
        li {
            list-style: none;
        }
    }
    .chat-tools {
        height: 28px;
        border: 1px solid #805b00;
        position: relative;
        box-sizing: border-box;
        padding: 2px;

        .chat-tool-input {
            background-color: #7b746f;
            width: calc(100% - 80px);
        }
        button {
            background-color: #160d07;
            border-radius: 5px;
            color: #ab9e3c;
        }
    }
}
</style>