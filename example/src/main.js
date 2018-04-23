import Vue from 'vue';
import App from './App';
import router from './router';
import 'amfe-flexible';
import './styles/reset.css';
import './styles/variety.css';
import './styles/mint.css';
import store from './lib/store';
import './lib/polyfill';
import vueTap from 'v-tap';
Vue.use(vueTap);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import { Field } from 'mint-ui';
Vue.component(Field.name, Field);
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);

import $ from 'jquery';
window.$ = $;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
