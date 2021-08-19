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
        <div class="welfare-controller" v-if="user.intLv == 'W'">
          <md-switch v-model="isOpenCountry">入境開關</md-switch>
        </div>
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
                <Hepler title="目前可被招募為家族成員的自由民" />
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
          <div class="bar-content-menu" :class="{active: openMenu}" ref="menuContent">
            <md-tabs>
              <md-tab id="bar-tab-store" md-label="商品" md-icon="store" exact md-active-tab>
                <Hepler title="可以在此使用ＲＶ值購買商品" />
                <div class="bar-store">
                  <div class="item" v-for="(it, idx) in items" :key="idx" :class="{inactive: !it.activate}" @click="onClickItem(it)">
                    <i class="img-wrapper" :title="it.name"><img :src="it.img" />
                    </i><div class="name-wrapper">
                      <span class="item-name">{{it.name}}</span>
                      <span class="item-text">[ {{it.text}} ]</span>
                      <span class="item-price">消耗： ( {{it.price}} ) RV</span>
                    </div>
                  </div>
                </div>
                <md-dialog
                  :md-active.sync="activeBuy"
                >
                  <div class="md-dialog-container">
                    <span class="md-dialog-title md-title">請輸入您想更換的名稱</span>
                    <div class="md-dialog-content md-theme-default">
                      <div class="md-field md-theme-default md-has-placeholder">
                        <input type="text" v-model="buyingInput" id="buying-input" placeholder="請輸入中文" maxlength="12" class="md-input">
                      </div>
                    </div>
                    <div class="md-dialog-actions">
                      <button type="button" class="md-button" @click="activeBuy=false">
                        <div class="md-ripple">
                          <div class="md-button-content">取消</div>
                        </div>
                      </button>
                      <button type="button" class="md-button" @click="onConfirmBuying">
                        <div class="md-ripple">
                          <div class="md-button-content" >確定</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </md-dialog>
              </md-tab>
              <md-tab id="bar-tab-join" md-label="國民入境" md-icon="directions_run">
                <div class="family-join">
                  <div class="house" v-for="house in global.houses" :key="house.id" :class="'house-'+house.en">
                    <li class="freefork" v-for="fork in mapHouseFreefork[house.en]" :key="fork[0]"><i>{{fork[2]}}</i>{{fork[1]}}</li>
                    <li class="freefork" v-if="imNotInCountry"><button class="click-join" @click="onClickJoinCountry(house.id)">加入</button></li>
                  </div>
                  <div class="house-none house">
                    <li class="freefork" v-for="hero in showNoneFamilyHeros" :key="hero[1]"><i v-if="isCountrysideOpen">{{hero[3]}}</i>{{hero[2]}}</li>
                  </div>
                </div>
                <Hepler title="自由國民在此選擇入境，在每季選秀結束後為期一個禮拜期間可以自由移動到心屬的家族國境" />
              </md-tab>
              <md-tab id="bar-tab-posts" md-label="離開" md-icon="exit_to_app" @click="onClickCancelMenu"></md-tab>
            </md-tabs>
          </div>
          <div class="bar-content-open-bartender bar-content-open" @click="onClickBarOpenMenu"><img src="/static/imgs/bartender.png" /></div>
        </div>
        <ChatBox></ChatBox>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { ACT_GET_PEOPLE_DATA, ACT_MOVE_CHAT_ROOM, ACT_GET_COUNTRYSIDE_DATA, ACT_UPDATE_COUNTRYSIDE, ACT_UPDATE_NICKNAME, ACT_WELFARE_CONFIG_SETTING } from '../store/enum';
import Hepler from './panels/Helper';
import ChatBox from './interactive/ChatBox';

