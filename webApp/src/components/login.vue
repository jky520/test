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
    <Header :title="'登录'" :hasBack="false" ref="top"></Header>
    <div class="loginBox">
      <div class="username">
        <div class="uText font-h3">帐号</div>
        <input type="text" class="uInput" placeholder="请输入邮箱/手机号" v-model="username">
      </div>
      <div class="password">
        <div class="uText font-h3">密码</div>
        <input type="password" class="uInput" placeholder="请输入密码" v-model="password">
      </div>
      <div class="loginBtn font-h3" v-tap="{methods:toLogin}">登录</div>
      <div class="fr">
        <span class="colorB">忘记密码</span>
        <span>|</span>
        <span class="colorB" v-tap="{methods:toRegister}">快速注册</span>
      </div>
    </div>
  </div>
</template>

<script>
  import URL from '../lib/api';
  import { Toast } from 'mint-ui';
  export default{
    data(){
      return {
        username: '',
        password: '',
      }
    },
    mounted(){

    },
    methods: {
      toRegister(){
        this.$router.push({
          name: 'register'
        })
      },
      toLogin(){
        this.$http({
          method: 'post',
          url: URL.login,
          params: {
            account: this.username,
            password: this.password
          },
          responseType: 'json',
          timeout: 5000
        }).then((res) => {
          let response = res.data;
          console.log(response);
          if(response.meta.code == "200"){
              this.$store.commit("setUserInfo",response.data);
              this.$router.push({
                name:'index'
              });
              Toast('登录成功');
          }else{
              this.handleError(response);
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
    ,
    beforeUpdate()
    {

    }
    ,
    updated()
    {

    }
    ,
    beforeDestroy()
    {

    }
    ,
    watch: {}
  }
</script>
