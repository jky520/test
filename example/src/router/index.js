import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import item from '@/components/item';
import skill from '@/components/skill';
import school from '@/components/school';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/item',
      name:'item',
      component: item
    },
    {
      path:'/skill',
      name:'skill',
      component:skill
    },
    {
      path:'/school',
      name:'school',
      component:school
    }
  ]
})
