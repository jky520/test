import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    studyloadid:0,
    trainLoadId:0,
    searchData:{},
    schoolId:0,
    hotId:0,
    itemPid:{},
    studyCityId:0
  },
  mutations: {
    setstudyloadid(state,id){
      state.studyloadid = id;
    },
    setTrainLoadId(state,id){
      state.trainLoadId = id;
    },
    setSearchData(state,obj){
      state.searchData = obj;
    },
    setSchoolId(state,id){
      state.schoolId = id;
    },
    setHotId(state,id){
      state.hotId = id;
    },
    setItemPid(state,obj){
      state.itemPid = obj;
    },
    setStudyCityId(state,id){
      state.studyCityId = id;
    }
  },
  getters: {

  },
  actions:{

  }
});

export default store;
