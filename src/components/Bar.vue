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
                <md-icon :style="{color: getColorByUserId(person.id)}">person</md-icon>
              </b>
            </div>
            
          </div>
          <div class="bar-content-table" :class="{active: openBoard}">
            <md-table v-model="showWantedPeople" md-sort="rv" md-sort-order="desc" md-fixed-header class="wanted-table" v-if="showWantedPeople.length>0">
              <md-table-toolbar>
                <h1 class="md-title">WANTED</h1>
                <span class="bar-content-close-btn" @click="onClickCloseBoard"><md-icon>close</md-icon></span>
              </md-table-toolbar>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Nickname" md-sort-by="nickname">{{ item.nickname || 'none' }}</md-table-cell>
                <md-table-cell md-label="Rv" md-sort-by="rv" :class="item.lvColor">{{ getRvNameByColor(item.lvColor) }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          <div class="bar-content-open-table-btn bar-content-open" @click="onClickBarOpenBoard"><img src="/static/imgs/board.png" /></div>
          <div class="bar-content-menu" :class="{active: openMenu}">
            <md-tabs>
              <md-tab id="bar-tab-store" md-label="商品" md-icon="store" exact>
                <div class="bar-store">
                  <div class="item"><i class="img-warpper" title="更名卷軸"><img src="/static/imgs/paper.jpg" /></i>
                  </div><div class="item"><i class="img-warpper" title="紅色藥水"><img src="/static/imgs/red_water.jpg" /></i>
                  </div><div class="item"><i class="img-warpper" title="綠色藥水"><img src="/static/imgs/green_water.jpg" /></i>
                  </div><div class="item"><i class="img-warpper" title="魔法寶石"><img src="/static/imgs/magic_rock.jpg" /></i>
                  </div><div class="item" v-for="i in 12" :key="i"><i class="img-warpper" title=""></i></div>
                </div>
              </md-tab>
              <md-tab id="bar-tab-join" md-label="國境" md-icon="directions_run">
                <div class="family-join">
                  <div class="house" v-for="idx in 8" :key="idx" :class="'house-'+idx">
                    
                  </div>
                  <div class="house-none">
                    <li class="freefork" v-for="hero in showNoneFamilyHeros" :key="hero[1]">{{hero[2]}}</li>
                  </div>
                </div>
              </md-tab>
              <md-tab id="bar-tab-posts" md-label="離開" md-icon="exit_to_app" @click="onClickCancelMenu"></md-tab>
            </md-tabs>
          </div>
          <div class="bar-content-open-bartender bar-content-open" @click="onClickBarOpenMenu"><img src="/static/imgs/bartender.png" /></div>
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
import { mapState, mapGetters } from 'vuex';
import { ACT_JOIN_CHAT_ROOM, ACT_LEAVE_CHAT_ROOM, ACT_JOIN_FAMILY, ACT_SAY_CHAT_ROOM, ACT_GET_PEOPLE_DATA, ACT_MOVE_CHAT_ROOM, ACT_GET_COUNTRYSIDE_DATA } from '../store/enum';

export default {
  name: 'Bar',
  data() {
    return {
      chatInput: '',
      timeoutSecond: 3,
      openBoard: false,
      openMenu: false,
    };
  },
  mounted() {
    // console.log(this);
    const $this = this;
    if ($this.user.connected) {
      $this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PEOPLE_DATA});
      $this.$store.dispatch('wsEmitMessage', {act: ACT_JOIN_CHAT_ROOM});
    } else {
      $this.timer = window.setTimeout(() => {
        $this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PEOPLE_DATA});
        $this.$store.dispatch('wsEmitMessage', {act: ACT_JOIN_CHAT_ROOM});
        $this.timeoutHandler();
      }, 1000);
    }
    
  },
  beforeDestroy() {
    this.$store.dispatch('wsEmitMessage', {act: ACT_LEAVE_CHAT_ROOM});
  },
  computed: {
    ...mapState(['user', 'chat', 'global']),
    ...mapGetters(['myHouse', 'usersColor']),
    showWantedPeople: {
      get() {
        return this.chat.publicPeople.filter(e => {
          return e.houseId == 0 && e.houseIdTmp == 0 && e.mvp == 0 && e.isLeader == false && e.nickname;
        });
      },
      set(next) {
        this.$store.commit('updateChat', {publicPeople: next});
      },
    },
    showNoneFamilyHeros() {
      return this.global.countryBorder.filter(e => e[0] == 0);
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
      if (this.showWantedPeople.length > 0) {
        this.openBoard = true;
      } else {
        window.alert('目前無懸賞人員.');
      }
    },
    onClickCloseBoard(evt) {
      this.openBoard = false;
    },
    onClickBarOpenMenu(evt) {
      this.openMenu = !this.openMenu;
      if (this.openMenu && this.global.countryBorder.length == 0) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_GET_COUNTRYSIDE_DATA});
      }
    },
    onClickCancelMenu(evt) {
      this.openMenu = false;
      evt.preventDefault();
      evt.stopPropagation();
    },
    getColorByUserId(id) {
      const user = this.usersColor.find(e => e.id == id);
      // console.log('getColorByUserId: ', user);
      if (user && user.color) {
        return user.color;
      }
      return '#ffffff';
    },
    getRvNameByColor(color) {
      switch (color) {
        case 'green': return '活耀';
        case 'blue': return '菁英';
        case 'purple': return '史詩';
        case 'gold': return '傳說';
        default: return '一般';
      }
    },
  }
}
</script>
