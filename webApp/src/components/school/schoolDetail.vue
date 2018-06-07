<style scoped>
  .view{
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
    background: #DEDEDE;
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
  .lxImg img{
    width: 100%;
    height: 100%;
  }
  .lxBanner img{
    width: 100%;
    height: 100%;
  }
  .logo-box {
    background: #9d9d9d;
    min-height: 3.3rem;
    padding: 0.2rem;
    position: relative;
  }
  .kjjg {
    width: 100%;
    min-height: 3.3rem;
  }
  .logo {
    padding: 0.2rem 0.8rem;
    height: 1.2rem ;
    width: 1.2rem;
  }
  .logo-box img {
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
  }
  .logo-box .zh {
    line-height: 30px;
    color: #fff;
  }
  .schoolInfo{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    background-color: #eceaea;
    padding: 0.5rem 0;
  }
  .leftInfo{
    /*width: 3rem;*/
  }
  .rightInfo{
    width: 7rem;
  }
  .rightInfo .oneLine{
    text-indent: 0.1rem
  }
  .oneLine{
    font-size: 0.3rem;
    text-indent: 0.5rem;
    line-height: 0.8rem;
    color: #000;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .gps{
    width: 0.4rem;
    height: 0.4rem;
    background-image: url(../../styles/images/icon_gps.png);
    background-repeat: no-repeat;
    -webkit-background-size: auto 0.4rem;
    background-size: auto 0.4rem;
    display: inline-block;
  }
  .abstract{
    background: #9a2422;
    padding: 0.2rem;
    margin: 0.6rem 0.2rem;
  }
  .abstract p{
    margin: 0 auto;
    line-height: 0.6rem;
    font-size: 0.4rem;
    height: 2.4rem;
    overflow: hidden;
    color: #fff;
    text-indent: 2em !important;
  }
  .disMore{
    height: auto !important;
  }
  .showMore{
    height: 0.8rem;
    line-height: 0.8rem;
    text-align:right;
    padding-right: 0.5rem;
    color: #fff;
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
    position: relative;
    padding-bottom: 0.3rem;
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
    padding: 0 0.4rem;
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
  .classLogo{
    position: absolute;
    right: 0.5rem;
    top: 0.6rem;
    width: 1.5rem;
    height: 1.2rem;
  }
  .colorRed{
    color: red !important;
  }
  .colorRed2{
    color: #75282C !important;
  }
  .guanzhu{
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
    color: #fff;
  }
  .title3{
    text-indent: 0.5rem;
  }
  .rank{
    color: red;
  }
  .showMore2{
    position: absolute;
    right: 0.5rem;
    top: -0.6rem;
    color: #8d2a2a;
  }
  a{
    text-decoration: none;
  }
</style>
<template>
  <div class="view">
    <Header :title="'学校详情'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="logo-box">
        <div class="kjjg">
          <div class="logo">
            <img :src="getImgUrl(school.logo)">
          </div>
          <div class="classLogo" v-tap="{methods:toClassVideo}">
            <img src="../../styles/images/icon_class.png">
          </div>
          <div class="name">
            <span class="en colorRed2 font-t3">{{school.english}}</span>
            <span class="zh font-h3">{{school.name}}</span>
          </div>
          <div class="guanzhu font-t3">{{school.attentioncount}}人关注</div>
        </div>
      </div>
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in image" :key="index">
            <img :src="getImgUrl(slide.image)">
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
          <div  class="oneLine" v-tap="{methods:toOtherPage,pageName:'schoolAdress'}">{{school.outsideaddr}} <span class="gps"></span></div>
          <div  class="oneLine">{{school.formeddate}}</div>
          <div  class="oneLine colorRed">{{nature}}</div>
          <div  class="oneLine">{{school.custom_category}}</div>
          <div  class="oneLine">{{degreeText}}</div>
          <div  class="oneLine colorRed">{{school.belong}}</div>
          <div  class="oneLine">{{school.referencefee}}</div>
          <div  class="oneLine">{{school.air}}</div>
        </div>
      </div>
      <!--<div class="title2 font-t2">学校简介</div>-->
      <div class="abstract">
        <p v-html="school.brief_jj"></p>
        <div class="showMore font-t2" v-tap="{methods:toIntro}"><span style="color: red;font-size: 0.3rem;">▼</span>展开</div>
      </div>
      <div style="background: #fff">
        <div class="title2 font-t2">院系设置</div>
        <div class="listBox">
          <div class="showMore2 font-t3" v-tap="{methods:toShowAll}">查看全部>></div>
          <div class="list2 font-t3" v-for="(item,index) in faculty" v-if="index<4" v-tap="{methods:toDepartment,id:item.id,schoolId:item.schoolId}">{{item.name}}</div>
        </div>
      <div class="title2 font-t2">专业设置</div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="item in major" v-tap="{methods:toMajorDetail,diplomasId:item.id}">{{item.name}}</div>
      </div>
      <div class="title2 font-t2">招生信息</div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="item in zsxx" v-tap="{methods:toRecult,diplomasId:item.id,name:item.name}">{{item.name}}</div>
      </div>
      <div class="title2 font-t2">联系方式</div>
      <div class="schoolInfo" style="background: #fff;">
        <div class="leftInfo">
          <div class="oneLine twoLine">地址:</div>
          <div  class="oneLine twoLine">电话:</div>
          <div  class="oneLine twoLine">官网:</div>
        </div>
        <div class="rightInfo">
          <div  class="oneLine twoLine" v-tap="{methods:toOtherPage,pageName:'schoolAdress'}">{{school.address}}<span class="gps"></span></div>
          <div  class="oneLine twoLine"><a :href="'tel:'+school.tel">{{school.tel}}</a></div>
          <div  class="oneLine twoLine"><a class="colorRed" :href="school.url">{{school.url}}</a></div>
        </div>
      </div>
      <div class="title2 font-t2">最新排名</div>
      <div class="title3 font-t2">院校</div>
      <div class="para" v-if="school.ranking">
        <div class="la">
        </div>
        <div class="text">
          <div class="listText font-t3" v-for="(item,index) in school.ranking.schoolRanking"><span class="lala"></span><i class="rank">{{item.year}} </i>{{item.title}} - 第<i class="rank"> {{item.number}} </i>名</div>
        </div>
      </div>
      <div class="title3 font-t2">专业</div>
      <div class="para" v-if="school.ranking">
        <div class="la">
        </div>
        <div class="text">
          <div class="listText font-t3" v-for="(item,index) in school.ranking.majorRanking"><span class="lala"></span><i class="rank">{{item.year}} </i>{{item.title}} - 第<i class="rank"> {{item.number}} </i>名</div>
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
        image: [],
        zsxx:[],
        schoolId:0,
        degree:[],
        degreeText:'',
        nature:'',
        faculty:[],
        major:[],
        attentioncount:0,
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
        school:{}
      }
    },
    mounted() {
      this.schoolId = this.$route.query.schoolId;
      this.getSchoolDetail();
      this.getNature();
    },
    methods: {
      toOtherPage(params){
        this.$router.push({
          name:params.pageName,
          query:{
            name:this.$route.query.name
          }
        });
      },
      toRecult(params){
        this.$router.push({
          name:'recult',
          query:{
            schoolId:this.$route.query.schoolId,
            diplomasId:params.diplomasId,
            name:params.name
          }
        })
      },
      toShowAll(){
        this.$router.push({
          name:'faculty',
          query:{
            schoolId:this.$route.query.schoolId
          }
        })
      },
      getSchoolDetail(){
        this.$http({
          method:'get',
          url:URL.schoolDetail+this.schoolId+"/schoolInformation",
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.school = response.data;
            this.degree = response.data.degree;
            this.faculty = response.data.faculty;
            this.major = response.data.major;
            this.image = response.data.image;
            this.attentioncount = response.data.attentioncount;
            let degreeArr = [];
            for(let i = 0;i<this.degree.length;i++){
              degreeArr.push(this.degree[i].degree[0].name);
              this.zsxx.push(this.degree[i].degree[0]);
            }
            this.degreeText = degreeArr.join("、");
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
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
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
        this.$router.push({
          name:'schoolDepartment',
          query:{
            id:params.id,
            schoolId:params.schoolId
          }
        })
      },
      toMajorDetail(params){
        this.$router.push({
          name:'majorDetail',
          query:{
            diplomasId:params.diplomasId,
            schoolId:this.$route.query.schoolId
          }
        });
      },
      toClassVideo(){
        this.$router.push({
          name:'schoolClass',
          query:{
            schoolId:this.$route.query.schoolId
          }
        })
      },
      toIntro(){
        this.$router.push({
          name:'schoolIntro',
          query:{
            schoolId:this.$route.query.schoolId,
            objId:this.school.id
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
