<template>
  <div class="bg-img" id="rv-game-editor">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <div>
          <input type="text" v-model="name" id="game-name-input" />
        </div>
        <md-table v-model="global.users" md-sort="houseId" md-sort-order="asc" md-fixed-header class="game-table" @md-selected="onSelect">
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
            <md-table-cell md-label="Nickname" md-sort-by="nickname">{{ item.nickname }}</md-table-cell>
          </md-table-row>
        </md-table>
        <md-table v-model="global.users" md-sort="houseId" md-sort-order="asc" md-fixed-header class="game-table" @md-selected="onSelect">
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
            <md-table-cell md-label="Nickname" md-sort-by="nickname">{{ item.nickname }}</md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ACT_GET_PEOPLE_DATA } from '../store/enum';

export default {
  name: 'GameEditor',
  data() {
    return {
      name: '',
      table_1_data: [],
      table_2_data: [],
    };
  },
  mounted() {
    if (this.user.rv > 0 && this.user.rv < 99) {
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
      
    },
    onSelect(selectedArray) {
      this.selectedArray = selectedArray;
      // console.log(selectedArray);
    },
    onClickSend(evt) {
      console.log(evt);
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