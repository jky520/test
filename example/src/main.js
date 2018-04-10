import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible';
import './styles/reset.css';
import './styles/variety.css';

import $ from 'jquery';
window.$ = $;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
