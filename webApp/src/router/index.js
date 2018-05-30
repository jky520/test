import Vue from 'vue';
import Router from 'vue-router';
// login
import login from '@/components/login/login';
import register from '@/components/login/register';
// main
import index from '@/components/index';
import mine from '@/components/mine';
import develop from '@/components/develop';
// school
import school from '@/components/school/school';
import studyLoad from '@/components/school/studyLoad';
import trainLoad from '@/components/school/trainLoad';
import search from '@/components/school/search';
import schoolDetail from '@/components/school/schoolDetail';
import schoolAdress from '@/components/school/schoolAdress';
import schoolClass from '@/components/school/schoolClass';
import schoolDepartment from '@/components/school/schoolDepartment';
import classVideo from '@/components/school/classVideo';
import majorDetail from '@/components/school/majorDetail';
import schoolIntro from '@/components/school/schoolIntro';
// major
import major from '@/components/major/major';
import hotR from '@/components/major/hotR';
import majorSearch from '@/components/major/majorSearch';
import majorInfo from '@/components/major/majorInfo';
//item
import item from '@/components/item/item';
import itemList from '@/components/item/itemList';
import showOnline from '@/components/item/showOnline';

//overseas
import overseas from '@/components/overseas/overseas';
import overseasLoad from '@/components/overseas/overseasLoad';
import studyDetail from '@/components/overseas/studyDetail';
import overseasInfo from '@/components/overseas/overseasInfo';

//skill
import skill from '@/components/skill/skill';
import skillLoad from '@/components/skill/skillLoad';
import skillDetail from '@/components/skill/skillDetail';
import skillInfo from '@/components/skill/skillInfo';
import skillDetail2 from '@/components/skill/skillDetail2';
import skillDetail3 from '@/components/skill/skillDetail3';

//job
import job from '@/components/job/job';
import jobLoad from '@/components/job/jobLoad';
import jobDetail from '@/components/job/jobDetail';
import jobDetail2 from '@/components/job/jobDetail2';
import jobCompany from '@/components/job/jobCompany';
//exam
import exam from '@/components/exam/exam';
import examLoad from '@/components/exam/examLoad';
import examDetail from '@/components/exam/examDetail';
//press
import pressure from '@/components/press/pressure';
import pressLoad from '@/components/press/pressLoad';
import pressureIdea from '@/components/press/pressureIdea';
import pressurePerson from '@/components/press/pressurePerson';
import pressurePerson2 from '@/components/press/pressurePerson2';
import personDetail from '@/components/press/personDetail';
//news
import news from '@/components/news/news';
import newsLoad from '@/components/news/newsLoad';
import userInfoEdit from '@/components/userInfoEdit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
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
    },
    {
      path:'/schoolDetail',
      name:'schoolDetail',
      component:schoolDetail
    },
    {
      path:'/schoolAdress',
      name:'schoolAdress',
      component:schoolAdress
    },
    {
      path:'/studyLoad',
      name:'studyLoad',
      component:studyLoad
    },
    {
      path:'/trainLoad',
      name:'trainLoad',
      component:trainLoad
    },
    {
      path:'/schoolClass',
      name:'schoolClass',
      component:schoolClass
    },
    {
      path:'/hotR',
      name:'hotR',
      component:hotR
    },
    {
      path:'/itemList',
      name:'itemList',
      component:itemList
    },
    {
      path:'/studyDetail',
      name:'studyDetail',
      component:studyDetail
    },
    {
      path:'/schoolDepartment',
      name:'schoolDepartment',
      component:schoolDepartment
    },
    {
      path: '/overseasLoad',
      name: 'overseasLoad',
      component: overseasLoad
    },
    {
      path: '/majorDetail',
      name: 'majorDetail',
      component: majorDetail
    },
    {
      path: '/skillLoad',
      name: 'skillLoad',
      component: skillLoad
    },
    {
      path: '/skillDetail',
      name: 'skillDetail',
      component: skillDetail
    },
    {
      path: '/jobLoad',
      name: 'jobLoad',
      component: jobLoad
    },
    {
      path: '/jobDetail',
      name: 'jobDetail',
      component: jobDetail
    },
    {
      path: '/jobDetail2',
      name: 'jobDetail2',
      component: jobDetail2
    },
    {
      path: '/classVideo',
      name: 'classVideo',
      component: classVideo
    },
    {
      path: '/develop',
      name: 'develop',
      component: develop
    },
    {
      path: '/examDetail',
      name: 'examDetail',
      component: examDetail
    },
    {
      path: '/examLoad',
      name: 'examLoad',
      component: examLoad
    },
    {
      path: '/pressureIdea',
      name: 'pressureIdea',
      component: pressureIdea
    },
    {
      path: '/pressLoad',
      name: 'pressLoad',
      component: pressLoad
    },
    {
      path: '/newsLoad',
      name: 'newsLoad',
      component: newsLoad
    },
    {
      path: '/majorSearch',
      name: 'majorSearch',
      component: majorSearch
    },
    {
      path: '/schoolIntro',
      name: 'schoolIntro',
      component: schoolIntro
    },
    {
      path: '/majorInfo',
      name: 'majorInfo',
      component: majorInfo
    },
    {
      path: '/showOnline',
      name: 'showOnline',
      component: showOnline
    },
    {
      path: '/overseasInfo',
      name: 'overseasInfo',
      component: overseasInfo
    },
    {
      path: '/skillInfo',
      name: 'skillInfo',
      component: skillInfo
    },
    {
      path: '/skillDetail2',
      name: 'skillDetail2',
      component: skillDetail2
    },
    {
      path: '/skillDetail3',
      name: 'skillDetail3',
      component: skillDetail3
    },
    {
      path: '/jobCompany',
      name: 'jobCompany',
      component: jobCompany
    },
    {
      path: '/pressurePerson',
      name: 'pressurePerson',
      component: pressurePerson
    },
    {
      path: '/pressurePerson2',
      name: 'pressurePerson2',
      component: pressurePerson2
    },
    {
      path: '/personDetail',
      name: 'personDetail',
      component: personDetail
    }
  ]
})
