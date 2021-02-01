<template>
  <div class="home">
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
  background-image: url('/static/imgs/bg_black_lobby.jpg');
  height: 100vh;
}
</style>