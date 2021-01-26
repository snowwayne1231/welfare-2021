<template>
  <div class="home">
    <table>
      {{user}}
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      
    };
  },
  mounted() {
    // console.log(this);
    
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    sendMessage(evt) {
      console.log('sendMessage');
      // this.$store.dispatch('wsEmitAuthorize', this.$cookies.get('logintimestamp'));
    },
  }
};
</script>
