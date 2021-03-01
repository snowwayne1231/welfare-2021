<template>
  <div class="family bg-img">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <img v-if="myHouse" :src="myHouseLogo" class="family-logo"/>
          <div class="md-title">
            <span v-if="myHouse">{{myHouse.name}}</span>
            <span v-else>尚未加入家族</span>
          </div>
          <div class="md-subhead" v-if="myHouse">
            <span>House Of {{myHouse.en}}</span>
          </div>
          <div class="note">
            <table>
              <tr>
                <th>攻擊力: </th>
                <td>{{myHouseAbility.atk}}</td>
              </tr>
              <tr>
                <th>移動力: </th>
                <td>{{myHouseAbility.move}}</td>
              </tr>
              <tr>
                <th>再動: </th>
                <td>{{myHouseAbility.moveAgain}}</td>
              </tr>
            </table>
          </div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content class="role-area" v-if="myHouse">
        <div class="castle zone">
          <md-card class="role" v-for="(user) in myFamilyCastle" :key="user.id" :class="{leader: user.isLeader, partner: user.int > 0}">
            <Man :name="user.nickname" :str="user.strLv" :dex="user.dexLv" :con="user.conLv" :wis="user.wisLv" :cha="user.chaLv" :mvp="user.mvp"></Man>
          </md-card>
        </div>
        <div class="flat-house zone">
          <md-card class="role member" v-for="(user) in myFamilyHouse" :key="user.id">
            <Man :name="user.nickname" :str="user.strLv" :dex="user.dexLv" :con="user.conLv" :wis="user.wisLv" :cha="user.chaLv" :mvp="user.mvp"></Man>
          </md-card>
        </div>
        <div class="zone suck-house">
          <md-card class="role traveler" v-for="(user) in myFamilyPopulace" :key="user.id">
            <Man :name="user.nickname" :str="user.strLv" :dex="user.dexLv" :con="user.conLv" :wis="user.wisLv" :cha="user.chaLv" :mvp="user.mvp"></Man>
          </md-card>
        </div>
        
      </md-card-content>

      <md-card-content v-else>
        <div class="no-join-family grassland">
          <img class="suck-house" src="/static/imgs/suck_house.png" />
          <span class="active-man">
            <md-icon>accessibility_new</md-icon>
            <md-icon>emoji_people</md-icon>
          </span>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import { ACT_GET_FAMILY_DATA } from '../store/enum';
import Man from './panels/Man';
import Helper from './panels/Helper';


export default {
  name: 'Family',
  components: {Man, Helper},
  data() {
    return {}
  },
  mounted() {
    // console.log(this);
    // this.sendMessage();
    if (this.user.connected) {
      this.$store.dispatch('wsEmitMessage', {act: ACT_GET_FAMILY_DATA});
    } else {
      this.timer = window.setInterval(this.whileConnection, 500);
    }
  },
  beforeDestroy() {
    this.timer && window.clearInterval(this.timer);
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['myHouse', 'myHouseAbility']),
    myHouseLogo() {
      const HouseImages = {
        'stark': 'wolf.png',
        'eyrie': 'bird.png',
        'tully': 'fish.png',
        'lannister': 'lion.png',
        'tyrell': 'rose.png',
        'baratheon': 'deer.png',
        'targaryen': 'dragon.png',
        'martell': 'sun.png',
      }
      const house_en = this.myHouse.en;
      return '/static/imgs/' + HouseImages[house_en];
    },
    myFamilyCastle() {
      const loc = this.user.family.filter(u => u.int > 0 || u.isLeader);
      loc.sort((a,b) => a.int - b.int);
      return loc;
    },
    myFamilyHouse() {
      const loc = this.user.family.filter(u => u.houseId > 0 && !u.isLeader);
      loc.sort((a,b) => b.rv - a.rv);
      return loc;
    },
    myFamilyPopulace() {
      const loc = this.user.family.filter(u => u.houseId == 0 && !u.isLeader);
      loc.sort((a,b) => b.rv - a.rv);
      return loc;
    }
  },
  methods: {
    whileConnection() {
      if (this.user.connected) {
        this.$store.dispatch('wsEmitMessage', {act: ACT_GET_FAMILY_DATA});
        window.clearInterval(this.timer);
      }
    },
  }
}
</script>