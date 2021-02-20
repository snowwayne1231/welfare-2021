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
          <div class="note"></div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content class="role-area" v-if="myHouse">
        <div class="castle zone">
          <md-card class="role ma-5-px" :class="[r.type]" v-for="(r, i) in roles.a" :key="'a' + i">
            <md-card-header>
              <md-avatar>
                <!-- <img src="/assets/examples/avatar.png" alt="Avatar" /> --><span
                  class="material-icons"
                >
                  account_circle
                </span>
              </md-avatar>
              <div class="md-title">{{ r.name }}</div>
              <div class="md-subhead">{{ r.role }}</div>
            </md-card-header>
          </md-card>
        </div>
        <div class="flat-house zone">
          <md-card class="role ma-5-px" :class="[r.type]" v-for="(r, i) in roles.b" :key="'b' + i">
            <md-card-header>
              <md-avatar>
                <!-- <img src="/assets/examples/avatar.png" alt="Avatar" /> --><span
                  class="material-icons"
                >
                  account_circle
                </span>
              </md-avatar>
              <div class="md-title">{{ r.name }}</div>
              <div class="md-subhead">{{ r.role }}</div>
            </md-card-header>
          </md-card>
        </div>
        <div class="zone suck-house">
          <md-card class="role ma-5-px" :class="[r.type]" v-for="(r, i) in roles.c" :key="'c' + i">
            <md-card-header>
              <md-avatar>
                <!-- <img src="/assets/examples/avatar.png" alt="Avatar" /> --><span
                  class="material-icons"
                >
                  account_circle
                </span>
              </md-avatar>
              <div class="md-title">{{ r.name }}</div>
              <div class="md-subhead">{{ r.role }}</div>
            </md-card-header>
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


export default {
  name: 'Family',
  data() {
    return {
      roles: {
        a: [
          { name: '暱稱', role: '族長', type: 'leader' },
          { name: '暱稱', role: '封臣', type: 'partner' },
          { name: '暱稱', role: '封臣', type: 'partner' },
          { name: '暱稱', role: '封臣', type: 'partner' },
          { name: '暱稱', role: '封臣', type: 'partner' },
          { name: '暱稱', role: '封臣', type: 'partner' }
        ],
        b: [
          { name: '暱稱', role: '成員', type: 'member' },
          { name: '暱稱', role: '成員', type: 'member' },
          { name: '暱稱', role: '成員', type: 'member' },
          { name: '暱稱', role: '成員', type: 'member' },
          { name: '暱稱', role: '成員', type: 'member' },
          { name: '暱稱', role: '成員', type: 'member' },
        ],
        c: [
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },
          { name: '暱稱', role: '國民', type: 'traveler' },

        ]
      }
    }
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
    ...mapGetters(['myHouse']),
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