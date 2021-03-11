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
          <md-switch v-model="isOpenLove">愛心開關</md-switch>
          <md-switch v-model="isOpenPrediction" class="md-primary">預測開關</md-switch>
        </div>
      </md-card-header>
      <md-card-content>
        <md-tabs @md-changed="onTabChanged">

          <md-tab id="tab-ranking" md-label="排名" exact>
            <md-table class="arena-table">
              <md-table-row>
                <md-table-head style="width: 50px;">名次</md-table-head>
                <md-table-head>家族</md-table-head>
                <md-table-head v-if="notOpenPrediction">家族積分</md-table-head>
                <md-table-head v-if="notOpenPrediction">獎牌</md-table-head>
                <md-table-head v-if="isOpenPrediction" ><div style="width: 20vw;">預測</div></md-table-head>
              </md-table-row>
              <md-table-row v-for="(loc, idx) in showResult" :key="loc.id">
                <md-table-cell>
                  <span>{{rerenderRank(idx)}}</span>
                </md-table-cell>
                <md-table-cell><img class="arena-house-img" :src="renderHouseImage(loc)" />{{rerenderHouseName(loc)}}</md-table-cell>
                <md-table-cell v-if="notOpenPrediction">{{loc.score}}</md-table-cell>
                <md-table-cell v-if="notOpenPrediction"><img class="arena-trophy-img" :src="`/static/imgs/trophy/${t.add}.png`" :title="t.name" v-for="t in loc.trophies" :key="t.add" /></md-table-cell>
                <md-table-cell v-if="isOpenPrediction">
                  <button v-if="openPredictionAndCanPredict" class="prediction-btn" @click="onClickPrediction(loc.id)">預測</button>
                  <div v-else-if="isOpenPrediction" class="prediction-results" :class="loc.en">
                    <div class="md-progress-bar"><div class="md-progress-bar-fill" :style="{width: `${loc.supportRate}%`}"></div></div>
                    <i class="suport-rate" :style="{paddingLeft: `${loc.supportRate}%`}">{{loc.supportRate}} %</i>
                  </div>
                </md-table-cell>
              </md-table-row>
            </md-table>
            <md-content>
              <i style="color: #fff;">獎牌最後結算時間:  {{trophyLastDate}}</i>
            </md-content>
          </md-tab>

          <md-tab id="tab-live" md-label="戰場" >
            <LiveBattle v-if="openLive" />
            <ChatBox v-if="openLive"/>
          </md-tab>

        </md-tabs>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { ACT_GET_TROPHY, ACT_WELFARE_CONFIG_SETTING, ACT_SEND_PREDICTION, ACT_GET_PREDICTIONS } from '../store/enum';
import LiveBattle from './panels/LiveBattle';
import ChatBox from './interactive/ChatBox';

export default {
  name: 'Arena',
  components: {
    LiveBattle,
    ChatBox
  },
  data() {
    return {
      openLive: false,
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
    ...mapGetters(['isLoveOpen', 'trophyLastDate', 'isPredictionOpen']),
    showResult() {
      const loc = JSON.parse(JSON.stringify(this.global.houses));
      loc.sort((a,b) => {
        const gap = b.score - a.score;
        const leaderChaGap = b.leader && a.leader ? b.leader.cha - a.leader.cha : 0;
        return gap == 0 ? leaderChaGap : gap;
      });
      loc.map(e => {
        const trophies = this.global.trophy.filter(t => t.ownerHouseId == e.id);
        e.trophies = trophies || [];
        e.supportRate = Math.floor(this.getSupportedByHouseId(e.id));
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
    notOpenPrediction() {
      return !this.isOpenPrediction;
    },
    openPredictionAndCanPredict: {
      get() {
        return (this.noPredicted && (this.global.predictions.findIndex(p => p.userId == this.user.id) < 0)) && this.isPredictionOpen && this.global.trophy.length > 0;
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
      const mapImages = {
        'stark': 'wolf.png',
        'eyrie': 'bird.png',
        'tully': 'fish.png',
        'lannister': 'lion.png',
        'tyrell': 'rose.png',
        'baratheon': 'deer.png',
        'targaryen': 'dragon.png',
        'martell': 'sun.png',
      }
      return `/static/imgs/${mapImages[house.en]}`;
    },
    onTabChanged(tabId) {
      if (tabId == 'tab-live') {
        this.openLive = true;
      } else {
        this.openLive = false;
      }
    },
    onClickPrediction(house) {
      console.log('house: ', house);
      this.openPredictionAndCanPredict = false;
      this.$store.dispatch('wsEmitMessage', {act: ACT_SEND_PREDICTION, payload: {house}});
    },
    getSupportedByHouseId(id) {
      const predictions = this.global.predictions;
      return ((predictions.filter(p => p.houseId == id) || []).length / predictions.length) * 100;
    },
  }
};
</script>