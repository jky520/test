import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import item from '@/components/item';
import skill from '@/components/skill';
import school from '@/components/school';
import major from '@/components/major';
import overseas from '@/components/overseas';
import news from '@/components/news';
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
    },
    {
      path:'/major',
      name:'major',
      component:major
    },
    {
      path:'/overseas',
      name:'overseas',
      component:overseas
    },
    {
      path:'/news',
      name:'news',
      component:news
    }
  ]
})
