<template>
  <div class="arena bg-img" id="arena">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>競技場</span>
          </div>
          <div class="md-subhead">
            <span>bulletin of the kingdom</span>
          </div>
        </md-card-header-text>
        <div class="welfare-controller" v-if="user.intLv == 'W'">
          <!-- <md-input v-model="loveNumber" type="number"></md-input> -->
          <!-- <md-switch v-model="isOpenLove">愛心開關</md-switch> -->
          <md-switch v-model="isOpenPrediction" class="md-primary">預測開關</md-switch>
          <!-- <md-switch v-model="isLiveTwitch" class="md-accent">TWITCH</md-switch> -->
          <button @click="onClickPredictionShowConsole">Console預測人</button>
        </div>
      </md-card-header>
      <md-card-content>
        <md-tabs @md-changed="onTabChanged">

          <md-tab id="tab-ranking" md-label="總排名" exact>
            <md-table class="arena-table">
              <md-table-row>
                <md-table-head style="width: 50px;">名次</md-table-head>
                <md-table-head>家族</md-table-head>
                <md-table-head v-if="notOpenPrediction">家族積分</md-table-head>
                <md-table-head v-if="notOpenPrediction">家族RV總和</md-table-head>
                <md-table-head v-if="notOpenPrediction">獎牌</md-table-head>
                <md-table-head v-if="isOpenPrediction" ><div style="width: 20vw;">預測</div></md-table-head>
                <md-table-head>最終得分</md-table-head>
              </md-table-row>
              <md-table-row v-for="(loc, idx) in showResult" :key="loc.id">
                <md-table-cell>
                  <span>{{rerenderRank(idx)}}</span>
                </md-table-cell>
                <md-table-cell><img class="arena-house-img" :src="renderHouseImage(loc)" />{{rerenderHouseName(loc)}}</md-table-cell>
                <md-table-cell v-if="notOpenPrediction">{{loc.score}}</md-table-cell>
                <md-table-cell v-if="notOpenPrediction">{{getTotalRvScore(loc)}}</md-table-cell>
                <md-table-cell v-if="notOpenPrediction"><img class="arena-trophy-img" :src="`/static/imgs/trophy/${t.add}.png`" :title="t.name" v-for="t in loc.trophies" :key="t.add" /></md-table-cell>
                <md-table-cell v-if="isOpenPrediction">
                  <button v-if="openPredictionAndCanPredict" class="prediction-btn" @click="onClickPrediction(loc.id)">預測</button>
                  <div v-else-if="isOpenPrediction" class="prediction-results" :class="loc.en">
                    <div class="md-progress-bar"><div class="md-progress-bar-fill" :style="{width: `${loc.supportRate}%`}"></div></div>
                    <i class="suport-rate" :style="{paddingLeft: `${loc.supportRate}%`}">{{loc.supportRate}} %</i>
                  </div>
                </md-table-cell>
                <md-table-cell>{{getFinalScore(loc)}}</md-table-cell>
              </md-table-row>
            </md-table>
            <md-content>
              <i style="color: #fff;">獎牌最後結算時間:  {{trophyLastDate}}</i>
            </md-content>
          </md-tab>

          <md-tab id="tab-record" md-label="戰報" >
            <Record v-if="openRecord" />
          </md-tab>

          <!-- <md-tab id="tab-live" md-label="戰場" >
            <LiveBattle v-if="openLive" :isTwitch="isLiveTwitch" />
            <ChatBox v-if="openLive"/>
          </md-tab> -->

        </md-tabs>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { ACT_GET_TROPHY, ACT_WELFARE_CONFIG_SETTING, ACT_SEND_PREDICTION, ACT_GET_PREDICTIONS } from '../store/enum';
import LiveBattle from './panels/LiveBattle';
// import ChatBox from './interactive/ChatBox';
import Record from './panels/Record';

