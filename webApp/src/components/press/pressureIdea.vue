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
  .contBox{
    padding: 0 0.5rem;
  }
  .menuBox{
    background-color: #eee;
  }
  .menuList{
    line-height: 0.7rem;
    box-sizing: border-box;
    padding:0 0.5rem;
    color:#344465
  }
  .menuList.on{
    color: red;
  }
  .menuList2{
    background: #BBB;
    display: inline-block;
    padding: 0.1rem 0.3rem;
    margin: 0 0.8rem;
  }
  .colorRed{
    color: red;
  }
</style>
<template>
  <div class="view">
    <Header :title="'减压空间'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bannerBox">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" v-tap="{methods:toBaidu,url:slide.url}" :key="index">
            <img :src="getImgUrl(slide.imageUrl)">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="menuBox">
        <div class="menuList2 colorRed font-t2">找减压方法</div>
        <div class="menuList2 font-t2" v-tap="{methods:toPerson,id:0}">找心理专家</div>
      </div>
      <div class="menuBox">
        <div class="menuList font-t1" v-bind:class="{'on':item.checked}" v-for="(item,index) in menu" v-tap="{methods:checkPress,index:index}">{{item.name}}</div>
      </div>
      <div class="contBox">
        <div ref="b"></div>
        <div ref="c"></div>
      </div>
      <Review :type="7" :objId="choiceMenu[0].id"></Review>
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
        menu:[
          {
            name:'运动减压法',
            id:1,
            checked:true
          },
          {
            name:'食物调理减压法',
            id:2,
            checked:false
          },
          {
            name:'倾诉感恩减压法',
            id:3,
            checked:false
          },
          {
            name:'宣泄减压法',
            id:4,
            checked:false
          },
          {
            name:'心理游戏减压法',
            id:5,
            checked:false
          }
        ],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.getAll('getExerciseAll');
    },
    methods: {
      checkPress(params){
        let  i= params.index;
        this.menu.map((val,index,arr)=>{
          val.checked = false;
        });
        this.menu[i].checked = true;
        switch(i){
          case 0:
            this.getAll('getExerciseAll');
            break;
          case 1:
            this.getAll("getFoodAll");
            break;
          case 2:
            this.getAll("getThankfulAll");
            break;
          case 3:
            this.getAll("getXuanXieAll");
            break;
          case 4:
            this.getAll("getGameAll");
            break;
        }
      },
      getAll(urlName){
        // 什么鸡巴玩意，数据结构乱给？
        this.$http({
          method:'get',
          url:URL[urlName],
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            // 真不想写 艹,返回的都是什么玩意
            if(urlName == "getExerciseAll"){
              this.swiperSlides = response.data.getExerciseImg;
              let getExerciseContent = response.data.getExerciseContent[0];
              let brief = getExerciseContent.brief;
              let content = getExerciseContent.content;
              this.$refs.b.innerHTML = brief;
              this.$refs.c.innerHTML = content;
            }else if(urlName == "getFoodAll"){
              this.swiperSlides = response.data.getFoodImg;
              let getExerciseContent = response.data.getFoodContent[0];
              let brief = getExerciseContent.brief;
              let content = getExerciseContent.content;
              this.$refs.b.innerHTML = brief;
              this.$refs.c.innerHTML = content;
            }else if(urlName == "getThankfulAll"){
              this.swiperSlides = response.data.getThankfulImg;
              let getExerciseContent = response.data.getThankfulContent[0];
              let brief = getExerciseContent.brief;
              let content = getExerciseContent.content;
              this.$refs.b.innerHTML = brief;
              this.$refs.c.innerHTML = content;
            }else if(urlName == "getXuanXieAll"){
              this.swiperSlides = response.data.getXuanXieImg;
              let getExerciseContent = response.data.getXuanXieContent[0];
              let brief = getExerciseContent.brief;
              let content = getExerciseContent.content;
              this.$refs.b.innerHTML = brief;
              this.$refs.c.innerHTML = content;
            }else if(urlName == "getGameAll"){
              this.swiperSlides = response.data.getGameImg;
              let getExerciseContent = response.data.getGameContent[0];
              let brief = getExerciseContent.brief;
              let content = getExerciseContent.content;
              this.$refs.b.innerHTML = brief;
              this.$refs.c.innerHTML = content;
            }
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      toPerson(params){
        this.$router.push({
          name:'pressurePerson',
          query:{
            id:params.id
          }
        })
      }
    },
    computed:{
      choiceMenu(){
        return this.menu.filter(item=>item.checked)
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>
