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
      return 'http://172.16.0.130/photo/webapi/download.php/1.mp4?api=SYNO.PhotoStation.Download&method=getvideo&version=1&id=video_323032312f323032312e30332e30352de79dbfe8a88ae6ad8ce59689e8ae9a2f766964656f_30303030332e4d5453&quality_id=2f766f6c756d65312f50686f746f2f323032312f323032312e30332e30352de79dbfe8a88ae6ad8ce59689e8ae9a2f766964656f2f4065614469722f30303030332e4d54532f53594e4f50484f544f5f46494c4d5f4d2e6d7034';
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