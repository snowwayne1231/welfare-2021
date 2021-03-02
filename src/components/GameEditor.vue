<template>
  <div class="bg-img" id="rv-game-editor">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <table class='md-title'>
            <tbody>
              <tr>
                <td><label>Name:</label></td>
                <td><input type="text" v-model="name" id="game-name-input" /></td>
              </tr>
              <tr>
                <td><label>Round:</label></td>
                <td><input type="number" v-model="round" id="game-round-input" /></td>
              </tr>
              <tr>
                <td><label>Num:</label></td>
                <td><input type="number" v-model="num" id="game-num-input" /></td>
              </tr>
              <tr>
                <td>(個人) MVP+3, 門檻 +2/3/4, 無+1 |</td>
                <td>| (團體) 參加+3 (第一次再+2), 名次[30/24/18/12/6],  值班+5</td>
              </tr>
            </tbody>
          </table>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <md-table v-model="table_1_data" md-sort="houseId" md-sort-order="asc" class="game-table" @md-selected="onSelect">
          <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
            <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>
            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button" @click="onClickSend">
                <md-icon>send</md-icon>
              </md-button>
            </div>
          </md-table-toolbar>
          <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
            <md-table-cell md-label="House" md-sort-by="houseIdNow" md-numeric>{{ item.houseIdNow }}</md-table-cell>
            <md-table-cell md-label="Tmp" md-sort-by="houseIdTmp" md-numeric>{{ item.houseIdTmp }}</md-table-cell>
            <md-table-cell md-label="暱稱" md-sort-by="nickname">{{ item.nickname }}</md-table-cell>
            <md-table-cell md-label="團體積分增加" md-sort-by="add"><input type="number" v-model="item.add" @click.stop @click="item.add = item.add == 3 ? 5 : (item.add == 5 ? 0 : 3)" readonly style="width: 52px;" :class="{good: item.add==5, normal: item.add==3}" /></md-table-cell>
            <md-table-cell md-label="門檻" md-sort-by="activity"><input type="number" v-model="item.activity" @click.stop @click="item.activity = item.activity >= 4 ? 0 : item.activity+1" readonly :class="{excellent: item.activity==4, good: item.activity==3, normal: item.activity==2}" /></md-table-cell>
            <md-table-cell md-label="Success"><input type="checkbox" v-model="item.success" @click.stop /></md-table-cell>
          </md-table-row>
        </md-table>
        
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ACT_GET_PEOPLE_DATA, ACT_ADMIN_CREATE_GAME } from '../store/enum';

export default {
  name: 'GameEditor',
  data() {
    return {
      name: '',
      round: 1,
      num: 1,
      table_1_data: [],
    };
  },
  mounted() {
    if (this.user.rv > 0 && this.user.rv < 90) {
      window.location.href = '/logout';
    }
    this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PEOPLE_DATA});
    this.timeHandler();
  },
  computed: {
    ...mapState(['global', 'user']),
    
  },
  methods: {
    timeHandler() {
      if (this.global.users.length == 0) {
        this.timer = window.setTimeout(this.timeHandler, 500);
        return;
      }
      window.clearTimeout(this.timer); this.timer = 0;
      this.table_1_data = JSON.parse(JSON.stringify(this.global.users)).map(u => {
        u.add = 3;
        u.activity = 1;
        u.success = false;
        return u;
      });
    },
    onSelect(selectedArray) {
      this.selectedArray = selectedArray;
      // console.log(selectedArray);
    },
    onClickSend(evt) {
      this.$store.dispatch('wsEmitMessage', {act: ACT_ADMIN_CREATE_GAME, payload: {
        name: this.name,
        round: this.round,
        num: this.num,
        users: this.selectedArray.map(e => {
          const user = {
            id: e.id,
            add: e.add,
            activity: e.activity,
            success: e.success,
          };
          return user;
        }),
      }});
      const selectedIds = this.selectedArray.map(e => e.id);
      this.table_1_data = this.table_1_data.filter(e => selectedIds.findIndex(id => id==e.id) < 0);
      this.selectedArray = [];
      this.num = parseInt(this.num) + 1;
    },
    getAlternateLabel (count) {
      let plural = ''
      if (count > 1) {
        plural = 's'
      }
      return `${count} user${plural} selected`
    },
  }
}
</script>