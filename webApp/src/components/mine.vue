<style scoped="scoped">
  .view{
    background-color: #fff;
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
  .contentBox{
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex: 1
  }
  .footer{
    height: 1.3rem;
    background-color: #191e29;
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
  .topBox {
    height: 1.46rem;
    background-color: #102749;
    position: relative;
  }
  .topLogo {
    height: 1.46rem;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(../styles/images/logo.jpg);
    background-repeat: no-repeat;
    width: 10rem;
    -webkit-background-size: auto 1.46rem;
    background-size: auto 1.46rem;
    background-position: center center;
  }
</style>

<template>
  <div class="view">
    <div class="contentBox" ref="content">
      <div class="topBox">
        <div class="topLogo"></div>
      </div>
      <div class="infoHead">
        <div class="userHead">
          <img src="../styles/images/icon_userhead.png">
        </div>
        <div class="edit font-h3" v-tap="{methods:toEdit,pageName:'edit'}">{{isLogin?'资料编辑':'去登录'}}&nbsp;&gt;</div>
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
      <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'develop'}">
        <div class="menuIcon school_w"></div>
        <div class="menuTitle font-t3">智能择校</div>
      </div>
      <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'develop'}">
        <div class="menuIcon news_w"></div>
        <div class="menuTitle font-t3">同学汇</div>
      </div>
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

    },
    methods: {
      toOtherPage(params){
        this.$router.push({
          name:params.pageName
        });
      },
      toEdit(params){
        let url = '/index.html#' + params.pageName;
        let w = window.plus.webview.create( url );
        w.show('pop-in',200);
      }
    }
  }
</script>
