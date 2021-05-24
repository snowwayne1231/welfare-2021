<template>
  <div class="bg-img" id="rv-admin">
    <md-card class="home-card">
      <md-card-header style="padding: 0px;">
        <md-card-header-text style="height: auto;">
          <table class="md-subhead">
            <tr>
              <th>Model</th>
              <td>
                <md-autocomplete v-model="modelInput" :md-options="models">
                  <label></label>
                </md-autocomplete>
              </td>
            </tr>
            <tr>
              <th>Where</th>
              <td><textarea v-model="whereInput" placeholder="key = value"> </textarea><button @click="onClickBtn">Submit</button><input v-model="checkEdit" type="checkbox" /></td>
            </tr>
            <tr>
              <th>Attr</th>
              <td>Length: {{global.dataset.length}}</td>
            </tr>
          </table>
          <table class="md-subhead">
            <tr>
              <th><button @click="onClickRefresh"><md-icon>refresh</md-icon></button></th>
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
            <tr>
              <td>LAND</td>
              <td v-for="house in showHouseAbility" :key="house.id">{{house.land}} / {{Math.floor((house.ability.totalRV || 0) / 10)}}</td>
            </tr>
          </table>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <md-table v-model="global.dataset" md-sort="id" md-sort-order="desc" class="admin-table">
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell v-for="k in datasetKeys" :key="k" :md-label="k" :md-sort-by="k">
              <span v-if="isSpan(item[k])">{{ item[k] }}</span>
              <input v-else type="text" :value="item[k]" @change="onChangeNumber(k, item, $event)"/>
            </md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { ACT_GET_ADMIN_DATASET, ACT_GET_PEOPLE_DATA, ACT_ADMIN_REFRESH_CONFIG, ACT_ADMIN_UPDATE } from '../store/enum';

export default {
  name: 'AdminFront',
  data() {
    return {
      whereInput: '',
      modelInput: 'User',
      models: [
        'User',
        'House',
        'Game',
        'Config',
        'Match',
        'Trophy',
        'Countryside',
        'Order',
        'Voter',
        'Prediction',
      ],
      checkEdit: false,
    };
  },
  mounted() {
    if (this.user.intLv != 'W') {
      window.location.href = '/logout';
    }
    this.$store.dispatch('wsEmitMessage', {act: ACT_GET_PEOPLE_DATA, payload: {more: true}});
  },
  computed: {
    ...mapState(['global', 'user']),
    ...mapGetters(['mapHouseAbility']),
    datasetKeys() {
      if (this.global.dataset.length > 0) {
        return Object.keys(this.global.dataset[0]).filter(e => e != 'id');
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
    onClickRefresh(evt) {
      this.$store.dispatch('wsEmitMessage', {act: ACT_ADMIN_REFRESH_CONFIG});
    },
    onChangeNumber(key, item, evt) {
      const id = item.id;
      const where = {id};
      const data = {[key]: parseInt(evt.target.value)};
      this.$store.dispatch('wsEmitMessage', {act: ACT_ADMIN_UPDATE, payload: {
        model: this.modelInput.trim(),
        where,
        data
      }});
    },
    isSpan(item) {
      return !this.checkEdit || isNaN(item) || typeof item == 'boolean';
    }
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
#rv-admin .md-field {
  margin: 0px;
  padding: 0px;
  background-color: #fff;
  min-height: 32px;
}
#rv-admin .md-field .md-input-action {
  top: 0px;
}
#rv-admin .md-table-cell .md-table-cell-container input{
  width: 48px;
}
</style>