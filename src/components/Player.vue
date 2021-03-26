<template>
  <div class="player bg-img" :class="{ 'vagrant': user.houseId == 0 }">
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
        <div class="md-layout md-gutter player-able-area" :class="{'p-eq-0': user.skillPointJson.now <= 0, 'p-gap': (user.skillPointJson.origin - user.skillPointJson.now) > 0}">
          <!-- <div></div> -->
          <div class="md-layout-item info-table">
            <md-table class="table-transparent able-block">
              <md-table-row v-if="user.mvp >= 0">
                <md-table-head><Helper title="被投票票選為最有價值玩家的次數" />MVP</md-table-head>
                <md-table-cell>
                  <md-icon v-for="i in user.mvp" :key="i" class="mvp-star"
                    >star</md-icon
                  >
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head><Helper title="睿訊值：代表在一年的活動中的活躍程度，也會影響族長招募家族成員時所消耗的積分" />RV</md-table-head>
                <md-table-cell>
                  <!-- <md-icon v-for="i in user.rv/10">star</md-icon> -->
                  <md-icon v-for="i in userRV[0]" :key="'f' + i" class="bigger-favorite">favorite</md-icon>
                  <md-icon v-for="i in userRV[1]" :key="'h' + i"
                    >favorite_border</md-icon
                  >
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head><Helper title="在活動中有機會取得增加單項能力的點數" />POINT 點數</md-table-head>
                <md-table-cell>
                  <span class="point">{{ user.skillPointJson.now }}</span>
                  <button class="btn" @click="onClickSubmit">確定</button>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head><Helper title="影響地圖板塊玩法的攻擊力" />STR 力量</md-table-head>
                <md-table-cell class="border-wraped">
                  <i class="circle minus" v-if="checkMinusShow(0)" @click="onClickMinus('str')"><md-icon>remove_circle</md-icon></i>
                  <i class="circle add" v-if="displayLvNums.str < 5" @click="onClickAdd('str')"><md-icon>add_circle</md-icon></i>
                  {{ displayLv.str }}
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head><Helper title="影響地圖板塊玩法的移動能力" />DEX 敏捷</md-table-head>
                <md-table-cell class="border-wraped">
                  <i class="circle minus" v-if="checkMinusShow(1)" @click="onClickMinus('dex')"><md-icon>remove_circle</md-icon></i>
                  <i class="circle add" v-if="displayLvNums.dex < 5" @click="onClickAdd('dex')"><md-icon>add_circle</md-icon></i>
                  {{ displayLv.dex }}
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head><Helper title="影響地圖板塊玩法與獎牌條件" />CON 體力</md-table-head>
                <md-table-cell class="border-wraped">
                  <i class="circle minus" v-if="checkMinusShow(2)" @click="onClickMinus('con')"><md-icon>remove_circle</md-icon></i>
                  <i class="circle add" v-if="displayLvNums.con < 5" @click="onClickAdd('con')"><md-icon>add_circle</md-icon></i>
                  {{ displayLv.con }}
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head><Helper title="影響地圖板塊玩法與獎牌的條件" />WIS 精神</md-table-head>
                <md-table-cell class="border-wraped">
                  <i class="circle minus" v-if="checkMinusShow(3)" @click="onClickMinus('wis')"><md-icon>remove_circle</md-icon></i>
                  <i class="circle add" v-if="displayLvNums.wis < 5" @click="onClickAdd('wis')"><md-icon>add_circle</md-icon></i>
                  {{ displayLv.wis }}
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head><Helper title="影響遊戲中的某種條件" />CHA 魅力</md-table-head>
                <md-table-cell class="border-wraped">
                  <i class="circle minus" v-if="checkMinusShow(4)" @click="onClickMinus('cha')"><md-icon>remove_circle</md-icon></i>
                  <i class="circle add" v-if="displayLvNums.cha < 5" @click="onClickAdd('cha')"><md-icon>add_circle</md-icon></i>
                  {{ displayLv.cha }}
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head><Helper title="查詢經歷過的戰役" />戰績</md-table-head>
                <md-table-cell>
                  <button class="btn" @click="onClcikShowDialog">查詢</button>
                </md-table-cell>
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

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>
        <span>個人戰績</span>
      </md-dialog-title>
      <md-content style="width: 800px; min-height: 360px;" class="md-dialog-content">
        <md-table class="record-table player-record-table">
          <md-table-row>
            <md-table-head style="width: 220px;">遊戲</md-table-head>
            <md-table-head>勝利分</md-table-head>
            <md-table-head>MVP</md-table-head>
            <md-table-head>值班</md-table-head>
            <md-table-head>扣分</md-table-head>
          </md-table-row>
          <md-table-row v-for="(matches, idx) in roundMatches" :key="idx">
            <md-table-cell class="first-cell"><p v-for="match in matches" :key="match.id">{{match.name}}</p></md-table-cell>
            <md-table-cell><p v-for="match in matches" :key="match.id">{{match.success}}</p></md-table-cell>
            <md-table-cell><md-icon v-if="matches[0].mvp > 0">star</md-icon></md-table-cell>
            <md-table-cell>{{matches[0].shift}}</md-table-cell>
            <md-table-cell>{{matches[0].minus}}</md-table-cell>
          </md-table-row>
        </md-table>
      </md-content>
    </md-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import RadarChart from './chart/radar'
