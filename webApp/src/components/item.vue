<style scoped>
  .view{
    background-color: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
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
  .banner{
    height: 5rem;
    width: 10rem;
  }
  .title{
    color: #fff;
    height: 1.46rem;
    line-height: 1.46rem;
    text-align: center;
  }
  .menu1{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    height:0.85rem;
    width: 6rem;
    margin: 0 auto;
  }
  .menu1 div{
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.2rem;
  }
  .menu1 div.on{
    color: #c33f3e;
    border-bottom: 0.05rem solid #c33f3e;
  }
  .contentBox{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #d4d4d4;
  }
  .leftMenu{
    width: 2.5rem;
    background: #ececec;
  }
  .menu2li{
    height: 1.08rem;
    line-height: 1.08rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .menu2li.on{
    background-color: #fff;
    color: #c33f3e;
  }
  .rightContent{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  .items{
    padding: 0.2rem;
    position: relative;
    border-bottom: 1px solid #d4d4d4;
  }
  .items span{
    padding-top: 0.2rem;
    width: 4.5rem;
    display: inline-block;
    vertical-align: top;
    line-height: 0.5rem;
  }
  .items img{
    width: 1.85rem;
    height: 1.5rem;
    display: inline-block;
    vertical-align: top;
  }
  .price{
    position: absolute;
    bottom: 0.18rem;
    right: 0.4rem;
    color: #c33f3e;
  }
  .listText{
    text-indent: 1rem;
    color: #344465;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-tap="{methods:goBack}"></div>
      <div class="title font-h3">试题库</div>
    </div>
    <div class="banner" ref="ban">
      <swiper :options="swiperOption">
        <swiper-slide v-for="slide in swiperSlides" v-tap="{methods:toBaidu}" :key="slide.id">
          <img :src="getImgUrl(slide.imageUrl)" >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="contentBox" ref="content">
      <div class="leftMenu">
        <div class="menu2li font-t4" v-bind:class="{'on':menuArr[index].checked}" v-for="(item,index) in menuArr" v-tap="{methods:checkMenu,index:index}">{{item.name}}</div>
      </div>
      <div class="rightContent">
        <div class="items" v-for="item in bookList" v-tap="{methods:toItemList,pId1:item.pId,pId2:item.id}">
          <span class="listText font-t2">{{item.name}}</span>
          <div class="price font-t2">{{item.remarks}}</div>
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
        menuArr:[],
        bookList:[],
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
        swiperSlides: [],
      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight - this.$refs.ban.clientHeight -this.$refs.top.clientHeight + 'px';
      this.getCategoryList();
    },
    methods: {
      getCategoryList(){
        this.$http({
          method:'get',
          url:URL.categoryList,
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res)=>{
          console.log(res);
          let response = res.data;
          if(response.meta.code == "200"){
            let arr = response.data;
            for(let i = 0;i<arr.length;i++){
              if(i === 0){
                arr[i].checked = true;
              }else{
                arr[i].checked = false;
              }
            }
            this.bookList = arr[0].subs;
            this.swiperSlides = arr[0].image;
            this.menuArr = arr;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      checkMenu(params){
        this.menuArr.map((val,index,arr)=>{
          this.menuArr[index].checked = false;
        });
        this.menuArr[params.index].checked = true;
        this.bookList = this.menuArr[params.index].subs;
      },
      toItemList(params){
        this.$store.commit("setItemPid",{pId1:params.pId1,pId2:params.pId2});
        this.$router.push({
          name:'itemList'
        })
      }
    },
    computed:{

    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

