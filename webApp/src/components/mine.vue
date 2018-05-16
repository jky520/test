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
    color: #fff;
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
  .infoHead{
    height:2rem;
    border-bottom:0.05rem solid #eee;
    padding:1rem;
    position: relative;
  }
  .userHead{
    height:2rem;
    width:2rem;
  }
  .userHead img{
    width:100%;
    height:100%;
  }
  .infoList{
    display: flex;
    display: -webkit-flex;
    justify-content:space-between;
    -webkit-justify-content: space-between;
    align-items:center;
    flex-direction: row;
    border-bottom:0.05rem solid #eee;
    margin:0 0.5rem;
  }
  .infoText{
    text-align: center;
    height:1rem;
    line-height:1rem;
    color: #666666;
  }
  .topBox{
    height: 1.46rem;
    background-color: black;
    position: relative;
  }
  .title{
    color: #fff;
    height: 1.46rem;
    line-height: 1.46rem;
    text-align: center;
  }
  .edit{
    position: absolute;
    top:0.5rem;
    right:0.3rem;
    color: #666666;
  }
</style>

<template>
  <div class="view">
    <div class="contentBox" ref="content">
      <div ref="top" class="topBox">
        <div class="title font-h3">个人资料</div>
      </div>
      <div class="infoHead">
        <div class="userHead" v-tap="{methods:toBaidu}">
          <img src="../styles/images/icon_userhead.png">
        </div>
        <div class="edit font-h3" v-tap="{methods:toOtherPage,pageName:'edit'}">{{isLogin?'资料编辑':'去登录'}}&nbsp;&gt;</div>
      </div>
      <div class="infoBox" v-show="isLogin">
        <div class="infoList">
          <div class="infoText font-h3">昵称</div>
          <div class="infoText font-t1">张三</div>
        </div>
        <div class="infoList">
          <div class="infoText font-h3">性别</div>
          <div class="infoText font-t1">男</div>
        </div>
        <div class="infoList">
          <div class="infoText font-h3">生日</div>
          <div class="infoText font-t1">1990-01-01</div>
        </div>
        <div class="infoList">
          <div class="infoText font-h3">手机号码</div>
          <div class="infoText font-t1">13312345678</div>
        </div>
        <div class="infoList">
          <div class="infoText font-h3">邮箱</div>
          <div class="infoText font-t1">jky1988@qq.com</div>
        </div>
        <div class="infoList">
          <div class="infoText font-h3">密码管理</div>
          <div class="infoText font-t1">&gt;</div>
        </div>
        <div class="infoList">
          <div class="infoText font-h3">关于我们</div>
          <div class="infoText font-t1">&gt;</div>
        </div>
      </div>
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
        isLogin:true
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
      },
    }
  }
</script>
