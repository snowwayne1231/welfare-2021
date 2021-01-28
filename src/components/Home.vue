<template>
  <div class="home">
    <div class="personal-card" v-if="user.id > 0">

      <div class="card-header">
        <span>角色資訊</span>
      </div>
      <div class="card-body">
        <div class="card-top">
          <div class="card-top-left">
            <img class="card-code-img" :src="`/static/${user.code}.jpg`" />
          </div>
          <div class="card-top-right">
            <md-table>
              <md-table-row>
                <md-table-cell>工號:</md-table-cell>
                <md-table-cell>{{user.code}}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>單位:</md-table-cell>
                <md-table-cell>{{user.departmentName}}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>暱稱:</md-table-cell>
                <md-table-cell>{{user.nickname}}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>姓名:</md-table-cell>
                <md-table-cell>{{user.firstName}} ({{user.name}})</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>MVP:</md-table-cell>
                <md-table-cell>{{user.mvp}}</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>RV值:</md-table-cell>
                <md-table-cell>{{user.rv}}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
        <div class="card-mid">
          <md-table>
            <md-table-row>
              <md-table-head >力量</md-table-head >
              <md-table-head >敏捷</md-table-head >
              <md-table-head >體力</md-table-head >
              <md-table-head >智慧</md-table-head >
              <md-table-head >魅力</md-table-head >
            </md-table-row>
            <md-table-row>
              <md-table-cell>{{user.strLv}}</md-table-cell>
              <md-table-cell>{{user.dexLv}}</md-table-cell>
              <md-table-cell>{{user.conLv}}</md-table-cell>
              <md-table-cell>{{user.intLv}}</md-table-cell>
              <md-table-cell>{{user.chaLv}}</md-table-cell>
            </md-table-row>
          </md-table>
          <div class="card-ability-chat">
            <RadarChart :chart-data="dataRadar" :options="optionRadar" :width="520" :height="520"></RadarChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RadarChart from './chart/radar';

export default {
  name: 'Home',
  components: {
    RadarChart
  },
  data() {
    return {
      optionRadar: {
        scale: {
          ticks: {
            suggestedMin: 0,
          }
        }
      }
    };
  },
  mounted() {
    // console.log(this);
    
  },
  computed: {
    ...mapState(['user']),
    dataRadar() {
      console.log('dataRadar: ', this);
      return {
        labels: ['力', '敏', '體', '智', '魅'],
        datasets: [
          {
            label: '數值',
            backgroundColor: 'rgba(0, 254, 185, 0.5)',
            data: [this.user.str, this.user.dex, this.user.con, this.user.int, this.user.cha],
            spanGaps: true,
          },
        ]
      };
    },
  },
  methods: {
    sendMessage(evt) {
      console.log('sendMessage');
      // this.$store.dispatch('wsEmitAuthorize', this.$cookies.get('logintimestamp'));
    },
  }
};
</script>

<style lang="scss">
.home {
  background-image: url('/static/imgs/bg_black_wood.jpg');
}
</style>