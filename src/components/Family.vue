<template>
  <div class="family bg-img">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>史塔克家</span>
          </div>
          <div class="md-subhead">
            <span>House Of Stark</span>
          </div>
          <div class="note"></div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content class="role-area">
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
        <div class="my-50-px"></div>
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
        <div class="my-80-px"></div>
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
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Family',
  components: {},
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
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    sendMessage(evt) {
      // console.log('sendMessage');
      // this.$store.dispatch('wsEmitMessage', {act: 123, payload: {}});
    }
  }
}
</script>

<style lang="scss">
.family {
  .role-area {
    text-align: left;
  }
  .role {
    width: auto;
    min-width: 300px;
    display: inline-block;
    background-color: #e8e8e8c4;
    &.leader {
      background-color: #ffb1b1c4;
    }
    &.partner {
      background-color:#ffe1bcc4;
    }
    &.member {
      background-color:#b1ffffc4;
    }
    &.traveler {
      background-color: #b1d0ffc4;
    }
    .md-card-header {
      border: none;
    }
  }
}
</style>