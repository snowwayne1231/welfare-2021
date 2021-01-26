<template>
  <div id="app">
    <md-tabs router-link>
      <!-- <md-tab md-label="Staff" to="/staff"></md-tab> -->
      <md-tab md-label="首頁" to="/"></md-tab>
    </md-tabs>
    <router-view/>
    <div class="loading-mask">
      <div :class="{chunk: true, done: isLoadingDone}"> </div>
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState(['user']),
    isLoadingDone() {
      return this.user.id > 0 && this.user.connected;
    },
  },
  mounted() {
    this.$store.dispatch('wsEmitAuthorize', this.$cookies.get('logintimestamp'));
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
