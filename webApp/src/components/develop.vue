<style scoped>
  .view{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p{
    text-align: center;
  }
  .footer{
    height: 1.3rem;
    background-color: #191e29;
    color: #fff;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .menuBox{
    width:25%;
    text-align: center;
  }
  .menuIcon{
    background-image: url(../styles/images/icon_home_red.png);
    background-repeat:no-repeat;
    background-position: center center;
    -webkit-background-size:.46rem;
    background-size:.46rem;
    height:0.84rem;
  }
  .news_w{
    background-image: url(../styles/images/icon_news_w.png);
  }
  .school_w{
    background-image: url(../styles/images/icon_school_w.png);
  }
  .mine_w{
    background-image: url(../styles/images/icon_mine_w.png);
  }
  .topBox {
    height: 1.46rem;
    background-color: #191e29;
    position: relative;
  }
  .topLogo {
    height: 1.46rem;
    position: absolute;
    top: 0;
    left: 0.2rem;
    background-image: url(../styles/images/logo01.jpg);
    background-repeat: no-repeat;
    width: 10rem;
    -webkit-background-size: auto 1.46rem;
    background-size: auto 1.46rem;
    background-position: center center;
  }
</style>
<template>
    <div class="view">
      <div class="topBox">
        <div class="topLogo"></div>
      </div>
      <p class="font-h1">建设中......</p>
      <div class="footer" ref="foot">
        <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'index'}">
          <div class="menuIcon"></div>
          <div class="menuTitle font-t3">首页</div>
        </div>
        <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'develop'}">
          <div class="menuIcon school_w"></div>
          <div class="menuTitle font-t3">智能择校</div>
        </div>
        <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'develop'}">
          <div class="menuIcon news_w"></div>
          <div class="menuTitle font-t3">同学汇</div>
        </div>
        <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'mine'}">
          <div class="menuIcon mine_w"></div>
          <div class="menuTitle font-t3">我的</div>
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

        },
        methods: {
          toOtherPage(params){
            this.$router.push({
              name:params.pageName
            });
          },
        }
    }
</script>

