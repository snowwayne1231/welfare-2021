<template>
  <div class="home bg-img">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>史塔克家</span>
          </div>
          <div class="md-subhead">
            <span>House Of Stark</span>
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

export default {
  name: 'Family',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  mounted() {
    // console.log(this);
    // this.sendMessage();
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    sendMessage(evt) {
      // console.log('sendMessage');
      // this.$store.dispatch('wsEmitMessage', {act: 123, payload: {}});
    }
  }
}
</script>
