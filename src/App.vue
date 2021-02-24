<template>
  <div id="app">
    <div class="logo">
      <!-- <img src="/static/imgs/logo_small.png" alt="" /> -->
    </div>
    <div class="title">
      <div class="top">GAME <span>OF</span></div>
      <div class="bottom">REVOVISION</div>
    </div>
    <md-list class="menu" router-link>
      <div class="meun-wrapper">
        <md-list-item v-for="(m, m_i) in menu" :to="m.url" :key="m_i">
          <div class="md-list-item-text">
            <div class="main">{{ m.name_en }}</div>
            <div class="sub">{{ m.name }}</div>
          </div>
        </md-list-item>
        <md-list-item><div class="md-list-item-text" @click="onClickLogout" :style="{cursor: 'pointer'}"><div class="main">SIGN OUT</div><div class="sub">離開</div></div></md-list-item>
      </div>
    </md-list>
    <router-view />
    <div class="loading-mask">
      <div :class="{ chunk: true, done: isLoadingDone }">{{user.connected}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ACT_GET_HOUSES_DATA } from './store/enum';
export default {
  name: 'App',
  data() {
    return {
      menu: [
        { name: '王國大廳', name_en: 'KINGDOM', url: '/' },
        { name: '臥室', name_en: 'ROOM', url: '/player' },
        { name: '家族', name_en: 'HOUSE', url: '/family' },
        { name: '酒吧', name_en: 'BAR', url: '/bar' },
        { name: '競技場', name_en: 'ARENA', url: '/arena' },
        // { name: '離開', name_en: 'SIGN OUT', url: '/logout' }
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
    this.nowConnecting = false;
    this.recheckConnection();
    console.log('store: ', this.$store);
  },
  updated() {
    this.recheckConnection();
  },
  methods: {
    onClickLogout() {
      window.location.href = '/logout';
    },
    recheckConnection() {
      if (this.nowConnecting == false) {
        if (this.user.connected) {
          this.$store.dispatch('wsEmitAuthorize', this.$cookies.get('logintimestamp'));
          this.$store.dispatch('wsEmitMessage', {act: ACT_GET_HOUSES_DATA});
        }
      }
      this.nowConnecting = this.user.connected;
    }
  },
}
</script>
