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
    width: 2.2rem;
    height: 1.8rem;
    display: inline-block;
    margin: 0.2rem 0 0.2rem 0.2rem;
  }
  .lxImg img{
    width: 100%;
    height: 100%;
  }
  .lxIntro{
    display: inline-block;
    height: 2.2rem;
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
      <div class="title2 font-t2">培训分类</div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="item in areaArr" v-tap="{methods:toDetail,id:item.id}">{{item.name}}</div>
      </div>
      <div class="title2 font-t2">关注</div>
      <div class="newsBox">
        <div class="lxBox" v-for="item in news" v-tap="{methods:toLoad,id:item.id}">
          <div class="lxIntro">
            <!--<div class="lxTitle font-t2">{{item.title}}</div>-->
            <div class="lxText font-t2">{{item.desctiption}}</div>
          </div>
          <div class="lxImg">
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
        areaArr:[],
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
          url: URL.traincategory,
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.areaArr = response.data;
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
          url: URL.skillDetailInfo,
          params: {},
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
      toDetail(params){
        this.pageUrl('skillDetail2',{
          cityId:this.$route.query.skillCityId,
          categoryId:params.id
        });
        // this.$router.push({
        //   name:'skillDetail2',
        //   query:{
        //     cityId:this.$route.query.skillCityId,
        //     categoryId:params.id
        //   }
        // })
      },
      toLoad(params){
        this.pageUrl('skillInfo',{
          id:params.id
        });
        // this.$router.push({
        //   name:'skillInfo',
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

