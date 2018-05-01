<style scoped>
  .view{
    background-color: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
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
  .contentBox{
    overflow-y: scroll;
  }
  .itemList{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    height: 0.8rem;
    line-height: 0.8rem;
    padding:0 0.5rem;
    margin: 0 auto;
    background-color: #fff;
  }
  .contentBox:nth-child(2){
    background-color: #f4f4f4;
  }
  .itemText{
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 7.5rem;
  }
  .downLoad{
    color: red;
  }
</style>
<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-tap="{methods:goBack}"></div>
      <div class="title font-h3">试题列表</div>
    </div>
    <div class="contentBox" ref="content">
      <div class="itemList" v-for="item in itemList">
        <div class="itemText font-t2">{{item.title}}</div>
        <div class="downLoad font-t2" v-tap="{methods:downLoadItem,url:item.path}">下载</div>
      </div>
    </div>
  </div>
</template>

<script>
  import URL from '../lib/api';
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    data() {
      return {
        pId:{},
        itemList:[]
      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight -this.$refs.top.clientHeight + 'px';
      this.pId = this.$store.state.itemPid;
      this.getItemList();
    },
    methods: {
      getItemList(){
        this.$http({
          method:'get',
          url:URL.itemList,
          params:{
            pId1:this.pId.pId1,
            pId2:this.pId.pId2,
          },
          responseType:'stream',
          timeout: 5000
        }).then((res)=>{
          console.log(res);
          let response = res.data;
          if(response.meta.code == "200"){
            this.itemList = response.data;
          }
        },(err)=>{
          console.log(err);
        })
      },
      downLoadItem(params){
        location.href=params.url;
      }
    }
  }
</script>

