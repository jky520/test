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
  .listBox{
    width: 9rem;
    margin: 0 auto;
    padding: 0 0.5rem;
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
    padding: 0 0.2rem;
    height: 0.7rem;
    line-height: 0.7rem;
    margin: 0.1rem 0.1rem;
    text-align: center;
  }
  .newsBox{
    border-top: 0.05rem solid #eeeeee;
    border-bottom: 0.05rem solid #eeeeee;
    position: relative;
    color: #666666;
  }
  .newsCity{
    color: red;
  }
  .newsTitle{
    height: 0.8rem;
    text-indent: 0.5rem;
    line-height: 0.8rem;
  }
  .newsContent{
    text-indent: 0.5rem;
    min-height: 1.5rem;
  }
  .newsContext{
    text-indent: 0.5rem;
  }
  .newsTime{
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
    color: #999999;
  }
</style>
<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-tap="{methods:goBack}"></div>
      <div class="title font-h3">招聘信息</div>
    </div>
    <div class="content" ref="content">
      <div class="title2 font-t2">关注</div>
      <div class="newsBox" v-for="item in news">
        <div class="newsTitle font-t1">{{item.name}}</div>
        <div class="newsContent">
          <span class="newsCity font-t1">[{{item.jobCity.name}}]</span>
          <span class="newsContext font-t1">{{item.jobCompany[0].name}}</span>
          <div class="newsTime font-t2">{{new Date(item.date).format("yyyy-MM-dd")}}</div>
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
          apeed:500
        },
        swiperSlides: [1, 2],
        areaArr:[],
        news:[],
        cityId:0,
        categoryId:0
      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight -this.$refs.top.clientHeight + 'px';
      this.cityId = this.$store.state.jobCityId;
      this.categoryId = this.$store.state.jobCategoryId;
      this.getInfo();
    },
    methods: {
      getInfo(){
        this.$http({
          method: 'get',
          url: URL.jobCategory,
          params: {
            cityId:this.cityId,
            categoryId:this.categoryId
          },
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            // this.areaArr = response.data;
            // this.areaArr = response.data.Category;
            // this.news = response.data.attention;
          }
        }, (err) => {
          console.log(err);
        })
      },
      trainAdvert(){
        this.$http({
          method: 'get',
          url: URL.trainAdvert,
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.swiperSlides = response.data[0].advert;
          }
        }, (err) => {
          console.log(err);
        })
      },
      detailInfo(){
        this.$http({
          method: 'get',
          url: URL.skillDetailInfo,
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {

          }
        }, (err) => {
          console.log(err);
        })
      },
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

