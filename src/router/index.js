import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import StaffRecord from '@/components/StaffRecord';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/staff',
      name: 'StaffRecord',
      component: StaffRecord,
    },
  ],
});
