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
  .lxImg img{
    width: 100%;
    height: 100%;
  }
  .lxBanner img{
    width: 100%;
    height: 100%;
  }
  .logo-box {
    background: #fff;
    min-height: 4rem;
    padding: 0.2rem;
  }
  .kjjg {
    width: 100%;
    min-height: 4rem;
  }
  .logo {
    padding: 0.2rem 0.5rem;
    height: 1.5rem ;
    width: 1.5rem;
  }
  .logo-box img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  .name {
    padding-left: 0.5rem;
  }
  .logo-box  .en {
    display: block;
    color: #444444;
    word-break: break-all;
    line-height: 0.5rem;
    font-size: 0.35rem;
  }
  .logo-box .zh {
    line-height: 30px;
    color: #444444;
    font-size: 1.3em;
  }
  .schoolInfo{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    background-color: #f9f9f9;
    padding: 0.5rem 0;
  }
  .leftInfo{
    /*width: 3rem;*/
  }
  .rightInfo{
    width: 7rem;
  }
  .oneLine{
    font-size: 0.3rem;
    text-indent: 0.5rem;
    line-height: 0.6rem;
    height: 0.6rem;
    color: #000;
  }
  .gps{
    width: 0.4rem;
    height: 0.4rem;
    background-image: url(../styles/images/icon_gps.png);
    background-repeat: no-repeat;
    -webkit-background-size: auto 0.4rem;
    background-size: auto 0.4rem;
    display: inline-block;
  }
  .abstract p{
    width: 9.5rem;
    margin: 0 auto;
    line-height: 0.5rem;
    font-size: 0.3rem;
    height: 2rem;
    overflow: hidden;
  }
  .disMore{
    height: auto !important;
  }
  .showMore{
    height: 0.8rem;
    text-align:center;
    background-image: url(../styles/images/icon_down.gif);
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: auto 100%;
    background-size: auto 100%;
  }
  .toUp{
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .listBox{
    width: 10rem;
    margin: 0 auto;
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
    width: 8rem;
    line-height: 0.8rem;
    position: relative;
  }
</style>
<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-tap="{methods:goBack}"></div>
      <div class="title font-h3">学校详情</div>
    </div>
    <div class="content" ref="content">
      <div class="logo-box">
        <div class="kjjg">
          <div class="logo">
            <img :src="getImgUrl(schoolInfo.logo)">
          </div>
          <div class="name">
            <span class="en">{{schoolInfo.english}}</span>
            <span class="zh">{{schoolInfo.name}}</span>
          </div>
        </div>
      </div>
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in image" :key="index">
            <img :src="getImgUrl(slide.image)" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="schoolInfo">
        <div class="leftInfo">
            <div class="oneLine">所属地区:</div>
            <div  class="oneLine">成立时间:</div>
            <div  class="oneLine">学校性质:</div>
            <div  class="oneLine">学校类型:</div>
            <div  class="oneLine">学历层次:</div>
            <div  class="oneLine">教育认证:</div>
            <div  class="oneLine">参考费用:</div>
            <div  class="oneLine">气候特征:</div>
        </div>
        <div class="rightInfo">
            <div  class="oneLine" v-tap="{methods:toOtherPage,pageName:'schoolAdress'}">{{schoolInfo.outsideAddr}} <span class="gps"></span></div>
            <div  class="oneLine">{{schoolInfo.formedDate}}</div>
            <div  class="oneLine">{{nature}}</div>
            <div  class="oneLine">{{schoolInfo.custom_category}}</div>
            <div  class="oneLine">{{degreeText}}</div>
            <div  class="oneLine">{{schoolInfo.belong}}</div>
            <div  class="oneLine"></div>
            <div  class="oneLine"></div>
        </div>
      </div>
      <div class="title2 font-t2">学校简介</div>
      <div class="abstract">
        <p ref="abstract" v-bind:class="{'disMore':showMore}"></p>
        <div class="showMore" v-bind:class="{'toUp':showMore}" v-tap="{methods:tabCheck}"></div>
      </div>
      <div class="title2 font-t2">学校院系</div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="item in faculty" v-tap="{methods:toDepartment,id:item.id,schoolId:item.schoolId}">{{item.name}}</div>
      </div>
      <div class="title2 font-t2">专业设置</div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="item in major" v-tap="{methods:toMajorDetail,diplomasId:item.id}">{{item.name}}</div>
      </div>
      <div class="title2 font-t2">招生信息</div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="item in zsxx">{{item}}</div>
      </div>
      <div class="title2 font-t2">联系方式</div>
      <div class="schoolInfo">
        <div class="leftInfo">
          <div class="oneLine twoLine">地址:</div>
          <div  class="oneLine twoLine">电话:</div>
          <div  class="oneLine twoLine">官网:</div>
        </div>
        <div class="rightInfo">
          <div  class="oneLine twoLine" v-tap="{methods:toOtherPage,pageName:'schoolAdress'}">北京市XX区XX路 <span class="gps"></span></div>
          <div  class="oneLine twoLine">13312345678</div>
          <div  class="oneLine twoLine">localhost:8080</div>
        </div>
      </div>
      <div class="title2 font-t2">最新排名</div>
      <div class="para">
        <div class="la">
        </div>
        <div class="text">
          <div class="listText font-t3"><span class="lala"></span>2018院校排名第一</div>
          <div class="listText font-t3"><span class="lala"></span>2018院校排名第一</div>
          <div class="listText font-t3"><span class="lala"></span>2018院校排名第一</div>
          <div class="listText font-t3"><span class="lala"></span>2018院校排名第一</div>
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
        image: [],
        showMore:false,
        zsxx:['本科','硕士','博士','专科','MBA','预科','语言中心','证书','EMBA'],
        schoolId:0,
        schoolInfo:{},
        degree:[],
        degreeText:'',
        nature:'',
        faculty:[],
        major:[]
      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight -this.$refs.top.clientHeight + 'px';
      this.schoolId = this.$store.state.schoolId;
      this.getSchoolDetail();
      this.getNature()
    },
    methods: {
      tabCheck(){
        this.showMore = !this.showMore;
      },
      toOtherPage(params){
        this.$router.push({
          name:params.pageName
        });
      },
      getSchoolDetail(){
        this.$http({
          method:'get',
          url:URL.schoolDetail+this.schoolId+"/schoolInformation",
          params:{},
          responseType:'stream',
          timeout: 5000
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.schoolInfo = response.data.degree[0].school;
            this.$refs.abstract.innerHTML = this.schoolInfo.brief;
            this.degree = response.data.degree;
            this.faculty = response.data.faculty;
            this.major = response.data.major;
            this.image = response.data.image;
            let str = '';
            for(let i = 0;i<5;i++){
              if(i == 4){
                str += this.degree[i].degree[0].name;
              }else{
                str += this.degree[i].degree[0].name + '、';
              }
            }
            this.degreeText = str;
          }
        },(err)=>{
          console.log(err);
        })
      },
      getNature(){
        this.$http({
          method:'get',
          url:URL.nature+this.schoolId+"/nature",
          params:{},
          responseType:'stream',
          timeout: 5000
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            let str = '';
            let arr = response.data;
            for(let i = 0;i<arr.length;i++){
              if(i == arr.length -1){
                str+=arr[i].name;
              }else{
                str+=arr[i].name + '、';
              }
            }
            this.nature = str;
          }
        },(err)=>{
          console.log(err);
        })
      },
      toDepartment(params){
        this.$store.commit("setDepartmentId",{"id":params.id,"schoolId":params.schoolId});
        this.$router.push({
          name:'schoolDepartment'
        })
      },
      toMajorDetail(params){
        this.$store.commit("setDiplomasId",params.diplomasId);
        this.$router.push({
          name:'majorDetail'
        });
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>
