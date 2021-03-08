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
      </md-card-header>
      <md-card-content>
        <md-tabs @md-changed="onTabChanged">

          <md-tab id="tab-ranking" md-label="排名" exact>
            <md-table class="arena-table">
              <md-table-row>
                <md-table-head>名次</md-table-head>
                <md-table-head>家族</md-table-head>
                <md-table-head>家族積分</md-table-head>
                <md-table-head>獎牌</md-table-head>
              </md-table-row>
              <md-table-row v-for="(loc, idx) in showResult" :key="loc.id">
                <md-table-cell>{{rerenderRank(idx)}}</md-table-cell>
                <md-table-cell><img class="arena-house-img" :src="renderHouseImage(loc)" />{{rerenderHouseName(loc)}}</md-table-cell>
                <md-table-cell>{{loc.score}}</md-table-cell>
                <md-table-cell><img class="arena-trophy-img" :src="`/static/imgs/trophy/${t.add}.png`" :title="t.name" v-for="t in loc.trophies" :key="t.add" /></md-table-cell>
              </md-table-row>
            </md-table>
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
import { ACT_GET_TROPHY, ACT_GET_PEOPLE_DATA } from '../store/enum';
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
    };
  },
  mounted() {
    // console.log(this);
    if (this.global.trophy.length == 0) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_GET_TROPHY});
    }
  },
  computed: {
    ...mapState(['user', 'global']),
    // ...mapGetters(['mapHouseAbility']),
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
      });
      return loc;
    },
  },
  methods: {
    sendMessage(evt) {
      // this.$store.dispatch('wsEmitAuthorize', this.$cookies.get('logintimestamp'));
    },
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
    }
  }
};
</script>