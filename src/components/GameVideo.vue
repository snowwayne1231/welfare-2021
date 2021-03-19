<template>
  <div id="rv-game-video">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>影片回顧</span>
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <div>
          <video v-if="videoLink" id="video-game" width="680" height="460" controls>
            <source :src="videoLink" />
          </video>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ACT_GET_GAME_VIDEO, ACT_GET_GAMES } from '../store/enum';

export default {
  name: 'GameVideo',
  data() {
    return {
      
    };
  },
  mounted() {
    console.log([this]);
    console.log(this.$route.params.vid);
    this.handleStart();
  },
  computed: {
    ...mapState(['global', 'user', 'game']),
    videoLink() {
      const result = this.game.videoLink;
      if (result) {
        console.log('result: ', result);
        return result;
      }
      return false;
    },
    videoType() {
      const link = this.videoLink;
      if (link) {
        switch (true) {
          case !!link.match(/.[mp4|mov]$/ig): {
            return 'video/mp4';
          }
          case !!link.match(/.[webm]$/ig): {
            return 'video/webm';
          }
          default:
        }
      }
      return '';
    },
  },
  methods: {
    handleStart() {
      if (this.user.connected) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_GET_GAME_VIDEO, payload: {id: parseInt(this.$route.params.vid) || 0}});
      } else {
        this.timer = window.setTimeout(this.handleStart, 1000);
      }
    },
  }
}
</script>
<style lang="scss">
#rv-game-video {
  .md-card-content {
    background-color: #000;
  }
}
</style>