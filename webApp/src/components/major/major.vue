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
    background-color: rgb(73, 119, 181);
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }
  .listText{
    width: 8rem;
    line-height: 0.8rem;
    color: #082b65;
    position: relative;
  }
</style>
<template>
    <div class="view">
      <Header :title="'找专业'" :hasBack="true" ref="top"></Header>
      <div class="content" ref="content">
        <div class="bannerBox">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu,url:slide.url}" :key="index">
              <img :src="getImgUrl(slide.imageUrl)" >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="title2 font-t2">专业类别选择</div>
        <div class="para">
          <div class="la">
          </div>
          <div class="text">
            <div class="listText font-t1" v-for="item in marjorArr" v-tap="{methods:toDetail,id:item.id}">
              <span class="lala"></span>{{item.name}}</div>
          </div>
        </div>
        <div class="title2 font-t2">热点推荐</div>
        <div class="hot">
          <div class="hotList font-t2" v-for="item in hot" v-tap="{methods:toHotPage,id:item.idx}">{{item.title}}</div>
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
              marjorArr:[{
                "name":"专科专业",
                "id":"0"
              },{
                "name":"本科专业",
                "id":"1"
              },{
                "name":"研究生专业",
                "id":"2"
              },{
                "name":"海外院校专业",
                "id":"3"
              }],
              hot:[],
              userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
            }
        },
        mounted() {
          this.getMajor();
        },
        methods: {
          getMajor() {
            this.$http({
              method: 'get',
              url: URL.findMajoy,
              params: {},
              responseType: 'json',
              headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
                token:this.userInfo.token
              }),
            }).then((res) => {
              let response = res.data;
              if (response.meta.code == "200") {
                this.swiperSlides = response.data.picture;
                this.hot = response.data.hot;
              }else{
                this.handleError(response)
              }
            }, (err) => {
              console.log(err);
            })
          },
          toHotPage(params){
            this.$router.push({
              name:'hotR',
              query:{
                hotId:params.id
              }
            });
          },
          toDetail(params){
            this.$router.push({
              name:'majorSearch',
              query:{
                majorId:params.id
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

