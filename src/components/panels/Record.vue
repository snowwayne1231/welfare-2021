<template>
  <div class="record">
    <div>
      <md-table class="record-table">
        <md-table-row>
          <md-table-head style="width: 50px;">場次</md-table-head>
          <md-table-head>遊戲</md-table-head>
          <!-- <md-table-head>積分</md-table-head> -->
          <md-table-head>詳細</md-table-head>
        </md-table-row>
        <md-table-row v-for="(result) in game.results" :key="result.json.round">
          <md-table-cell>{{result.json.round}}</md-table-cell>
          <md-table-cell>{{result.game}}</md-table-cell>
          <!-- <md-table-cell><button @click="onClcikShowScore(result)">查看</button></md-table-cell> -->
          <md-table-cell><button @click="onClcikShowDialog(result)">打開詳細</button></md-table-cell>
        </md-table-row>
      </md-table>

      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>
          <span>{{dialogTitle}}</span>
          <span class="last-update">最後更新:  {{lastGameUpdatedTime}}</span>
        </md-dialog-title>
        <md-content style="width: 800px; min-height: 360px;" class="md-dialog-content">
          <md-table class="record-table">
            <md-table-row>
              <md-table-head style="width: 120px;">遊戲</md-table-head>
              <md-table-head>影片</md-table-head>
              <md-table-head style="width: 480px;">詳細賽果</md-table-head>
            </md-table-row>
            <md-table-row v-for="(g) in game.list" :key="g.id">
              <md-table-cell>{{g.name}}</md-table-cell>
              <md-table-cell><router-link v-if="g.video" :to="'/gamevideo/'+g.id" target="_blank">連結</router-link></md-table-cell>
              <md-table-cell>
                <div v-if="alreadyShowMatch(g)">
                  <md-table class="record-game-match-table">
                    <md-table-row>
                      <md-table-cell style="40%">暱稱</md-table-cell>
                      <md-table-cell>門檻達成</md-table-cell>
                      <md-table-cell>團體扣分</md-table-cell>
                    </md-table-row>
                    <md-table-row v-for="match in getMatches(g)" :key="match.id" :class="{success: match.success==1}">
                      <md-table-cell><img :src="match.houseImg" style="width: 40px;" />{{match.user.nickname}}</md-table-cell>
                      <md-table-cell>{{match.level}}</md-table-cell>
                      <md-table-cell>{{match.minus}}</md-table-cell>
                    </md-table-row>
                  </md-table>
                </div>
                <button v-else @click="onClcikShowMatch(g)" >展開</button>
              </md-table-cell>
            </md-table-row>
          </md-table>
        </md-content>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import { ACT_GET_GAMES, ACT_GET_GAME_RESULTS, ACT_GET_GAME_MATCHES, ACT_GET_PEOPLE_DATA } from '../../store/enum';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Record',
  data() {
    return {
      showDialog: false,
      dialogTitle: '',
    };
  },
  computed: {
    ...mapState(['global', 'game']),
    expandedMatches() {
      const $this = this;
      const ary = [];
      const levelMap = {
        1: '一般',
        2: '白金 (lv1)',
        3: '鑽石 (lv2)',
        4: '大師 (lv3)'
      }
      let tmp = 0;
      
      $this.game.matches.map(m => {
        const mObj = {...m, user: $this.global.users.find(u => u.id == m.userId) || {}, level: levelMap[m.activity] || '一般'};
        mObj.houseImg = $this.getHouseImgByHouseId(m.houseIdNow);
        if (tmp != m.game) {
          ary.push({gameId: m.game, matches: [mObj]});
          tmp = m.game;
        } else {
          ary[ary.length-1].matches.push(mObj);
        }
      });
      
      ary.map(a => {
        a.matches.sort((a,b) => {
          let gap = b.activity - a.activity;
          return gap == 0 ? b.success - a.success : gap;
        });
      })
      return ary;
    },
    lastGameUpdatedTime() {
      let time = 0;
      this.game.list.map(g => {
        let _date = new Date(g.createdAt);
        let _time = _date.getTime();
        if (_time > time) {
          time = _time;
        }
      });
      return new Date(time);
    },
  },
  mounted() {
    this.$store.dispatch('wsEmitMessage', {act: ACT_GET_GAME_RESULTS});
    if (this.global.users.length == 0) {
      this.$store.dispatch('wsEmitMessage', { act: ACT_GET_PEOPLE_DATA });
    }
    // this.$store.dispatch('wsEmitMessage', {act: ACT_GET_GAMES});
  },
  beforeDestroy() {
    
  },
  methods: {
    alreadyShowMatch(game) {
      if (this.expandedMatches.length > 0) {
        return this.expandedMatches.findIndex(e => e.gameId == game.id) >= 0;
      }
      return false;
    },
    getMatches(game) {
      const matches = this.expandedMatches.find(e => e.gameId == game.id).matches;
      return matches;
    },
    getHouseImgByHouseId(houseId) {
      return (this.global.houses.find(h => h.id == houseId) || {}).img;
    },
    onClcikShowDialog(result) {
      this.showDialog = true;
      this.dialogTitle = result.game;
      if (this.showDialog) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_GET_GAMES, payload: result.json.round});
      }
    },
    onClcikShowMatch(game) {
      this.$store.dispatch('wsEmitMessage', {act: ACT_GET_GAME_MATCHES, payload: game.id});
    },
    onClcikShowScore(game) {
      console.log(game.matchesdata);
    }
  }
};
</script>

<style lang="scss">

</style>