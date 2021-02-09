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
        { name: '酒吧', name_en: 'BAR', url: '/bar' },
        { name: '競技場', name_en: 'ARENA', url: '/arena' },
        { name: '離開', name_en: 'SIGN OUT', url: '/logout' }
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
