<style scoped>
  .view {
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .topBox {
    height: 1.46rem;
    background-color: black;
    position: relative;
  }

  .title {
    color: #fff;
    height: 1.46rem;
    line-height: 1.46rem;
    text-align: center;
  }

  .back {
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

  .username, .password {
    width: 9rem;
    margin: 0.5rem auto;
    border-bottom: 0.05rem solid #eeeeee;
    height: 1rem;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    position: relative;
  }

  .uText {
    line-height: 1rem;
    text-indent: 0.1rem;
    color: #444444;
  }

  .uInput {
    width: 6.5rem;
    outline: none;
    text-indent: 0.5rem;
    font-size: 0.45rem;
    padding: 0;
    margin: 0;
    border: 0;
  }

  .loginBtn {
    width: 9rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    margin: 1rem auto;
    color: #fff;
    background-color: #478cff;
    -webkit-border-radius: 0.2rem;
    -moz-border-radius: 0.2rem;
    border-radius: 0.2rem;
  }

  .fr {
    font-size: 0.4rem;
    color: #444444;
    text-align: center;
  }

  .fr span {
    padding: 0 0.2rem;
  }

  .loginBox {
    padding-top: 4rem;
  }

  .colorB {
    color: #478cff;
  }

  .userX {
    position: absolute;
    right: 0.2rem;
    width: 1rem;
    text-align: right;
    line-height: 1rem;
    color: #999999;
  }
</style>

<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-tap="{methods:goBack}"></div>
      <div class="title font-h3">注册</div>
    </div>

    <div class="register">
      <div class="username">
        <div class="uText font-h3">帐号</div>
        <input type="text" class="uInput" placeholder="请输入邮箱/手机号" v-model="username">
      </div>
      <div class="password">
        <div class="uText font-h3">密码</div>
        <input type="password" class="uInput" placeholder="请输入密码" v-model="password">
      </div>
      <div class="password">
        <div class="uText font-h3">密码确认</div>
        <input type="password" class="uInput" placeholder="请再次输入密码" v-model="passwordTwo">
      </div>
      <div class="loginBtn" ref="loginBtn">注册</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        username: '',
        password: '',
        passwordTwo:''
      }
    },
    mounted(){

    },
    methods: {
      goBack(){
        history.back();
      }
    },
    beforeUpdate(){

    },
    updated(){

    },
    beforeDestroy(){

    },
    watch: {}
  }
</script>
