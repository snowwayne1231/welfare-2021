<template>
  <div class="family bg-img">
    <md-card v-if="user.intLv == 'W' && user.houseId == 0" class="home-card admin">
      <md-table class="family-data-table">
        <md-table-row slot="md-table-row">
          <md-table-head>家族</md-table-head>
          <md-table-cell v-for="house in global.houses" :key="house.id" :style="{backgroundColor: `${house.color}42`}">{{ house.name}}</md-table-cell>
        </md-table-row>
        <md-table-row slot="md-table-row">
          <md-table-head>基本數據</md-table-head>
          <md-table-cell v-for="house in global.houses" :key="house.id">
            <ul class="list">
              <li>團體分: {{house.score}}</li>
              <li>參與次數: {{house.totalPartake}}</li>
              <li>SUM RV: {{getSumRvByHouseId(house.id)}}</li>
              <li>同部門: {{house.sameDepartment}}</li>
            </ul>
          </md-table-cell>
        </md-table-row>
        <md-table-row slot="md-table-row">
          <md-table-head>家族成員</md-table-head>
          <md-table-cell v-for="house in global.houses" :key="house.id">
            <ul class="list">
              <li v-for="user in getUsersByHouseId(house.id)" :key="user.id" :style="{backgroundColor: `${house.color}42`}"><div :style="{color: user.int > 0 ? '#ffc931' : '#fff'}">{{user.nickname}}</div><div>( {{user.rv}} ) - {{user.firstName}} </div></li>
            </ul>
          </md-table-cell>
        </md-table-row>
        <md-table-row slot="md-table-row">
          <md-table-head>國民</md-table-head>
          <md-table-cell v-for="house in global.houses" :key="house.id">
            <ul class="list citizen">
              <li v-for="user in getUsersByHouseId(house.id, 2)" :key="user.id"><div>{{user.nickname}}</div><div>( {{user.rv}} ) - {{user.firstName}}</div></li>
            </ul>
          </md-table-cell>
        </md-table-row>
      </md-table>

      <md-table class="family-data-table">
        <md-table-row slot="md-table-row">
          <md-table-head>自由民</md-table-head>
        </md-table-row>
        <md-table-row slot="md-table-row">
          <md-table-cell>
            <ul class="list freefork">
              <li v-for="user in getUsersByHouseId(0, 0).filter(u => u.status > 0)" :key="user.id"><div>{{user.nickname}}</div><div>( {{user.rv}} ) - {{user.firstName}}</div></li>
            </ul>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </md-card>
    <md-card v-else class="home-card">
      <md-card-header>
        <md-card-header-text>
          <img v-if="myHouse" :src="myHouseLogo" class="family-logo"/>
          <div class="md-title">
            <span v-if="myHouse">{{myHouse.name}}</span>
            <span v-else>尚未加入家族</span>
          </div>
          <div class="md-subhead" v-if="myHouse">
            <span>House Of {{myHouse.en}}</span>
            <div class="mvp-voting" v-if="isVoteOpen">開放MVP投票中...</div>
          </div>
          <div class="note" v-if="myHouse">
            <table>
              <tr>
                <th><Helper title="地圖板塊遊戲中能夠擊敗異鬼的數值" />攻擊力: </th>
                <td>{{myHouseAbility.atk}}</td>
              </tr>
              <tr>
                <th><Helper title="地圖板塊遊戲中能夠移動的格數" />移動力: </th>
                <td>{{myHouseAbility.move}}</td>
              </tr>
              <tr>
                <th><Helper title="地圖板塊遊戲中搭完船後能移動的格數" />再動: </th>
                <td>{{myHouseAbility.moveAgain}}</td>
              </tr>
              <tr>
                <th><Helper title="家族當前領土 / 領土最大值" />領土: </th>
                <td>{{myHouse.land}} / {{Math.floor(myHouseAbility.totalRV/10)}}</td>
              </tr>
            </table>
          </div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content class="role-area" v-if="myHouse">
        <div class="castle zone">
          <md-card class="role" v-for="(user) in myFamilyCastle" :key="user.id" :class="{leader: user.isLeader, partner: user.int > 0, self: user.isSelf}" >
            <Man :name="user.nickname" :str="user.strLv" :dex="user.dexLv" :con="user.conLv" :wis="user.wisLv" :cha="user.chaLv" :mvp="user.mvp" :voted="user.voted" @click="onClickFamily(user)"></Man>
          </md-card>
        </div>
        <div class="flat-house zone">
          <md-card class="role member" v-for="(user) in myFamilyHouse" :key="user.id" :class="{self: user.isSelf}" >
            <Man :name="user.nickname" :str="user.strLv" :dex="user.dexLv" :con="user.conLv" :wis="user.wisLv" :cha="user.chaLv" :mvp="user.mvp" :voted="user.voted" @click="onClickFamily(user)"></Man>
          </md-card>
        </div>
        <div class="zone suck-house">
          <md-card class="role traveler" v-for="(user) in myFamilyPopulace" :key="user.id" :class="{self: user.isSelf}">
            <Man :name="user.nickname" :str="user.strLv" :dex="user.dexLv" :con="user.conLv" :wis="user.wisLv" :cha="user.chaLv" :mvp="user.mvp" :voted="user.voted" @click="onClickFamily(user)"></Man>
          </md-card>
        </div>
        
      </md-card-content>

      <md-card-content v-else>
        <div class="no-join-family grassland">
          <img class="suck-house" src="/static/imgs/suck_house.png" />
          <span class="active-man">
            <md-icon>accessibility_new</md-icon>
            <md-icon>emoji_people</md-icon>
          </span>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import { ACT_GET_FAMILY_DATA, ACT_GET_SELF_VOTE, ACT_UPDATE_SELF_VOTE, ACT_GET_PEOPLE_DATA } from '../store/enum';
