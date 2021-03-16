<template>
  <div id="rv-game-video">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          
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
import { ACT_GET_GAME_RESULTS, ACT_GET_GAMES } from '../store/enum';

export default {
  name: 'GameVideo',
  data() {
    return {
      
    };
  },
  mounted() {
    console.log([this]);
    console.log(this.$route.params.vid)
    this.$store.dispatch('wsEmitMessage', {act: ACT_GET_GAMES, payload: this.$route.params.vid});
  },
  computed: {
    ...mapState(['global', 'user', 'game']),
    videoLink() {
      return '/static/videos/s1-g1.mp4';
      const result = this.game.list.find(e => e.id == this.$route.params.vid);
      if (result) {
        console.log('result: ', result);
        return result.video;
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