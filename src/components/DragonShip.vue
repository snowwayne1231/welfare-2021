<template>
  <div class="home bg-img">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>端午龍舟滑起來</span>
          </div>
          <div class="md-subhead">
            <span>Dragon Boat Festival</span>
          </div>
          <div class="note" style="width:100%;">
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <div id="dragon-ship">
          <div class="show-panel">
            <div class="dragon red"></div>
            <div class="dragon blue"></div>
          </div>
          <div class="controller">
            <div class="left-paddle paddle-zone">
              <img src="/static/imgs/dragonship/paddle.png" />
            </div>
            <div class="drum-zone"><img class="drum" src="/static/imgs/dragonship/drum.png" /></div>
            <div class="right-paddle paddle-zone">
              <img src="/static/imgs/dragonship/paddle.png" />
            </div>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      expandSingle: true,
    }
  },
  mounted() {
    // console.log(this);
    // this.sendMessage();
  },
  // computed: {
  //   ...mapState(['user'])
  // },
  methods: {
    
  }
}
</script>

<style scoped>
#dragon-ship {
  height: 100%;
  box-sizing: border-box;
  position: relative;
}

#dragon-ship >div {
  height: 50%;
  position: relative;
}

#dragon-ship .show-panel {
  background-image: url('/static/imgs/dragonship/sea.jpg');
  background-clip: content-box;
  background-position: center bottom;
  background-repeat: repeat-x;
  background-origin: content-box;
  background-color: #fff2d3;
}

#dragon-ship .dragon {
  background-position: center bottom;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: contain;
  display: inline-block;
  width: 200px;
  height: 136px;
  position: absolute;
  left: 0%;
}
#dragon-ship .dragon.red {
  background-image: url('/static/imgs/dragonship/redd.png');
  bottom: 96px;
}
#dragon-ship .dragon.blue {
  background-image: url('/static/imgs/dragonship/blued.png');
  bottom: 10px;
}

#dragon-ship .controller {
  position: relative;
  white-space: nowrap;
  text-align: center;
  padding: 20px 0px;
}

#dragon-ship .controller .drum-zone{
  position: relative;
  display: inline-block;
  width: 36%;
}

#dragon-ship .controller .paddle-zone {
  position: relative;
  display: inline-block;
  width: 30%;
}
</style>
