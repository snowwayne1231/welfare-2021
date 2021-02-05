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
              <span class="md-list-item-text"
                >2021 Game of REVOVISION 年度賽程資訊</span
              >

              <md-list slot="md-expand">
                <div>
                  <md-table class="">
                    <md-table-row>
                      <md-table-head style="width: 25%;">Season 1 . 第一季</md-table-head>
                      <md-table-head></md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>02月 (26日 週五)</md-table-cell>
                      <md-table-cell>元宵賞燈選人才</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>03月 </md-table-cell>
                      <md-table-cell>睿訊之國的闖關者</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>04月 (週六)</md-table-cell>
                      <md-table-cell>城市尋寶</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-head>Season 2 . 第二季</md-table-head>
                      <md-table-head></md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>05月 (07日 週五)</md-table-cell>
                      <md-table-cell>讓媽媽看見你</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>05月</md-table-cell>
                      <md-table-cell>綜合運動競賽月</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>06月 (11日 週五)</md-table-cell>
                      <md-table-cell>舌尖上的屈原</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>07月 (週六)</md-table-cell>
                      <md-table-cell>溯溪 & 遊樂園</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-head>Season 3 . 第三季</md-table-head>
                      <md-table-head></md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>08月 (06日 週五)</md-table-cell>
                      <md-table-cell>爸爸在找你</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>09月</md-table-cell>
                      <md-table-cell>綜合桌球月賽</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>10月 (1日 週五)</md-table-cell>
                      <md-table-cell>運動會</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>11月</md-table-cell>
                      <md-table-cell>綜合電玩月賽</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>12月 (8日 週六)</md-table-cell>
                      <md-table-cell>泡溫泉</md-table-cell>
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
.home {
  background-image: url('/static/imgs/bg_black_lobby.jpg');
}
.home-card {
  display: inline-block;
  position: fixed;
  left: 400px;
  top: 0;
  width: 70vw;
  min-width: 360px;
  background-color: #1c0f008f !important;
  border: 1px solid #805b00;
  border-radius: 10px;
  margin-top: 40px;
  height: calc(100vh - 55px);

  .md-card-header {
    border-bottom: 1px solid#805b00;
    margin: 0 20px;
    .md-card-header-text {
      height: 120px;
      position: relative;
      .md-title {
        color: #fff;
        font-size: 58px;
        line-height: 64px;
      }
      .md-subhead {
        color: #eed8b2;
        font-family: 'Philosopher', sans-serif;
        text-transform: uppercase;
        font-size: 26px;
        margin-top: 3px;
      }
      .note {
        position: absolute;
        left: 0;
        bottom: 5px;
        font-size: 15px;
        color: #987153;
      }
    }

    .md-card-media {
      height: 100%;
    }
  }

  .md-card-content {
    padding-top: 20px;
    line-height: normal !important;
    height: calc(100vh - 220px);
    overflow-y: auto;
  }
  .table-transparent {
    background-color: transparent;
    .md-theme-default {
      background-color: transparent;
    }
  }
  .list {
    .md-list {
      // background: transparent !important;
      .md-list-item-container {
        font-size: 18px !important;
        color: #b18f5b !important;
        display: block !important;
        // :hover {
        //   color: #b18f5b !important;
        // }
      }
      .md-list-expand {
        padding: 0 30px;
        .md-list {
          font-size: 16px !important;
          color: #ac9d83 !important;
          // :hover {
          //   color: #ac9d83 !important;
          // }
        }

        .md-table {
          width: 100%;
        }
        .md-table-head {
          font-size: 18px !important;
          color: #b18f5b !important;
          border: 1px solid #ac9d83;
        }
        .md-table-cell {
          font-size: 18px !important;
          color: #6a5a3c  !important;
          border: 1px solid #ac9d83;
        }
      }
    }
  }
}
</style>