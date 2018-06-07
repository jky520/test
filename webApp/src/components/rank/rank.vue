<style scoped>
  .view{
    background-color: #f1f1f1;
    width: 100%;
    height: 100%;
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
  .content{
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex: 1
  }
  .bannerBox{
    height: 5rem;
    width: 10rem;
  }
  .bannerBox img{
    width: 100%;
    height: 100%;
  }
  .title2{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
    display: inline-block;
    height: 0.37rem;
  }
  .colorRed{
    color: red;
  }
  .para{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
  }
  .la{
    width: 1rem;
  }
  .lala{
    position: absolute;
    left: -0.5rem;
    top: 0.3rem;
    width: 0.15rem;
    height: 0.15rem;
    background-color: red;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }
  .listText{
    width: 8rem;
    line-height: 0.8rem;
    color: black;
    position: relative;
  }
  .btn-more{
    text-align: center;
    line-height: 1rem;
    color: #908e8e;
    font-weight: bold;
  }
  .newsBox{
    text-align: center;
  }
  .newsTime{
    color: #fff;
    text-align: center;
    padding: 0.1rem 0.5rem;
    background-color: #cccccc;
    margin: 0 auto;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
    display: inline-block;
  }
  .lxImg{
    width: 2rem;
    height: 1.8rem;
    display: inline-block;
    margin: 0.2rem 0 0.2rem 0.2rem;
  }
  .lxBox{
    background: #fff;
    margin:0 0.3rem;
  }
  .lxImg img{
    width: 100%;
    height: 100%;
  }
  .lxIntro{
    display: inline-block;
    height: 2.2rem;
    width: 6rem;
    vertical-align: top;
    margin: 0.2rem;
    text-align: left;
  }
  .lxText{
    margin-top: 0.2rem;
    line-height: 0.6rem;
    color: #555;
  }
  .lxBanner{
    width: 9.4rem;
    height: 5rem;
    margin: 0.3rem auto 0 auto;
  }
  .lxBanner img{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="view">
    <Header :title="'学校排名'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" :key="index" v-on:click="toURL(item.url)">
            <img :src="getImgUrl(slide.imageUrl)">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="para">
        <div class="la">
        </div>
        <div class="text">
          <div class="listText font-t2" v-for="(item,index) in rankList" v-show="index<num">
            <span class="lala"></span>
            <span class="colorRed">{{item.year}}</span>
            <span>年 {{item.name}}</span>
          </div>
          <div class="btn-more font-t2" v-show="showMore" v-tap="{methods:toShowMore}">查看更多&gt;&gt;</div>
        </div>
      </div>
      <div style="background: #fff;">
        <div class="title2 font-t2">相关资讯</div>
      </div>
      <div class="newsBox" v-for="item in relatedInfo">
        <div class="newsTime font-t3">{{item.name}}</div>
        <div class="lxBanner">
          <img :src="getImgUrl(item.img_url)">
        </div>
        <div class="lxBox" v-if="item.getStudyingAbroadRelatedInfo" v-tap="{methods:toLoad,id:lx.id}" v-for="lx in item.getStudyingAbroadRelatedInfo">
          <div class="lxIntro">
            <!--<div class="lxTitle font-t3">{{lx.source}}</div>-->
            <div class="lxText font-t2">{{lx.title}}</div>
          </div>
          <div class="lxImg">
            <img :src="getImgUrl(lx.themb)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          apeed:500
        },
        showMore:true,
        num:10,
        swiperSlides: [],
        rankList:[],
        relatedInfo:[],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.getSchool();
    },
    methods: {
      getSchool(){
        this.$http({
          method:'get',
          url:URL.base + 'universityrank/list',
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.swiperSlides = response.data.images;
            this.rankList = response.data.rankList;
            this.relatedInfo = response.data.relatedInfo;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      toLoad(params){
        this.$router.push({
          name:'rankLoad',
          query:{
            id:params.id
          }
        })
      },
      toShowMore(){
        this.showMore = false;
        this.num = 100;
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

