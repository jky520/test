<style scoped="scoped">
  .view{
    background-color: #fff;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content{
    overflow-y: scroll;
  }
  .bannerBox{
    height: 5rem;
    width: 10rem;
  }
  .bannerBox img{
    width: 100%;
    height: 100%;
  }
  .footer{
    height: 1.3rem;
    background-color: black;
    color: #fff;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .list span{
    display: inline-block;
  }
  .menuBox{
    width:25%;
    text-align: center;
  }
  .menuIcon{
    background-image: url(../styles/images/icon_home_red.png);
    background-repeat:no-repeat;
    background-position: center center;
    -webkit-background-size:.46rem;
    background-size:.46rem;
    height:0.84rem;
  }
  .news_w{
    background-image: url(../styles/images/icon_news_w.png);
  }
  .school_w{
    background-image: url(../styles/images/icon_school_w.png);
  }
  .mine_w{
    background-image: url(../styles/images/icon_mine_w.png);
  }
  .topBox{
    height: 1.46rem;
    background-color: black;
    position: relative;
  }
  .title{
    color: #fff;
    height: 1.46rem;
    line-height: 1.46rem;
    text-align: center;
  }
  .title2{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
    display: inline-block;
    height: 0.37rem;
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
    width: 2.2rem;
    height: 2.2rem;
    display: inline-block;
    margin: 0.2rem 0 0.2rem 0.2rem;
  }
  .lxImg img{
    width: 100%;
    height: 100%;
  }
  .lxIntro{
    display: inline-block;
    height: 2.5rem;
    width: 6.7rem;
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
  .newsBox{
    text-align: center;
  }
</style>

<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="title font-h3">新闻</div>
    </div>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu}" :key="index">
            <img src="../styles/images/icon_banner.jpg" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="title2 font-t2">相关资讯</div>
      <div class="newsBox">
        <!--<div class="newsTime font-t3">2018年1月1日</div>-->
        <!--<div class="lxBanner">-->
          <!--<img src="../styles/images/icon_banner.jpg">-->
        <!--</div>-->
        <div class="lxBox" v-for="item in news">
          <div class="lxImg" v-tap="{methods:toBaidu}">
            <img :src="getImgUrl(item.themb)">
          </div>
          <div class="lxIntro">
            <div class="lxTitle font-h3">{{item.from}}</div>
            <div class="lxText font-t2">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" ref="foot">
      <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'index'}">
        <div class="menuIcon"></div>
        <div class="menuTitle font-t3">首页</div>
      </div>
      <div class="menuBox">
        <div class="menuIcon news_w"></div>
        <div class="menuTitle font-t3">新闻</div>
      </div>
      <!--<div class="menuBox">-->
        <!--<div class="menuIcon school_w"></div>-->
        <!--<div class="menuTitle font-t3">智能择校</div>-->
      <!--</div>-->
      <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'mine'}">
        <div class="menuIcon mine_w"></div>
        <div class="menuTitle font-t3">我的</div>
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
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          apeed:500
        },
        swiperSlides: [1, 2, 3],
        news:[]
      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight - this.$refs.foot.clientHeight -this.$refs.top.clientHeight + 'px';
      this.getNews();
    },
    methods: {
      toOtherPage(params){
        this.$router.push({
          name:params.pageName
        });
      },
      getNews(){
        this.$http({
          method: 'get',
          url: URL.news,
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res) => {
          let response = res.data;
          if(response.meta.code == "200"){
              this.news = response.data;
          }else{
              this.handleError(response);
          }
        }, (err) => {
          console.log(err);
        })
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>
