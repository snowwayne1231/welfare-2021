<template>
  <div id="app">
    <md-list class="menu" router-link>
      <md-list-item class="logo">
        睿訊王國旗幟圖
      </md-list-item>
      <md-list-item>
        <span class="md-list-item-text" to="/">角色資訊</span>
      </md-list-item>
      <md-list-item>
        <span class="md-list-item-text" to="/family">家族大廳</span>
      </md-list-item>
      <md-list-item>
        <span class="md-list-item-text" to="/record">競技場</span>
      </md-list-item>
    </md-list>
    <!-- <md-tabs router-link>
      <md-tab md-label="個人" to="/"></md-tab>
      <md-tab md-label="家族大廳" to="/family"></md-tab>
      <md-tab md-label="賽程紀錄" to="/record"></md-tab>
    </md-tabs> -->
    <router-view />
    <div class="loading-mask">
      <div :class="{ chunk: true, done: isLoadingDone }"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['user']),
    isLoadingDone() {
      return this.user.id > 0 && this.user.connected
    }
  },
  mounted() {
    this.$store.dispatch('wsEmitAuthorize', this.$cookies.get('logintimestamp'))
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  position: fixed;
  left: 10px;
  top: 0;
  z-index: 2;
  width: 180px;
  height: 100vh;
  background-color: #0000008c !important;
  box-shadow: 0px 0px 6px 3px #6b6b6b;
  .logo {
    height: 160px;
    color: #FFF !important;
    margin-top: 20px;
    margin-bottom: 30px;
    background-image: url('/static/imgs/logo.jpg');
    background-repeat: no-repeat;
    background-size: 250px 250px;
    background-position: center top;
    opacity: 0.6;
  }
  .md-list-item-text {
    color: #fff;
  }
}
</style>
