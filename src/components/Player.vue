<template>
  <div class="player">
    <md-card class="personal-card" v-if="user.id > 0">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ user.nickname }}</div>
          <div class="md-subhead">{{ user.firstName }} {{ user.lastName }}</div>
          <div class="note">{{ user.code }} {{ user.departmentName }}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="`/static/${user.code}.jpg`" />
        </md-card-media>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter level">
          <div class="md-layout-item">
            <div>MVP</div>
            <div>{{ user.mvp }}</div>
          </div>
          <div class="md-layout-item">
            <div>RV</div>
            <div>{{ user.rv }}</div>
          </div>
        </div>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-15">
            <md-table>
              <md-table-row>
                <md-table-head>力量</md-table-head>
                <md-table-cell>{{ user.strLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>敏捷</md-table-head>
                <md-table-cell>{{ user.dexLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>體力</md-table-head>
                <md-table-cell>{{ user.conLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>智慧</md-table-head>
                <md-table-cell>{{ user.intLv }}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>魅力</md-table-head>
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
    height: 100vh;

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
          color:#987153;
        }
      }

      .md-card-media {
        height: 100%;
      }
    }

    .md-card-content {
      padding-top: 20px;
      line-height: normal !important;
      height: calc(100vh - 175px);
      overflow-y: auto;
      .level {
        height: 500px;
        font-family: 'Game of Thrones', sans-serif;
        div {
          color: #b18f5b;
          font-size: 24px;
        }
      }
    }

    .card-ability-chat {
      width: 520px;
      margin: 0px auto;
    }
  }
}
</style>