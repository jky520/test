import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    cityName:'贵阳市'
  },
  mutations: {
    setCityName(state,name){
      state.cityName = name;
    }
  },
  getters: {

  },
  actions:{

  }
});

export default store;
