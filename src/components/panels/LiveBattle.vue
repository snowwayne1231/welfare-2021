<template>
  <div class="live-battle">
    <iframe id="live-iframe" height="560" :src="`https://ant.etwlt.com:5443/WebRTCAppEE/play.html?name=${keyid}`" frameborder="0" allowfullscreen ref="iframe"></iframe>
  </div>
</template>

<script>
import {WebRTCAdaptor} from "../webrtc/webrtc_adaptor.js";
import {getUrlParameter} from "../webrtc/fetch.stream.js";
import '../webrtc/adapter-latest.js';
import '../webrtc/jquery-3.4.1.min.js';
import '../webrtc/popper.min.js';
// import '../webrtc/bootstrap.min.js';

export default {
  name: 'LiveBattle',
  props: {
    
  },
  data() {
    return {
      // keyid: 'GOR2021',
      keyid: 'snow1',
    };
  },
  mounted() {
    const iframe = this.$refs.iframe;
  },
  methods: {
    
  }
};
</script>

<style>
#live-iframe {
  width: 100%;
  height: 560px;
}
</style>