<style scoped>
  .view{
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content{
    overflow-y: scroll;
  }
  .list2{
    background: #f4f4f4;
    float: left;
    padding: 0.15rem 0.3rem;
    margin: 0.1rem 0.2rem;
    text-align: center;
  }
  .list2.on{
    background-color: #26a2ff;
    color: #fff;
  }
  .listBox{
    width: 10rem;
    margin: 0 auto;
  }
  .listBox:after{
    content: ' ';
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    display: block;
    clear: both;
  }
  .topBox{
    height: 1.46rem;
    background-color: black;
    position: relative;
  }
  .back{
    width: 2rem;
    height: 1.46rem;
    background-image: url("../styles/images/icon_back.png");
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: 0.4rem center;
    -webkit-background-size: 0.26rem 0.4rem;
    background-size: 0.26rem 0.4rem;
  }
  .title{
    color: #fff;
    height: 1.46rem;
    line-height: 1.46rem;
    text-align: center;
  }
  .searchBox{
    height: 1.5rem;
  }
  .result{
    color: #333333;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    height: 1rem;
    border-bottom: 0.05rem solid #eeeeee;
    line-height: 1rem;
    width: 9rem;
    margin-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .schoolName{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
<template>
  <div class="view">
    <Header :title="'学校搜索'" :hasBack="true" ref="top"></Header>
    <div class="searchBox" ref="searchBox">
      <mt-search v-model="sVal"></mt-search>
    </div>
    <div class="content" ref="content">
      <div class="listBox">
        <div class="list2 font-t3" v-bind:class="{'on':majorType[index].checked === true}" v-for="(item,index) in majorType" v-tap="{methods:edition,index:index,arrName:'majorType'}">{{item.name}}</div>
      </div>
      <!--<div class="listBox">-->
      <!--<div class="list2 font-t3" v-for="item in majorType">{{item.name}}</div>-->
      <!--</div>-->
      <div class="searchResult">
        <div class="result" v-for="item in searchResult" v-tap="{methods:schoolDetail,id:item.id,name:item.name}">
          <span class="font-t2">{{item.id}}</span>
          <span class="schoolName font-t1">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import URL from '../lib/api';
  export default {
    data() {
      return {
        sVal:'',
        majorType:[],
        searchData:{},
        results:[]
      }
    },
    mounted() {
      this.searchData = this.$store.state.searchData;
      this.getSchoolList();
      this.getCityList();
      this.$refs.content.style.height = document.documentElement.clientHeight - this.$refs.top.$el.clientHeight - this.$refs.searchBox.clientHeight + 'px';
    },
    methods: {
      edition(params){
        let i = params.index;
        let arrName = params.arrName;
        this[arrName].map((value,index,arr)=>{
          arr[index].checked = false;
        });
        this[arrName][i].checked = true;
        this.getSchoolList2(this[arrName][i].id);
      },
      getSchoolList(){
        this.$http({
          method:'get',
          url:URL.schoolList,
          params:{
            category:this.searchData.category,
            Id:this.searchData.id,
          },
          responseType:'stream',
          timeout: 5000
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.results = response.data;
          }
        },(err)=>{
          console.log(err);
        })
      },
      getCityList(){
        this.$http({
          method:'get',
          url:URL.cityList,
          params:{
            category:this.searchData.category,
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            let citys = response.data;
            citys.checked = false;
            this.majorType = citys;
          }
        },(err)=>{
          console.log(err);
        })
      },
      getSchoolList2(cityId){
        this.$http({
          method:'get',
          url:URL.schoolList2,
          params:{
            category:this.searchData.category,
            Id:this.searchData.id,
            cityId:cityId
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.results = response.data;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      schoolDetail(params){
        this.$store.commit("setSchoolId",params.id);
        this.$store.commit("setSearchName",params.name);
        this.$router.push({
          name:'schoolDetail'
        })
      }
    },
    computed:{
      searchResult(){
        return this.results.filter((item)=>{
          return item.name.indexOf(this.sVal)>-1;
        })
      }
    }
  }
</script>
