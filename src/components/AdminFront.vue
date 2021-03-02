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
import { mapState } from 'vuex';
import { ACT_GET_ADMIN_DATASET } from '../store/enum';

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
  },
  computed: {
    ...mapState(['global', 'user']),
    datasetKeys() {
      if (this.global.dataset.length > 0) {
        return Object.keys(this.global.dataset[0]);
      } else {
        return []
      }
    },
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