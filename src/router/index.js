import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Player from '@/components/Player';
import Arena from '@/components/Arena';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/player',
      name: 'Player',
      component: Player,
    },
    {
      path: '/arena',
      name: 'Arena',
      component: Arena,
    },
  ],
});
