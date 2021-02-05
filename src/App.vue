<template>
  <div id="app">
    <div class="logo">
      <img src="/static/imgs/logo.png" alt="" />
    </div>
    <div class="title">
      <div class="top">GAME <span>OF</span></div>
      <div class="bottom">REVOVISION</div>
    </div>
    <md-list class="menu" router-link>
      <md-list-item v-for="(m, m_i) in menu" :to="m.url" :key="m_i">
        <div class="md-list-item-text">
          <div class="main">{{ m.name_en }}</div>
          <div class="sub">{{ m.name }}</div>
        </div>
      </md-list-item>
    </md-list>
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
  data() {
    return {
      menu: [
        { name: '王國大廳', name_en: 'KINGDOM', url: '/' },
        { name: '臥室', name_en: 'ROOM', url: '/player' },
        { name: '家族', name_en: 'FAMILY', url: '/family' },
        { name: '競技場', name_en: 'ARENA', url: '/arena' },
        { name: '離開', name_en: 'SIGN OUT', url: '/arena' }
      ]
    }
  },
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
@import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@font-face {
  font-family: 'Game of Thrones';
  src: url('/static/front/Game of Thrones.ttf');
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  left: 50px;
  top: 23px;
  width: 210px;
  position: fixed;
  opacity: 0.75;
  z-index: 10;
  img {
    width: 100%;
  }
}
.title {
  position: fixed;
  font-family: 'Game of Thrones', sans-serif;
  font-size: 21px;
  color: #ac9d83;
  z-index: 10; 
  top: 155px;
  left: 65px;
  .top {
    font-size: 16px;
    margin-bottom: 2px;
    span {
      font-size: 12px;
    }
  }
  .bottom {
    letter-spacing: 2px;
  }
}
.menu {
  position: fixed;
  left: 50px;
  top: 0;
  z-index: 2;
  width: 210px;
  height: 100vh;
  background-color: #0a0600ab !important;
  padding-top: 300px;
  .md-list-item-text {
    color: #b18f5b;
    font-size: 28px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: 'Philosopher', sans-serif;
    .sub {
      font-size: 15px;
      color: #aaa;
    }
  }
}
.bg-img {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
}
</style>
