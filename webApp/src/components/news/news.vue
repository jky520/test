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

  .list span{
    display: inline-block;
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
  .lxText {
    margin-top: 0.2rem;
    line-height: 0.6rem;
    color: #555;
  }
  .newsBox{
    text-align: center;
  }
</style>

<template>
  <div class="view">
    <Header :title="'新闻'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu}" :key="index">
            <img src="../../styles/images/icon_banner.jpg" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="title2 font-t2">相关资讯</div>
      <div class="newsBox">
        <div class="lxBox" v-for="item in news" v-tap="{methods:toLoad,id:item.id}">
          <div class="lxIntro">
            <div class="lxText font-t2">{{item.title}}</div>
          </div>
          <div class="lxImg" v-tap="{methods:toBaidu}">
            <img :src="getImgUrl(item.themb)">
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
        swiperSlides: [1, 2, 3],
        news:[],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
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
            token:this.userInfo.token
          }),
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
      },
      toLoad(params){
        this.$router.push({
          name:'newsLoad',
          query: {
            id: params.id
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