import Man from './panels/Man';
import Helper from './panels/Helper';


export default {
  name: 'Family',
  components: {Man, Helper},
  data() {
    return {
      voteName: '睿訊之國的闖關者',
    }
  },
  mounted() {
    // console.log(this);
    // this.sendMessage();
    if (this.user.connected) {
      this.whileConnection();
    } else {
      this.timer = window.setInterval(this.whileConnection, 200);
    }
  },
  beforeDestroy() {
    this.timer && window.clearInterval(this.timer);
  },
  computed: {
    ...mapState(['user', 'global']),
    ...mapGetters(['myHouse', 'myHouseAbility', 'isVoteOpen', 'VoteConfig']),
    voteRound() {
      return this.VoteConfig.setting;
    },
    myHouseLogo() {
      return this.myHouse.img;
    },
    family() {
      return JSON.parse(JSON.stringify(this.user.family));
    },
    myFamilyCastle() {
      const loc = this.family.filter(u => u.int > 0 || u.isLeader);
      loc.sort((a,b) => a.int - b.int);
      this.mapPeople(loc);
      return loc;
    },
    myFamilyHouse() {
      const loc = this.family.filter(u => u.houseId > 0 && !u.isLeader && u.int == 0);
      loc.sort((a,b) => b.rv - a.rv);
      this.mapPeople(loc);
      return loc;
    },
    myFamilyPopulace() {
      const loc = this.family.filter(u => u.houseId == 0 && !u.isLeader);
      loc.sort((a,b) => b.rv - a.rv);
      this.mapPeople(loc);
      return loc;
    },
    mapHouseUsers() {
      const map = {0: []};
      this.global.users.map(user => {
        const hid = user.houseId || 0;
        if (!map[hid]) {
          map[hid] = [];
        }
        map[hid].push(user);
      });
      for (var k in map) {
        map[k].sort((a,b) => b.rv - a.rv);
      }
      return map;
    },
  },
  methods: {
    whileConnection() {
      if (this.user.connected) {
        if (this.user.intLv == 'W' && this.user.houseId == 0) {
          this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PEOPLE_DATA, payload: {more: true}});
        } else {
          this.$store.dispatch('wsEmitMessage', {act: ACT_GET_FAMILY_DATA});
          this.$store.dispatch('wsEmitMessage', {act: ACT_GET_SELF_VOTE});
        }
        window.clearInterval(this.timer);
      }
    },
    mapPeople(ary) {
      const myuser = this.user;
      const voter = myuser.voter;
      const open = this.isVoteOpen;
      ary.map(e => {
        e.isSelf = e.id == myuser.id ;
        e.voted = open && (e.id == voter.vote || e.id == voter.voteTwo || e.id == voter.voteThree);
      });
    },
    onClickFamily(user) {
      if (user.id == this.user.id) { return; }
      if (!this.isVoteOpen) { return; }
      
      const voter = this.user.voter;
      const uid = user.id;
      let vote = voter.vote;
      let voteTwo = voter.voteTwo;
      let voteThree = voter.voteThree;
      if (user.voted) {
        if (vote == uid) {
          vote = 0;
        } else if (voteTwo == uid) {
          voteTwo = 0;
        } else {
          voteThree = 0;
        }
      } else {
        if (vote == 0) {
          vote = uid;
        } else if (voteTwo == 0) {
          voteTwo = uid;
        } else {
          voteThree = uid;
        }
      }
      
      this.$store.dispatch('wsEmitMessage', {act: ACT_UPDATE_SELF_VOTE, payload: {
        id: voter.id,
        vote,
        voteTwo,
        voteThree,
      }});
    },
    getUsersByHouseId(houseId, mode = 1) {
      if (mode==1) {
        return this.mapHouseUsers[houseId];
      } else {
        return this.mapHouseUsers[0].filter(e => e.houseIdTmp == houseId);
      }
    },
    getSumRvByHouseId(houseId) {
      const users = this.getUsersByHouseId(houseId);
      return users && users.length > 0 ? users.reduce((a, b) => a + b.rv, 0) : 0;
    },
  }
}
</script>