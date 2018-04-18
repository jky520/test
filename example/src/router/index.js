import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import item from '@/components/items';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/item',
      name:'item',
      component: item
    }
  ]
})