export default {
  name: 'Arena',
  components: {
    LiveBattle,
    // ChatBox,
    Record
  },
  data() {
    return {
      openLive: false,
      openRecord: false,
      noPredicted: true,
    };
  },
  mounted() {
    // console.log(this);
    if (this.global.trophy.length == 0) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_GET_TROPHY});
        this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PREDICTIONS});
    }
  },
  computed: {
    ...mapState(['user', 'global']),
    ...mapGetters(['isLoveOpen', 'trophyLastDate', 'isPredictionOpen', 'isPredictionAllowed']),
    showResult() {
      const loc = JSON.parse(JSON.stringify(this.global.houses));
      const $this = this;
      loc.map(e => {
        const trophies = this.global.trophy.filter(t => t.ownerHouseId == e.id);
        e.trophies = trophies || [];
        e.supportRate = Math.floor(this.getSupportedByHouseId(e.id));
      });
      loc.sort((a,b) => {
        const bs = $this.getFinalScore(b);
        const as = $this.getFinalScore(a);
        const gap = bs - as;
        const leaderChaGap = b.leader && a.leader ? b.leader.cha - a.leader.cha : 0;
        return gap == 0 ? leaderChaGap : gap;
      });
      return loc;
    },
    isOpenLove: {
      get() {
        return this.isLoveOpen;
      },
      set(val) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_WELFARE_CONFIG_SETTING, payload: {name: 'love', open: val}});
      },
    },
    isOpenPrediction: {
      get() {
        return this.isPredictionOpen;
      },
      set(val) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_WELFARE_CONFIG_SETTING, payload: {name: 'prediction', open: val}});
      },
    },
    isLiveTwitch: {
      get() {
        return (this.global.configs.find(e => e.name == 'twitch') || {}).status == 1;
      },
      set(val) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_WELFARE_CONFIG_SETTING, payload: {name: 'twitch', open: val}});
      },
    },
    notOpenPrediction() {
      return !this.isOpenPrediction;
    },
    openPredictionAndCanPredict: {
      get() {
        return (this.noPredicted && (this.global.predictions.findIndex(p => p.userId == this.user.id) < 0)) && this.isPredictionAllowed && this.global.trophy.length > 0;
      },
      set(val) {
        this.noPredicted = val;
      },
    },
  },
  methods: {
    rerenderRank(idx) {
      const ary = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
      return ary[idx];
    },
    rerenderHouseName(house) {
      return house.name;
    },
    renderHouseImage(house) {
      return house.img;
    },
    onTabChanged(tabId) {
      if (tabId == 'tab-live') {
        this.openLive = true;
      } else {
        this.openLive = false;
      }
      if (tabId == 'tab-record') {
        this.openRecord = true;
      } else {
        this.openRecord = false;
      }
    },
    onClickPrediction(house) {
      console.log('house: ', house);
      this.openPredictionAndCanPredict = false;
      this.$store.dispatch('wsEmitMessage', {act: ACT_SEND_PREDICTION, payload: {house}});
    },
    onClickPredictionShowConsole() {
      var predictions = this.global.predictions;
      var users = this.global.users;
      var houses = this.global.houses;
      if (users.length == 0) {
        return this.$store.dispatch('wsEmitMessage', { act: ACT_GET_PEOPLE_DATA });
      }
      var map = {};
      
      houses.map(h => {
        map[h.name] = [];
      });
      predictions.map(p => {
        var userId = p.userId;
        var houseId = p.houseId;
        var user = users.find(e => e.id == userId);
        var house = houses.find(h => h.id == houseId);
        map[house.name].push(user);
      });
      console.log(map);
      var map_nickname = {};
      for (var k in map) {
        map_nickname[k] = map[k].map(e => e.nickname);
      }
      console.log(map_nickname);
    },
    getSupportedByHouseId(id) {
      const predictions = this.global.predictions;
      return ((predictions.filter(p => p.houseId == id) || []).length / predictions.length) * 100;
    },
    getFinalScore(house) {
      let score = house.score + house.scorePersonal;
      let hasMickeysFavior = 0;
      house.trophies.map(t => {
        score += t.add;
        if (t.add == 20 || t.add == 30) {
          hasMickeysFavior += 1;
        }
      });
      if (hasMickeysFavior >= 2) {
        score += 100;
      }
      return score;
    },
    getTotalRvScore(house) {
      return house.scorePersonal;
    },
  }
};
</script>