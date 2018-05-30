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

  .context,.date{
    padding: 0 0.5rem;
  }
  .title2{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
    display: inline-block;
    height: 0.37rem;
  }
  .colorRed{
    color: red;
  }
  .title{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
    display: inline-block;
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
    background-color: red;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }
  .listText{
    width: 8rem;;
    line-height: 0.8rem;
    position: relative;
  }
  .majorIntro{
    height: 1rem;
    line-height: 1rem;
    text-indent: 0.5rem;
    color: #333;
    background: #ddd;
    position: relative;
  }
  .arrow{
    position: absolute;
    right: 0.2rem;
  }
  .toDown{
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
</style>
<template>
  <div class="view">
    <Header :title="'考试信息'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu}" :key="index">
            <img :src="getImgUrl(slide.imageUrl)">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="context" ref="context"></div>
      <div class="majorIntro font-h3" v-tap="{methods:toShow,name:'show1'}">考试时间 <span class="arrow" v-bind:class="{'toDown':show1}">&gt;</span></div>
      <div class="date" ref="date" v-show="show1"></div>
      <div class="majorIntro font-h3" v-tap="{methods:toShow,name:'show2'}">考试费用 <span class="arrow" v-bind:class="{'toDown':show1}">&gt;</span></div>
      <div class="date" ref="price" v-show="show2"></div>
      <div class="date" v-show="show2">
        <p class="colorRed font-t2">{{fee_tishi}}</p>
      </div>
      <div class="majorIntro font-h3" v-tap="{methods:toShow,name:'show3'}">考试内容 <span class="arrow" v-bind:class="{'toDown':show1}">&gt;</span></div>
      <div class="date" ref="tex" v-show="show3"></div>
      <div class="date" v-show="show3">
        <p class="colorRed font-t2">{{content_tishi}}</p>
      </div>
      <div class="majorIntro font-h3" v-tap="{methods:toShow,name:'show4'}">考试须知 <span class="arrow" v-bind:class="{'toDown':show1}">&gt;</span></div>
      <div class="date" ref="know" v-show="show4"></div>
      <div class="date" v-show="show4">
        <p class="colorRed font-t2">{{notice_tishi}}</p>
      </div>
      <div class="title font-t2">热点推荐</div>
      <div class="para">
        <div class="la">
        </div>
        <div class="text">
          <div class="listText font-t3" v-for="item in news"><span class="lala"></span>{{item.name}}</div>
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
            disableOnInteraction: true,
          },
          apeed:500
        },
        show1:false,
        show2:false,
        show3:false,
        show4:false,
        swiperSlides: [],
        fee_tishi:'',
        notice_tishi:'',
        content_tishi:'',
        news:[],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.examDetail();
    },
    methods: {
      examDetail(){
        this.$http({
          method:'get',
          url:URL.examDetail + this.$route.query.examId,
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
          timeout: 5000
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            let adverts = response.data[0].adverts;
            this.swiperSlides.push(adverts);
            let brief = response.data[0].brief;
            this.$refs.context.innerHTML = brief;
            let dates = response.data[0].dates;
            this.$refs.date.innerHTML = dates;
            let fee = response.data[0].fee;
            this.$refs.price.innerHTML = fee;
            this.fee_tishi = response.data[0].fee_tishi;
            let content = response.data[0].content;
            this.$refs.tex.innerHTML = content;
            let notice = response.data[0].notice;
            this.$refs.know.innerHTML = notice;
            this.notice_tishi = response.data[0].notice_tishi;
            this.content_tishi = response.data[0].content_tishi;
            this.news = response.data[0].adjunts;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      toShow(params){
        this[params.name] = !this[params.name];
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>
