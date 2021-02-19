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
          <div class="bar-content-background">
            <div class="bar-content-people" @click="onClickBarBackground">
              <b class="bar-person-unit" v-for="person in chat.peopleInBarHouse" :key="person.id" :style="personalStyle(person)">
                <span class="bar-person-name">{{person.nickname}}</span>
                <md-icon>adb</md-icon>
              </b>
            </div>
            <div class="bar-content-open-table-btn" @click="onClickBarOpenBoard"><img src="/static/imgs/board.png" /></div>
          </div>
          <div class="bar-content-table" :class="{active: openBoard}">
            <md-table v-model="showWantedPeople" md-sort="rv" md-sort-order="desc" md-fixed-header class="wanted-table" v-if="showWantedPeople.length>0">
              <md-table-toolbar>
                <h1 class="md-title">WANTED</h1>
                <span class="bar-content-close-btn" @click="onClickCloseBoard"><md-icon>close</md-icon></span>
              </md-table-toolbar>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Nickname" md-sort-by="nickname" :class="item.lvColor">{{ item.nickname }}</md-table-cell>
                <md-table-cell md-label="Rv" md-sort-by="rv">{{ item.rv }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
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
import { ACT_JOIN_CHAT_ROOM, ACT_LEAVE_CHAT_ROOM, ACT_JOIN_FAMILY, ACT_SAY_CHAT_ROOM, ACT_GET_PEOPLE_DATA, ACT_MOVE_CHAT_ROOM } from '../store/enum';

export default {
  name: 'Bar',
  data() {
    return {
      chatInput: '',
      timeoutSecond: 3,
      openBoard: false,
    };
  },
  mounted() {
    // console.log(this);
    const $this = this;
    $this.timer = window.setTimeout(() => {
      $this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PEOPLE_DATA});
      $this.$store.dispatch('wsEmitMessage', {act: ACT_JOIN_CHAT_ROOM});
      $this.timeoutHandler();
    }, 1000);
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
        return window.alert('Please Wait 3 Second To Say Something.');
      }
      this.sendMessage(evt);
    },
    timeoutHandler(evt) {
      window.clearTimeout(this.timer);
      this.timer = 0;
    },
    timeoutMoveHandler(evt) {
      window.clearTimeout(this.timer_move);
      this.timer_move = 0;
    },
    movePosition(x, y) {
      if (this.timer_move > 0) {
        return;
      }
      this.timer_move = window.setTimeout(this.timeoutMoveHandler, 500);
      this.$store.dispatch('wsEmitMessage', {act: ACT_MOVE_CHAT_ROOM, payload: {x, y}});
    },
    onClickBarBackground(evt) {
      var x = evt.offsetX;
      var y = evt.offsetY;
      this.movePosition(x, y);
    },
    personalStyle(person) {
      return {transform: `translate(${person.position[0]}px, ${person.position[1]}px)`};
      // return {transform: `translate(${person.position[0]}[x], ${person.position[1]}px)`};
    },
    onClickBarOpenBoard(evt) {
      this.openBoard = true;
    },
    onClickCloseBoard(evt) {
      this.openBoard = false;
    }
  }
}
</script>
