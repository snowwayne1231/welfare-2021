<template>
  <div class="player bg-img">
    <md-card class="personal-card" v-if="user.id > 0">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span v-if="!user.nickname"
              >{{ user.firstName }} {{ user.lastName }}</span
            >
            <span v-else>{{ user.nickname }}</span>
          </div>
          <div class="md-subhead">
            <span v-if="!user.nickname">people of the kingdom</span>
            <span v-else>{{ user.firstName }} {{ user.lastName }}</span>
          </div>
          <div class="note">{{ user.code }} {{ user.departmentName }}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter player-able-area">
          <div></div>
          <div class="md-layout-item">
            <md-table class="table-transparent able-block">
              <md-table-row>
                <md-table-head>MVP</md-table-head>
                <md-table-cell>
                  <md-icon v-for="i in user.mvp" :key="i" class="mvp-star"
                    >star</md-icon
                  >
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>RV</md-table-head>
                <md-table-cell>
                  <!-- <md-icon v-for="i in user.rv/10">star</md-icon> -->
                  <md-icon v-for="i in userRV[0]" :key="'f' + i" class="bigger-favorite">favorite</md-icon>
                  <md-icon v-for="i in userRV[1]" :key="'h' + i"
                    >favorite_border</md-icon
                  >
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>STR 力量</md-table-head>
                <md-table-cell class="border-wraped">{{ user.strLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>DEX 敏捷</md-table-head>
                <md-table-cell class="border-wraped">{{ user.dexLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>CON 體力</md-table-head>
                <md-table-cell class="border-wraped">{{ user.conLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>WIS 精神</md-table-head>
                <md-table-cell class="border-wraped">{{ user.wisLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>CHA 魅力</md-table-head>
                <md-table-cell class="border-wraped">{{ user.chaLv }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          <div class="md-layout-item">
            <div class="card-ability-chat">
              <RadarChart
                :chart-data="dataRadar"
                :options="optionRadar"
                :width="460"
                :height="460"
              ></RadarChart>
              <div class="notouch"></div>
            </div>
          </div>
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
  components: { RadarChart },
  data() {
    return {
      userPowerForm: [ 'strLv', 'dexLv', 'conLv', 'wisLv', 'chaLv' ],
      optionRadar: {
        legend: {
          display: false,
          labels: {
            fontSize: 20
          }
        },
        scale: {
          ticks: {
            display: false,
            // maxTicksLimit: 10,
            suggestedMin: 0,
            suggestedMax: 5,
            stepSize: 1,
            // showLabelBackdrop: true,
          },
          pointLabels: {
            fontSize: 24,
            fontColor: '#ac9d83',
          },
          angleLines: {
            display: true,
            color: '#863821',
            lineWidth: 2,
          },
          gridLines: {
            dispaly: true,
            color: '#75321e',
            lineWidth: 1,
          },
        },
      }
    }
  },
  mounted() {
    // console.log(this);
  },
  computed: {
    ...mapState(['user']),
    userRV() {
      const vm = this
      const arr = []
      arr[0] = Math.floor(vm.user.rv / 10)
      arr[1] = vm.user.rv % 10
      arr[2] = vm.user.rv
      return arr
    },
    dataRadar() {
      const lvMap = {'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1, '-': 0};
      return {
        labels: ['力', '敏', '體', '精', '魅'],
        datasets: [
          {
            label: '',
            backgroundColor: 'rgba(177, 143, 91, 0.6)',
            borderColor: 'rgba(177, 143, 91, 0.8)',
            data: [
              lvMap[this.user.strLv] || 0,
              lvMap[this.user.dexLv] || 0,
              lvMap[this.user.conLv] || 0,
              lvMap[this.user.wisLv] || 0,
              lvMap[this.user.chaLv] || 0
            ],
            spanGaps: true,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            
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