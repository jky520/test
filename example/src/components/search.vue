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
</style>
<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-tap="{methods:goBack}"></div>
      <div class="title font-h3">找学校</div>
    </div>
    <div class="searchBox">
      <mt-search v-model="sVal"></mt-search>
    </div>
    <div class="listBox">
      <div class="list2 font-t3" v-bind:class="{'on':majorType[index].checked === true}" v-for="(item,index) in majorType" v-tap="{methods:edition,index:index,arrName:'majorType'}">{{item.name}}</div>
    </div>
    <div class="listBox">
      <div class="list2 font-t3" v-for="item in majorType">{{item.name}}</div>
    </div>
    <div class="searchResult">
      <div class="result">
        <span class="font-t2">0001</span>
        <span class="font-h3">贵州大学</span>
      </div>
      <div class="result">
        <span class="font-t2">0001</span>
        <span class="font-h3">贵州大学</span>
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
        majorType:[{
          name:'赛选条件1',
          checked:true
        },{
          name:'赛选条件2',
          checked:false
        },{
          name:'赛选条件3',
          checked:false
        }],

      }
    },
    mounted() {

    },
    methods: {
      goBack(){
        history.back();
      },
      edition(params){
        let i = params.index;
        let arrName = params.arrName;
        this[arrName].map((value,index,arr)=>{
          arr[index].checked = false;
        });
        this[arrName][i].checked = true;
      }
    }
  }
</script>
