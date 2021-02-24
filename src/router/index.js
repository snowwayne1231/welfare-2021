import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Player from '@/components/Player';
import Arena from '@/components/Arena';
import Family from '@/components/Family';
import Bar from '@/components/Bar';
import Maintain from '@/components/Maintain';
import AdminFront from '@/components/AdminFront';

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
      // component: Arena,
      component: Maintain,
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
      path: '/adminfront',
      name: 'AdminFront',
      component: AdminFront,
    }
  ],
});
