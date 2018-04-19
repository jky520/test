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
    background-image: url(../styles/images/icon_banner2.jpg);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
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
  }
  .menu2li.on{
    background-color: #fff;
    color: #c33f3e;
  }
  .rightContent{
    width: 100%;
    height: 100%;
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
</style>
<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-on:click="goBack"></div>
      <div class="title font-h3">技能培训</div>
    </div>
    <div class="banner" ref="ban"></div>
    <div class="menu1" ref="menu">
      <div class="font-t2 on">精选</div>
      <div class="font-t2">最新</div>
      <div class="font-t2">热门</div>
    </div>
    <div class="contentBox" ref="content">
      <div class="leftMenu">
        <div class="menu2li font-t4">资格考试</div>
        <div class="menu2li font-t4 on">学历考试</div>
        <div class="menu2li font-t4">工程考试</div>
        <div class="menu2li font-t4">计算机考试</div>
        <div class="menu2li font-t4">外语类考试</div>
      </div>
      <div class="rightContent">
        <div class="items">
          <img src="../styles/images/icon_question.jpg">
          <span class="font-t2">国学经典题库全套 入门全民阅读精选经典54套</span>
          <div class="price font-t2">免费</div>
        </div>
        <div class="items">
          <img src="../styles/images/icon_question.jpg">
          <span class="font-t2">国学经典题库全套 入门全民阅读精选经典54套</span>
          <div class="price font-t2">免费</div>
        </div>
        <div class="items">
          <img src="../styles/images/icon_question.jpg">
          <span class="font-t2">国学经典题库全套 入门全民阅读精选经典54套</span>
          <div class="price font-t2">免费</div>
        </div>
        <div class="items">
          <img src="../styles/images/icon_question.jpg">
          <span class="font-t2">国学经典题库全套 入门全民阅读精选经典54套</span>
          <div class="price font-t2">免费</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import URL from '../lib/api';
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight - this.$refs.ban.clientHeight -this.$refs.top.clientHeight -this.$refs.menu.clientHeight + 'px';
    },
    methods: {
      goBack(){
        history.back();
      }
    }
  }
</script>

