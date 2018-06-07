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
    -webkit-box-flex: 1;
    flex: 1;
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
</style>
<template>
  <div class="view">
    <Header :title="'留学'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu,url:slide.url}" :key="index">
            <img :src="getImgUrl(slide.imageUrl)" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="title2 font-t2">{{cityName}}</div>
      <div class="lxBox" v-for="item in studyNewInfo" v-tap="{methods:toInfo,id:item.id}">
        <div class="lxIntro">
          <!--<div class="lxTitle font-h3">{{item.title}}</div>-->
          <div class="lxText font-t2">{{item.brief}}</div>
        </div>
        <div class="lxImg">
          <img :src="getImgUrl(item.themb)">
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
        swiperSlides: [1, 2],
        studyCityId:0,
        studyNewInfo:[],
        cityName:'',
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.studyCityId = this.$route.query.studyCityId;
      this.getCityInfo();
    },
    methods: {
      getCityInfo(){
        this.$http({
          method: 'get',
          url: URL.studyCityDetail + this.studyCityId+"/getStudyMessage",
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            let advert = response.data.getAdvertImage[0].advert;
            this.swiperSlides = advert;
            this.studyNewInfo = response.data.getStudyMessage;
            this.cityName = response.data.getStudyMessage[0].city.name;
          }else{
            this.handleError(response)
          }
        }, (err) => {
          console.log(err);
        })
      },
      toInfo(params){
        this.$router.push({
          name:"overseasInfo",
          query:{
            id:params.id
          }
        })
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

