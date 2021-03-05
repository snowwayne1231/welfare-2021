<template>
  <div class="bg-img" id="rv-admin">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <table class="md-subhead">
            <tr>
              <th>Model</th>
              <td><input type="text" v-model="modelInput" style="width: 100%;" /></td>
            </tr>
            <tr>
              <th>Where</th>
              <td><textarea v-model="whereInput" placeholder="key = value"> </textarea><button @click="onClickBtn">Submit</button></td>
            </tr>
            <tr>
              <th>Attr</th>
              <td>Length: {{global.dataset.length}}</td>
            </tr>
          </table>
          <table class="md-subhead">
            <tr>
              <th></th>
              <th v-for="house in showHouseAbility" :key="house.id">{{house.name}}</th>
            </tr>
            <tr>
              <td>ATK</td>
              <td v-for="house in showHouseAbility" :key="house.id">{{house.ability.atk}} / {{house.ability.vassal}}</td>
            </tr>
            <tr>
              <td>MOVE</td>
              <td v-for="house in showHouseAbility" :key="house.id">{{house.ability.move}}</td>
            </tr>
            <tr>
              <td>AGAIN</td>
              <td v-for="house in showHouseAbility" :key="house.id">{{house.ability.moveAgain}}</td>
            </tr>
          </table>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <md-table v-model="global.dataset" md-sort="id" md-sort-order="asc" class="admin-table" md-fixed-header>
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell v-for="k in datasetKeys" :key="k" :md-label="k" :md-sort-by="k">{{ item[k] }}</md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { ACT_GET_ADMIN_DATASET, ACT_GET_PEOPLE_DATA, ACT_ADMIN_REFRESH_CONFIG } from '../store/enum';

export default {
  name: 'AdminFront',
  data() {
    return {
      whereInput: '',
      modelInput: 'User',
    };
  },
  mounted() {
    if (this.user.rv > 0 && this.user.rv < 90) {
      window.location.href = '/logout';
    }
    this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PEOPLE_DATA, payload: {more: true}});
    this.$store.dispatch('wsEmitMessage', {act: ACT_ADMIN_REFRESH_CONFIG});
  },
  computed: {
    ...mapState(['global', 'user']),
    ...mapGetters(['mapHouseAbility']),
    datasetKeys() {
      if (this.global.dataset.length > 0) {
        return Object.keys(this.global.dataset[0]);
      } else {
        return [];
      }
    },
    showHouseAbility() {
      return this.global.houses.map(house => { return {...house, ability: this.mapHouseAbility[house.en]}});
    }
  },
  methods: {
    onClickBtn(evt) {
      let whereObj = {};
      try {
        let ary = this.whereInput.split(/[\r\n]/g);
        ary.map(a => {
          let loc = a.split(/[\:\=\s]+/g);
          if (loc[0]) {
            whereObj[loc[0].trim()] = isNaN(loc[1]) ? loc[1].trim() : parseInt(loc[1]);
          }
        });
        console.log(whereObj);
        this.$store.dispatch('wsEmitMessage', {act: ACT_GET_ADMIN_DATASET, payload: {where: whereObj, model: this.modelInput.trim()}});
      } catch(err) {
        console.log(err);
      }
    },
  }
}
</script>


<style>
#rv-admin .md-subhead{
  font-size: 16px;
  float: left;
  width: 50%;
}
#rv-admin .md-subhead td{
  border: 1px solid #9c826b;
}
</style>