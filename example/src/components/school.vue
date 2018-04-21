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
  .listBox{
    width: 10rem;
    margin: 0 auto;
  }
  .list{
    width: 1.6rem;
    height: 1.6rem;
    border-radius:100%;
    background-color: #f4f4f4;
    float: left;
    margin: 0.2rem 0.2rem;
    text-align: center;
    line-height: 1.6rem;
    color: #b13c3c;
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
  .list2{
    background: #f4f4f4;
    float: left;
    width: 2.1rem;
    height: 1.2rem;
    margin: 0.1rem 0.2rem;
    line-height: 1.2rem;
    text-align: center;
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
      <div ref="top" class="topBox">
        <div class="back" v-on:click="goBack"></div>
        <div class="title font-h3">找学校</div>
      </div>
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="slide in swiperSlides" :key="slide">
            <img src="../styles/images/icon_banner.jpg" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="title2 font-t2">国内院校</div>
      <div class="listBox">
        <div class="list font-t4" v-for="item in schoolType">{{item}}</div>
      </div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="item in majorType">{{item}}</div>
      </div>
      <div class="title2 font-t2">海外院校</div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="item in majorType">{{item}}</div>
        <div class="list2 font-t3">查看更多></div>
      </div>
      <div class="title2 font-t2">留学</div>
      <div class="lx">
        <div class="lxBox">
          <div class="lxImg">
            <img src="../styles/images/icon_banner.jpg">
          </div>
          <div class="lxIntro">
            <div class="lxTitle font-h3">美国留学</div>
            <div class="lxText font-t2">我要去美国留学我要去美国留学我要去美国留学</div>
          </div>
        </div>
        <div class="lxBox">
          <div class="lxImg">
            <img src="../styles/images/icon_banner.jpg">
          </div>
          <div class="lxIntro">
            <div class="lxTitle font-h3">美国留学</div>
            <div class="lxText font-t2">我要去美国留学我要去美国留学我要去美国留学</div>
          </div>
        </div>
        <div class="lxBox">
          <div class="lxImg">
            <img src="../styles/images/icon_banner.jpg">
          </div>
          <div class="lxIntro">
            <div class="lxTitle font-h3">美国留学</div>
            <div class="lxText font-t2">我要去美国留学我要去美国留学我要去美国留学</div>
          </div>
        </div>
        <div class="lxBox">
          <div class="lxImg">
            <img src="../styles/images/icon_banner.jpg">
          </div>
          <div class="lxIntro">
            <div class="lxTitle font-h3">美国留学</div>
            <div class="lxText font-t2">我要去美国留学我要去美国留学我要去美国留学</div>
          </div>
        </div>
      </div>
      <div class="title2 font-t2">培训</div>
      <div class="px">
        <div class="lxBanner">
          <img src="../styles/images/icon_banner.jpg">
        </div>
        <div class="lxBox">
          <div class="lxImg">
            <img src="../styles/images/icon_banner.jpg">
          </div>
          <div class="lxIntro">
            <div class="lxTitle font-h3">美国留学</div>
            <div class="lxText font-t2">我要去美国留学我要去美国留学我要去美国留学</div>
          </div>
        </div><div class="lxBox">
        <div class="lxImg">
          <img src="../styles/images/icon_banner.jpg">
        </div>
        <div class="lxIntro">
          <div class="lxTitle font-h3">美国留学</div>
          <div class="lxText font-t2">我要去美国留学我要去美国留学我要去美国留学</div>
        </div>
      </div><div class="lxBox">
        <div class="lxImg">
          <img src="../styles/images/icon_banner.jpg">
        </div>
        <div class="lxIntro">
          <div class="lxTitle font-h3">美国留学</div>
          <div class="lxText font-t2">我要去美国留学我要去美国留学我要去美国留学</div>
        </div>
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
                apeed:500,
                loop:true
              },
              swiperSlides: [1, 2, 3],
              schoolType:['本科院校','高职专科','成人院校','独立院校','民办院校','研究生院','港澳台院校','海外院校','国内商学院','海外商学院','国际学校','国内高中'],
              majorType:['综合','理工','财经','农林','政法','医药','民族','师范','体育','语言','艺术','军事'],
              outSchool:['海外大学','医学院','商学院II','艺术设计','工程学院','农学院','法学院','教育学院','研究生II','法学院','海外高中'],

            }
        },
        mounted() {

        },
        methods: {
          goBack(){
            history.back();
          }
        },
      components:{
          swiper,
          swiperSlide
      }
    }
</script>

