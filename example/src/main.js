import Vue from 'vue';
import App from './App';
import router from './router';
import 'amfe-flexible';
import './styles/reset.css';
import './styles/variety.css';
import store from './lib/store';
import './lib/polyfill';

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
