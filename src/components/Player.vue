<template>
  <div class="player">
    <md-card class="personal-card" v-if="user.id > 0">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ user.nickname }}</div>
          <div class="md-subhead">{{ user.firstName }}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="`/static/${user.code}.jpg`" />
        </md-card-media>
      </md-card-header>

      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-cell>工號:</md-table-cell>
            <md-table-cell>{{ user.code }}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>單位:</md-table-cell>
            <md-table-cell>{{ user.departmentName }}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>MVP:</md-table-cell>
            <md-table-cell>{{ user.mvp }}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>RV值:</md-table-cell>
            <md-table-cell>{{ user.rv }}</md-table-cell>
          </md-table-row>
        </md-table>
        <md-table>
          <md-table-row>
            <md-table-head>力量</md-table-head>
            <md-table-head>敏捷</md-table-head>
            <md-table-head>體力</md-table-head>
            <md-table-head>智慧</md-table-head>
            <md-table-head>魅力</md-table-head>
          </md-table-row>
          <md-table-row>
            <md-table-cell>{{ user.strLv }}</md-table-cell>
            <md-table-cell>{{ user.dexLv }}</md-table-cell>
            <md-table-cell>{{ user.conLv }}</md-table-cell>
            <md-table-cell>{{ user.intLv }}</md-table-cell>
            <md-table-cell>{{ user.chaLv }}</md-table-cell>
          </md-table-row>
        </md-table>
        <div class="card-ability-chat">
          <RadarChart
            :chart-data="dataRadar"
            :options="optionRadar"
            :width="520"
            :height="520"
          ></RadarChart>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RadarChart from './chart/radar'

export default {
  name: 'Player',
  components: {
    RadarChart
  },
  data() {
    return {
      optionRadar: {
        scale: {
          ticks: {
            suggestedMin: 0
          }
        }
      }
    }
  },
  mounted() {
    // console.log(this);
  },
  computed: {
    ...mapState(['user']),
    dataRadar() {
      console.log('dataRadar: ', this)
      return {
        labels: ['力', '敏', '體', '智', '魅'],
        datasets: [
          {
            label: '數值',
            backgroundColor: 'rgba(0, 254, 185, 0.5)',
            data: [
              this.user.str,
              this.user.dex,
              this.user.con,
              this.user.int,
              this.user.cha
            ],
            spanGaps: true
          }
        ]
      }
    }
  },
  methods: {
    sendMessage(evt) {
      console.log('sendMessage')
      // this.$store.dispatch('wsEmitAuthorize', this.$cookies.get('logintimestamp'));
    }
  }
}
</script>

<style lang="scss">
.player {
  background-image: url('/static/imgs/bg_room.png');
  height: 100vh;
  .personal-card {
    background-color: #111;
  }
}
</style>