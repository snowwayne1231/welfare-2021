<template>
  <div class="live-battle">
    <iframe id="live-iframe" :src="iframeSrc" frameborder="0" allowfullscreen ref="iframe"></iframe>
    <div class="love-zone">
      <div class="loves-flying">
        <i :class="getClassNameLove(n)" v-for="(n, idx) in chat.loveArray" :key="idx">favorite</i>
      </div>
      <div class="loves-btn" @click="onClickLoveBtn" :class="{'disable': !isLoveOpen}">
        <i class="love md-icon">favorite</i>
      </div>
      <div class="love-count">{{chat.loveCount}}</div>
    </div>
    <i class="md-icon refresh" @click="reload">refresh</i>
  </div>
</template>

<script>
import { ACT_SEND_LOVE, ACT_GET_LOVE } from '../../store/enum';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'LiveBattle',
  props: {
    
  },
  data() {
    return {
      // keyid: 'GOR2021',
      host: '',
      keyid: 'snow1',
    };
  },
  computed: {
    ...mapState(['global', 'chat']),
    ...mapGetters(['isLoveOpen']),
    iframeSrc() {
      return this.host ? `${this.host}/WebRTCAppEE/play.html?name=${this.keyid}` : '';
    },
  },
  mounted() {
    const iframe = this.$refs.iframe;
    this.$store.dispatch('wsEmitMessage', {act: ACT_GET_LOVE});
    this.host = 'https://ant.etwlt.com:5443';
  },
  beforeDestroy() {
    this.host = '';
  },
  methods: {
    onClickLoveBtn() {
      if (this.isLoveOpen) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_SEND_LOVE});
      }
    },
    getClassNameLove(num) {
      return (num >= 0) ? `love md-icon love-name-${num % 3}` : 'love md-icon';
    },
    reload() {
      if (this.timer > 0) { return; }
      const $this = this;
      const oldHost = $this.host;
      $this.$store.dispatch('wsEmitMessage', {act: ACT_GET_LOVE});
      $this.host = '';
      $this.timer = window.setTimeout(() => {
        $this.host = oldHost;
        $this.timer = 0;
      },500);
    }
  }
};
</script>

<style lang="scss">
#live-iframe {
  min-height: 380px;
}

.live-battle {
  position: relative;
  .love-zone {
    position: absolute;
    right: 5px;
    bottom: 5px;
    height: 240px;
    width: 80px;
    .loves-flying {
      position: absolute;
      right: 4px;
      height: 100%;
      width: 40px;
      .love {
        position: absolute;
        bottom: 1%;
        animation-duration: 1.6s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        display: inline-block;
        height: 20px;
        width: 20px;
        color: red;
      }
      .love-name-0 {
        animation-name: loveMove1;
      }
      .love-name-1 {
        animation-name: loveMove2;
      }
      .love-name-2 {
        animation-name: loveMove3;
      }
    }

    .loves-btn {
      position: absolute;
      background-color: red;
      border-radius: 50%;
      bottom: 0px;
      right: 0px;
      width: 26px;
      height: 26px;
      display: block;
      margin: 0px auto;
      text-align: center;
      line-height: 26px;
      cursor: pointer;
      &:hover {
        .md-icon {
          color: pink;
        }
      }
      &.disable {
        background-color: #ada9a9;
        cursor: not-allowed;
        .md-icon {
          color: #422727;
        }
      }
      .md-icon {
        color: #fff;
      }
    }
    .love-count {
      position: absolute;
      bottom: 2px;
      right: 30px;
      background-color: #fff;
      color: red;
      border-radius: 5px;
      padding: 1px 3px;
    }
  }
  .refresh {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #fff;
    cursor: pointer;
  }

}

@keyframes loveMove1 {
  0% {
    right: 0px;
    bottom: 1%;
    opacity: 1;
  }
  30% {
    right: 20px;
    bottom: 15%;
    opacity: 1;
  }
  100% {
    right: 40px;
    bottom: 110%;
    opacity: 0;
  }
}
@keyframes loveMove2 {
  0% {
    right: 0px;
    bottom: 1%;
    opacity: 1;
  }
  30% {
    right: 10px;
    bottom: 15%;
    opacity: 1;
  }
  100% {
    right: 0px;
    bottom: 100%;
    opacity: 0;
  }
}
@keyframes loveMove3 {
  0% {
    right: 0px;
    bottom: 1%;
    opacity: 1;
  }
  30% {
    right: 15px;
    bottom: 10%;
    opacity: 1;
  }
  100% {
    right: 10px;
    bottom: 120%;
    opacity: 0;
  }
}
</style>