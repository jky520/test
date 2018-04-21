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
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content{
    overflow-y: scroll;
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
  .marjorType{
    padding: 0 0.5rem;
    list-style:none;
  }
  .marjorType li{
    border-left: 0.1rem solid #082b65;
    margin: 0.3rem 0;
    text-indent: 0.2rem;
  }
  .hotList{
    padding: 0.2rem 0.8rem;
    color: red;
  }
</style>
<template>
    <div class="view">
      <div ref="top" class="topBox">
        <div class="back" v-tap="{methods:goBack}"></div>
        <div class="title font-h3">找专业</div>
      </div>
      <div class="content" ref="content">
        <div class="bannerBox">
          <swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides" :key="slide">
              <img src="../styles/images/icon_banner.jpg" >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="title2 font-t2">专业类别选择</div>
        <ul class="marjorType font-t1">
          <li v-for="item in marjorArr">{{item}}</li>
        </ul>
        <div class="title2 font-t2">热点推荐</div>
        <div class="hot">
          <div class="hotList font-t2">这里是最热门的专业推荐!</div>
          <div class="hotList font-t2">这里是最热门的专业推荐!</div>
          <div class="hotList font-t2">这里是最热门的专业推荐!</div>
          <div class="hotList font-t2">这里是最热门的专业推荐!</div>
          <div class="hotList font-t2">这里是最热门的专业推荐!</div>
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
              marjorArr:['专科专业','本科专业','研究生专业','海外院校专业']
            }
        },
        mounted() {
          this.$refs.content.style.height = document.documentElement.clientHeight -this.$refs.top.clientHeight + 'px';
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

