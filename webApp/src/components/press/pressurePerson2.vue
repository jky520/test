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
  .title{
    height: 1rem;
    line-height: 1rem;
    text-indent: 0.5rem;
    background: #e8e8e8;
    color: #4977b5;
    font-weight: bold;
  }
  .listBox2{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .context{
    -webkit-box-flex: 1;
    flex: 1;
  }
  .context p {
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 0.8rem;
    line-height: 0.8rem;
    width: 6rem;
  }
  .head{
    padding: 0.2rem 0.5rem;
    width:1.5rem;
    height: 1.5rem;
  }
  .head img{
    width: 100%;
    height: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .fw{
    line-height: 1rem;
    width: 1.5rem;
  }
  .listBox2{
    border-top: 0.2rem solid #e8e8e8;
  }
</style>
<template>
  <div class="view">
    <Header :title="'减压空间'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu}" :key="index">
            <img :src="getImgUrl(slide.imageUrl)" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="title font-t1">{{city.name}}</div>
      <div class="listBox2" v-for="item in people" v-tap="{methods:toDetail,id:item.id}">
        <div class="head">
          <img :src="getImgUrl(item.avatar)">
        </div>
        <div class="context">
          <p class="font-t2">{{item.name}}</p>
          <p class="font-t2">{{item.title}}</p>
          <p class="font-t2" v-html="item.brief"></p>
        </div>
        <div class="fw font-t4">访问:{{item.readCount}}</div>
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
        city:{},
        swiperSlides: [],
        people:[],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.getJianyaImg();
      this.jianyaCity();
      this.guanzhuList();
    },
    methods: {
      getJianyaImg(){
        this.$http({
          method:'get',
          url:URL.base + 'decompressMethod/getExerciseAll',
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.swiperSlides = response.data.getExerciseImg;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      jianyaCity(){
        this.$http({
          method:'get',
          url:URL.base + 'city/'+this.$route.query.cityId+'/loadChinaCity',
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.city = response.data;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      guanzhuList(){
        this.$http({
          method:'get',
          url:URL.base + 'dppf/getProfessorById',
          params:{
            categoryId:this.$route.query.categoryId,
            cityId:this.$route.query.cityId
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.people = response.data;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      toDetail(params){
        this.pageUrl('personDetail',{
          id:params.id
        });
        // this.$router.push({
        //   name:'personDetail',
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
