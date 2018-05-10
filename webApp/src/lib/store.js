import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userInfo:{},
    studyloadid:0,
    trainLoadId:0,
    searchData:{},
    schoolId:0,
    hotId:0,
    itemPid:{},
    studyCityId:0,
    departmentId:{},
    overseasLoadId:0,
    diplomasId:0,
    loadId:0,
    skillCityId:0,
    jobLoadId:0,
    jobCityId:0,
    jobCategoryId:0
  },
  mutations: {
    setUserInfo(state,userInfo){
      state.userInfo = userInfo;
    },
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
    },
    setDepartmentId(state,obj){
      state.departmentId = obj;
    },
    setOversearLoadId(state,id){
      state.overseasLoadId = id;
    },
    setDiplomasId(state,diplomasId){
      state.diplomasId = diplomasId;
    },
    setSkillLoadId(state,id){
      state.loadId = id;
    },
    setSkillCityId(state,id){
      state.skillCityId = id;
    },
    setJobLoadId(state,id){
      state.jobLoadId = id;
    },
    setJobCityId(state,id){
      state.jobCityId = id;
    },
    setJobCategoryId(state,id){
      state.jobCategoryId = id;
    }
  },
  getters: {

  },
  actions:{

  }
});

export default store;
