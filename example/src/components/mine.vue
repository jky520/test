<style scoped="scoped">
  .view{
    background-color: #fff;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .contentBox{
    overflow-y: scroll;
  }
  .footer{
    height: 1.3rem;
    background-color: black;
    color: #666666;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .list span{
    display: inline-block;
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
</style>

<template>
  <div class="view">
    <div class="contentBox" ref="content">

    </div>
    <div class="footer" ref="foot">
      <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'index'}">
        <div class="menuIcon"></div>
        <div class="menuTitle font-t3">首页</div>
      </div>
      <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'news'}">
        <div class="menuIcon news_w"></div>
        <div class="menuTitle font-t3">新闻</div>
      </div>
      <!--<div class="menuBox">-->
      <!--<div class="menuIcon school_w"></div>-->
      <!--<div class="menuTitle font-t3">智能择校</div>-->
      <!--</div>-->
      <div class="menuBox">
        <div class="menuIcon mine_w"></div>
        <div class="menuTitle font-t3">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight - this.$refs.foot.clientHeight + 'px';
    },
    methods: {
      toOtherPage(params){
        this.$router.push({
          name:params.pageName
        });
      }
    }
  }
</script>
