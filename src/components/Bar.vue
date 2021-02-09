<template>
  <div class="home bg-img" id="rv-bar">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>酒吧</span>
          </div>
          <div class="md-subhead">
            <span>bar in the kingdom</span>
          </div>
          <div class="note"></div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RadarChart from './chart/radar';
import { ACT_JOIN_CHAT_ROOM } from '../store/enum';

export default {
  name: 'Bar',
  components: {
    RadarChart
  },
  data() {
    return {
      
    }
  },
  mounted() {
    // console.log(this);
    this.sendMessage();
  },
  beforeDestroy() {

  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    sendMessage(evt) {
      console.log('Bar sendMessage');
      this.$store.dispatch('wsEmitMessage', {act: ACT_JOIN_CHAT_ROOM, payload: {}});
    }
  }
}
</script>
