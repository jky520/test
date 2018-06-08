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
  .listBox{
    width: 10rem;
    margin: 0 auto;
  }
  .list{
    width: 1.6rem;
    height: 1.6rem;
    border-radius:100%;
    background-color: #f4f4f4;
    float: left;
    margin: 0.2rem 0.2rem;
    text-align: center;
    line-height: 1.6rem;
    color: #b13c3c;
    /*border: 1px solid red;*/
    /*box-sizing: border-box;*/
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
    width: 2.1rem;
    height: 1.2rem;
    margin: 0.1rem 0.2rem;
    line-height: 1.2rem;
    text-align: center;
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
  .colorRed{
    color: red;
  }
</style>
<template>
    <div class="view">
      <Header :title="'找学校'" :hasBack="true" ref="top"></Header>
      <div class="content" ref="content">
        <div class="bannerBox">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide,index) in swiperSlides" :key="index" v-on:click="toURL(item.url)">
              <img :src="getImgUrl(slide.imageUrl)">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="title2 font-t2">国内院校</div>
        <div class="listBox">
          <div class="list font-t4 colorRed" v-for="(item,index) in schoolType" v-if="item.category === 0" v-tap="{methods:searchSchool,category:item.category,id:item.id}">{{item.name}}</div>
        </div>
        <div class="listBox">
          <div class="list2 font-t3" v-for="(item,index) in schoolType" v-if="item.category === 1" v-tap="{methods:searchSchool,category:item.category,id:item.id}">{{item.name}}</div>
        </div>
        <div class="title2 font-t2">海外院校</div>
        <div class="listBox">
          <div class="list2 font-t2" v-for="(item,index) in schoolType" v-if="item.category === 2" v-tap="{methods:searchSchool,category:item.category,id:item.id}">{{item.name}}</div>
        </div>
        <div class="title2 font-t2">留学</div>
        <div class="lx">
          <div class="lxBox" v-for="item in study" v-tap="{methods:studyLoad,id:item.id}">
            <div class="lxIntro">
              <!--<div class="lxTitle font-t2">{{item.title}}</div>-->
              <div class="lxText font-t2">{{item.brief}}</div>
            </div>
            <div class="lxImg">
              <img :src="getImgUrl(item.image)">
            </div>
          </div>
        </div>
        <div class="title2 font-t2">培训</div>
        <div class="px">
          <div class="lxBanner" v-on:click="toURL(train[0].url)">
            <img :src="getImgUrl(train[0].image)">
          </div>
          <div class="lxBox" v-for="(item,index) in train" v-if="index >= 1" v-tap="{methods:trainLoad,id:item.id}">
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
              swiperSlides: [],
              schoolType:[],
              study:[],
              train:[{}],
              userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
            }
        },
        mounted() {
          this.getSchool();
        },
        methods: {
          getSchool(){
            this.$http({
              method:'get',
              url:URL.school,
              params:{
                category:0
              },
              responseType:'json',
              headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
                token:this.userInfo.token
              }),
            }).then((res)=>{
              let response = res.data;
              if(response.meta.code == "200"){
                this.swiperSlides = response.data.image;
                this.schoolType = response.data.school;
                this.study = response.data.study;
                this.train = response.data.train;
              }else{
                this.handleError(response)
              }
            },(err)=>{
              console.log(err);
            })
          },
          studyLoad(params){
            this.pageUrl('studyLoad',{
              id: params.id
            });
            // this.$router.push({
            //   name:'studyLoad',
            //   query: {
            //     id: params.id
            //   }
            // });
          },
          trainLoad(params){
            this.pageUrl('trainLoad',{
              id:params.id
            });
            // this.$router.push({
            //   name:'trainLoad',
            //   query:{
            //     id:params.id
            //   }
            // });
          },
          searchSchool(params){
            this.pageUrl('search',{
              id:params.id,
              category:params.category
            });
            // this.$router.push({
            //   name:'search',
            //   query:{
            //     id:params.id,
            //     category:params.category
            //   }
            // });
          }
        },
      components:{
          swiper,
          swiperSlide
      }
    }
</script>

