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
  .menu1{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    height:0.85rem;
    width: 10rem;
    margin: 0 auto;
    align-items:center;
  }
  .address{
    color: #c33f3e;
    line-height: 0.85rem;
    text-indent: 0.625rem;
  }
  .addInfo{
    line-height: 0.85rem;
    text-indent: 0.4rem;
    color: #8b8b8b;
  }
  .arrow{
    background-image: url(../styles/images/icon_downArrow.png);
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 0.15rem;
    height: 0.15rem;
    margin-left: 0.1rem;
  }
</style>
<template>
    <div class="view">
      <div ref="top" class="topBox">
        <div class="back" v-on:click="goBack"></div>
        <div class="title font-h3">试题库</div>
      </div>
      <div class="banner" ref="ban"></div>
      <div class="menu1" ref="menu">
        <div class="address font-t1">贵阳市</div>
        <div class="addInfo font-t3">切换城市</div>
        <div class="arrow"></div>
      </div>
      <div class="contentBox" ref="content">
        <div class="leftMenu">
          <div class="menu2li font-t4">IT教育</div>
          <div class="menu2li font-t4 on">德育培训</div>
          <div class="menu2li font-t4">驾驶培训</div>
          <div class="menu2li font-t4">挖掘机培训</div>
          <div class="menu2li font-t4">医师资格培训</div>
        </div>
        <div class="rightContent">
          <div class="items">
            <img src="../styles/images/icon_question.jpg">
            <span class="font-t2">大连语桥德语培训学校秋季基础中高级德语班</span>
          </div>
          <div class="items">
            <img src="../styles/images/icon_question.jpg">
            <span class="font-t2">大连语桥德语培训学校秋季基础中高级德语班</span>
          </div>
          <div class="items">
            <img src="../styles/images/icon_question.jpg">
            <span class="font-t2">大连语桥德语培训学校秋季基础中高级德语班</span>
          </div>
          <div class="items">
            <img src="../styles/images/icon_question.jpg">
            <span class="font-t2">大连语桥德语培训学校秋季基础中高级德语班</span>
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

