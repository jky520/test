import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import item from '@/components/item';
import skill from '@/components/skill';
import school from '@/components/school';
import major from '@/components/major';
import overseas from '@/components/overseas';
import news from '@/components/news';
import job from '@/components/job';
import exam from '@/components/job';
import pressure from '@/components/pressure';
import mine from '@/components/mine';
import userInfoEdit from '@/components/userInfoEdit';
import search from '@/components/search';
import login from '@/components/login';
import register from '@/components/register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
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
    },
    {
      path:'/job',
      name:'job',
      component:job
    },
    {
      path:'/exam',
      name:'exam',
      component:exam
    },
    {
      path:'/pressure',
      name:'pressure',
      component:pressure
    },
    {
      path:'/mine',
      name:'mine',
      component:mine
    },
    {
      path:'/edit',
      name:'edit',
      component:userInfoEdit
    },
    {
      path:'/search',
      name:'search',
      component:search
    }
  ]
})
