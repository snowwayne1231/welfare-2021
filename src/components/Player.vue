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

        <md-card-media>
          <img :src="`/static/${user.code}.jpg`" />
        </md-card-media>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter player-able-area">
          <div></div>
          <div class="md-layout-item md-size-30">
            <md-table class="table-transparent able-block">
              <md-table-row>
                <md-table-head>MVP</md-table-head>
                <md-table-cell
                  >
                  <md-icon v-for="i in user.mvp" :key="i">health_and_safety</md-icon>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>RV</md-table-head>
                <md-table-cell>
                  <!-- <md-icon v-for="i in user.rv/10">star</md-icon> -->
                  <md-icon>star</md-icon>
                  <md-icon>star_border</md-icon>
                  <md-icon>star_border</md-icon>
                  <md-icon>star_border</md-icon>
                  <md-icon>star_border</md-icon>
                  <md-icon>star_border</md-icon>
                  <md-icon>star_border</md-icon>
                  <md-icon>star_border</md-icon>
                  <md-icon>star_border</md-icon>
                  <md-icon>star_border</md-icon>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>STR 力量</md-table-head>
                <md-table-cell>{{ user.strLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>DEX 敏捷</md-table-head>
                <md-table-cell>{{ user.dexLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>CON 體力</md-table-head>
                <md-table-cell>{{ user.conLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>INT 智慧</md-table-head>
                <md-table-cell>{{ user.intLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>CHA 魅力</md-table-head>
                <md-table-cell>{{ user.chaLv }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          <div class="md-layout-item">
            <div class="card-ability-chat">
              <RadarChart
                :chart-data="dataRadar"
                :options="optionRadar"
                :width="520"
                :height="520"
              ></RadarChart>
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
  components: {
    RadarChart
  },
  data() {
    return {
      optionRadar: {
        legend: {
          labels: {
            fontSize: 16
          }
        },
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
            backgroundColor: 'rgba(177, 143, 91, 0.6)',
            borderColor: 'rgba(177, 143, 91, 0.8)',
            data: [
              this.user.strLv,
              this.user.dexLv,
              this.user.conLv,
              this.user.intLv,
              this.user.chaLv
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
  .personal-card {
    display: inline-block;
    position: fixed;
    left: 400px;
    top: 0;
    width: 70vw;
    min-width: 360px;
    background-color: #1c0f008f;
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
    .player-able-area {
      margin: 10px 30px;
      .able-block {
        .md-table-head {
          font-size: 18px !important;
          color: #b18f5b !important;
        }
        .md-table-cell {
          font-size: 18px !important;
          color: #ac9d83 !important;
          .md-icon {
            color: #ac9d83 !important;
          }
        }
      }
      .card-ability-chat {
        width: 520px;
        margin: 0px auto;
        background-color: #ffffff8f;
      }
    }
  }
}
</style>