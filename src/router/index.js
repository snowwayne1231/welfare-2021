import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import HomeOlder from '@/components/HomeOlder';
import HomeRules from '@/components/HomeRules';
import Player from '@/components/Player';
import Arena from '@/components/Arena';
import Family from '@/components/Family';
import Bar from '@/components/Bar';
import Maintain from '@/components/Maintain';
import AdminFront from '@/components/AdminFront';
import GameEditor from '@/components/GameEditor';
import GameVideo from '@/components/GameVideo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/olderinfo',
      name: 'HomeOlder',
      component: HomeOlder,
    },
    {
      path: '/rules',
      name: 'HomeRules',
      component: HomeRules,
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
      // component: Maintain,
    },
    {
      path: '/family',
      name: 'Family',
      component: Family,
      // component: Maintain,
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar,
    },
    {
      path: '/ge',
      name: 'GameEditor',
      component: GameEditor,
    },
    {
      path: '/adminfront',
      name: 'AdminFront',
      component: AdminFront,
    },
    {
      path: '/gamevideo/:vid',
      name: 'GameVideo',
      component: GameVideo,
    }
  ],
});