export default {
  name: 'Bar',
  components: {
    Hepler,
    ChatBox,
  },
  data() {
    return {
      timeoutSecond: 3,
      openBoard: false,
      openMenu: false,
      items: [
        {name: '更名卷軸', activate: true, img: '/static/imgs/paper.jpg', price: 3, text: '購買立即使用，可以重新登錄新的角色暱稱'},
        {name: '紅色藥水', activate: false, img: '/static/imgs/red_water.jpg', price: 1, text: '可以在同月份的公司內部活動中額外再挑戰一次遊戲門檻'},
        {name: '綠色藥水', activate: false, img: '/static/imgs/green_water.jpg', price: 0, text: '暫無..'},
        {name: '魔法寶石', activate: false, img: '/static/imgs/magic_rock.jpg', price: 8, text: '購買立即使用，可以獲得一點能力點數，任意增加一項能力'},
      ],
      activeBuy: false,
      buyingInput: '',
      wantedPeoples: [],
    };
  },
  mounted() {
    // console.log(this);
    const $this = this;
    $this.$store.dispatch('wsEmitMessage', { act: ACT_GET_PEOPLE_DATA });
  },
  computed: {
    ...mapState(['user', 'chat', 'global']),
    ...mapGetters(['myHouse', 'usersColor', 'mapHouseFreefork', 'isCountrysideOpen']),
    showWantedPeople: {
      get() {
        if (this.wantedPeoples.length > 0) { return this.wantedPeoples; }
        const users = this.global.users;
        const lvColors = [['gold', 27], ['purple', 18], ['blue', 10], ['green', 4], ['gray', 0]];
        const countrysideUserIds = [16, 114, 57];
        return users.map(u => {
            let score = u.rv;
            u.lvColor = (lvColors.find(c => c[1] <= score) || ['gray'])[0];
            u.houseIdNow = u.houseId > 0 ? u.houseId : u.houseIdTmp;
            return u;
        }).filter(e => {
          return e.houseId == 0 && e.isLeader == false && e.nickname && e.status > 0 && !countrysideUserIds.includes(e.id);
        });
      },
      set(next) {
        this.wantedPeoples = next;
      },
    },
    showNoneFamilyHeros() {
      return this.global.countryBorder.filter(e => e[0] == 0);
    },
    maxChoice() {
      return Math.ceil(this.global.countryBorder.length / 8);
    },
    imNotInCountry() {
      return this.isCountrysideOpen && this.global.countryBorder.findIndex(e => e[1] == this.user.id && e[0] == 0) >= 0;
    },
    isOpenCountry: {
      get() { return this.isCountrysideOpen },
      set(val) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_WELFARE_CONFIG_SETTING, payload: {name: 'countryside', open: val}});
      },
    },
  },
  
  methods: {
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
      if (this.openMenu) {
        const naviBtn = this.$refs.menuContent.querySelector('.md-tabs-navigation .md-button');
        if (Array.isArray(naviBtn)) {
          naviBtn[0] && naviBtn[0].click();
        } else if(naviBtn) {
          naviBtn.click();
        }
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
    onClickJoinCountry(house) {
      const houseTarget = this.global.houses.find(h => h.id == house);
      const houseFree = this.mapHouseFreefork[houseTarget.en];
      const idxMax = houseFree.reduce((a,b,idx,arr) => b[2] > arr[a][2] ? idx : a, 0);
      const payload = { house };
      if (houseFree.length >= this.maxChoice) {
        payload.replace = houseFree[idxMax][0];
        if (houseFree[idxMax] && this.user.rv >= houseFree[idxMax][2]) {
          return window.alert('RV值大於等於該國境成員.');
        }
      }
      
      const bool = window.confirm(`確定要加入家族『${houseTarget.name}』嗎？`);
      if (bool) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_UPDATE_COUNTRYSIDE, payload});
      }
    },
    onClickItem(item) {
      if (item.activate) {
        if (item.price > this.user.rv) {
          return window.alert('ＲＶ值不足');
        }
        
        switch (item.name) {
          case '更名卷軸':
            this.activeBuy = true;
            return ;
            default:
        }

      }
    },
    onConfirmBuying(evt) {
      const nextName = this.buyingInput;
      if (window.confirm(`確定暱稱修改為 『 ${nextName} 』 嗎？`)) {
        this.activeBuy = false;
        this.$store.dispatch('wsEmitMessage', {act: ACT_UPDATE_NICKNAME, payload: {nickname: nextName}});
      }
      
    },
    
  }
}
</script>
