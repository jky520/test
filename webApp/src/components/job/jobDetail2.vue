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
    <Header :title="'招聘信息'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu,url:slide.url}" :key="index">
            <img :src="getImgUrl(slide.imageUrl)" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="title2 font-t2">{{$route.query.name}}</div>
      <div class="newsBox" v-for="item in news" v-tap="{methods:toCompany,id:item.companyId}">
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
        swiperSlides: [],
        news:[],
        cityId:0,
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.cityId = this.$route.query.cityId;
      this.getInfo();
      this.getImgs();
    },
    methods: {
      getImgs(){
        this.$http({
          method: 'get',
          url: URL.base + 'jobcity/list',
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.swiperSlides = response.data.image;
          }else{
            this.handleError(response)
          }
        }, (err) => {
          console.log(err);
        })
      },
      getInfo(){
        this.$http({
          method: 'get',
          url: URL.base + 'jobcity/category',
          params: {
            cityId: this.$route.query.cityId,
            categoryId:this.$route.query.categoryId
          },
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.news = response.data;
          }else{
            this.handleError(response)
          }
        }, (err) => {
          console.log(err);
        })
      },
      toCompany(params){
        this.pageUrl('jobCompany',{
          id:params.id
        });
        // this.$router.push({
        //   name:"jobCompany",
        //   query:{
        //     id:params.id
        //   }
        // })
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