import { ACT_UPDATE_SKILL, ACT_GET_USER_MATCHES } from '../store/enum';
import Helper from './panels/Helper';

export default {
  name: 'Player',
  components: { RadarChart, Helper },
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
      },
      showDialog: false,
    }
  },
  mounted() {
    // console.log(this);
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['displayLv', 'lvNums', 'displayLvNums']),
    userRV() {
      const vm = this
      const arr = []
      arr[0] = Math.min(Math.floor(vm.user.rv / 10), 9);
      arr[1] = vm.user.rv % 10
      arr[2] = vm.user.rv
      return arr
    },
    dataRadar() {
      console.log('updated dataRadar');
      return {
        labels: ['力', '敏', '體', '精', '魅'],
        datasets: [
          {
            label: 'origin',
            backgroundColor: 'rgba(177, 143, 91, 0.6)',
            borderColor: 'rgba(177, 143, 91, 0.8)',
            data: [
              this.lvNums.str,
              this.lvNums.dex,
              this.lvNums.con,
              this.lvNums.wis,
              this.lvNums.cha,
            ],
            spanGaps: true,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
          },
          {
            label: 'improve',
            backgroundColor: 'rgba(48, 223, 208, 0.3)',
            borderColor: 'rgba(48, 223, 208, 0.3)',
            data: [
              this.displayLvNums.str,
              this.displayLvNums.dex,
              this.displayLvNums.con,
              this.displayLvNums.wis,
              this.displayLvNums.cha,
            ],
            spanGaps: true,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
          }
        ]
      }
    },
    roundMatches() {
      const matches = this.user.matches;
      const map = {};
      matches.map(match => {
        let round = match.round;
        if (map[round]) {
          map[round].push(match);
          if (match.success > 0) {
            map[round][0].success = match.success;
          }
          if (match.mvp > 0) {
            map[round][0].mvp = match.mvp;
          }
          if (match.shift > 0) {
            map[round][0].shift = match.shift;
          }
          if (match.minus > 0) {
            map[round][0].minus += match.minus;
          }
        } else {
          map[round] = [match];
        }
      });
      const result = Object.values(map);
      result.sort((a,b) => a.round - b.round);
      return result;
    }
  },
  methods: {
    checkMinusShow(idx) {
      return this.user.skillPointJson.sdcwc[idx] > this.user.skillSDCWC[idx];
    },
    onClickAdd(key) {
      this.$store.dispatch('updateSkillPoint', {key, point: 1});
    },
    onClickMinus(key) {
      this.$store.dispatch('updateSkillPoint', {key, point: -1});
    },
    onClickSubmit() {
      const json = this.user.skillPointJson;
      if (json.sdcwc.join('') != this.user.skillSDCWC.join('')) {
        let sum = json.sdcwc.reduce((a,b) => a+b, 0);
        if (sum > json.origin) {
          return window.alert('Something Wrong.');
        }
        this.$store.dispatch('wsEmitMessage', {act: ACT_UPDATE_SKILL, payload: {id: this.user.id, json: this.user.skillPointJson}});
        
      }
    },
    onClcikShowDialog() {
      this.$store.dispatch('wsEmitMessage', {act: ACT_GET_USER_MATCHES, payload: {id: this.user.id}});
      this.showDialog = true;
    },
  }
}
</script>