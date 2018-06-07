<style scoped>
  .view{
    background-color: #E8E8E8;
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
  .title{
    background:#bbb;
    color: #fff;
    display: inline-block;
    padding:0.1rem 0.2rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .list{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    background: #fff;
    margin-bottom: 0.2rem;
    padding: 0.5rem;
  }
  .listText{
    width: 7rem;
  }
  .listImg{
    height: 1.6rem;
    width: 2rem;
  }
  .listImg img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .red{
    color: #8d2a2a;
    line-height: 0.7rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'技能培训'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu,url:slide.url}" :key="index">
            <img :src="getImgUrl(slide.imageUrl)" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="titleBox">
        <div class="title font-t1">{{city.name}}</div>
      </div>
      <div class="listBox">
        <div class="list" v-for="item in news" v-tap="{methods:toDetail3,id:item.id}">
          <div class="listText">
            <p class="red font-h3">{{item.title}}</p>
            <p class="font-t2">{{item.desctiption}}</p>
          </div>
          <div class="listImg">
            <img :src="getImgUrl(item.image)">
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
        swiperSlides: [1, 2],
        city:{},
        news:[],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.getInfo();
      this.trainAdvert();
      this.detailInfo();
    },
    methods: {
      getInfo(){
        this.$http({
          method: 'get',
          url: URL.base + 'city/'+this.$route.query.cityId+'/loadChinaCity',
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.city = response.data;
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
            token:this.userInfo.token
          }),
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
          url: URL.skillDetail2,
          params: {
            cityId:this.$route.query.cityId,
            categoryId:this.$route.query.categoryId
          },
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.news = response.data;
          }
        }, (err) => {
          console.log(err);
        })
      },
      toDetail3(params){
        this.$router.push({
          name:'skillDetail3',
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

