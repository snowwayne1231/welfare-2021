<template>
  <div class="home bg-img">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>王國公告</span>
          </div>
          <div class="md-subhead">
            <span>bulletin of the kingdom</span>
          </div>
          <div class="note"></div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <div class="list">
          <md-list :md-expand-single="expandSingle">
            <md-list-item md-expand>
              <span class="material-icons mr-6-px"> local_fire_department </span
              ><span class="md-list-item-text"
                >2021 Game of REVOVISION 年度賽程資訊</span
              >

              <md-list slot="md-expand">
                <div>
                  <md-table class="news-table">
                    <md-table-row>
                      <md-table-head style="width: 25%"
                        >Season 1</md-table-head
                      >
                      <md-table-head>S1 Events</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>02月 (26日 週五)</md-table-cell>
                      <md-table-cell>元宵賞燈選人才</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>03月 (整月)</md-table-cell>
                      <md-table-cell>睿訊之國的闖關者</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>04月 (週六)</md-table-cell>
                      <md-table-cell>城市尋寶</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-head>Season 2</md-table-head>
                      <md-table-head>S2 Events</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>05月 (07日 週五)</md-table-cell>
                      <md-table-cell>讓媽媽看見你</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>05月 (整月)</md-table-cell>
                      <md-table-cell>趣味運動月</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>06月 (11日 週五)</md-table-cell>
                      <md-table-cell>舌尖上的屈原</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>07月 (週六)</md-table-cell>
                      <md-table-cell>逆流而上 向陽而生 </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-head>Season 3</md-table-head>
                      <md-table-head>S3 Events</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>08月 (06日 週五)</md-table-cell>
                      <md-table-cell>爸爸在找你</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>09月 (整月)</md-table-cell>
                      <md-table-cell>至尊桌遊月</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>10月 (1日 週五)</md-table-cell>
                      <md-table-cell>全明星運動會</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>11月 (整月)</md-table-cell>
                      <md-table-cell>統神電競月</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>12月 (8日 週六)</md-table-cell>
                      <md-table-cell>溫泉之旅</md-table-cell>
                    </md-table-row>
                  </md-table>
                </div>
              </md-list>
            </md-list-item>
          </md-list>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RadarChart from './chart/radar'

export default {
  name: 'Home',
  components: {
    RadarChart
  },
  data() {
    return {
      expandSingle: true,
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
    // this.sendMessage();
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    sendMessage(evt) {
      console.log('sendMessage')
      // this.$store.dispatch('wsEmitMessage', {act: 123, payload: {}});
    }
  }
}
</script>