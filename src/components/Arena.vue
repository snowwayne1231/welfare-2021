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
            <md-table-cell></md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ACT_GET_TROPHY } from '../store/enum';

export default {
  name: 'Arena',
  data() {
    return {
      
    };
  },
  mounted() {
    // console.log(this);
    this.$store.dispatch('wsEmitMessage', {act: ACT_GET_TROPHY});
  },
  computed: {
    ...mapState(['user', 'global']),
    showResult() {
      const loc = this.global.houses.slice();
      loc.sort((a,b) => {return b.score - a.score});
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
  }
};
</script>