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

</style>

<template>
  <div class="view">
    <Header :title="'注册'" :hasBack="true" ref="top"></Header>
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
      <div class="loginBtn font-h3" v-tap="{methods:register}">注册</div>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  import { Toast } from 'mint-ui';
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
      register(){
        if(this.password == this.passwordTwo){
          if(this.username!=""){
            this.$http({
              method: 'post',
              url: URL.register,
              params: {
                account:this.username,
                password:this.password
              },
              responseType: 'json',
              timeout: 5000
            }).then((res) => {
              let response = res.data;
              console.log(response);
              if(response.meta.code == "200"){
                  Toast("注册成功");
                  this.$router.push({
                    name:'login'
                  });
              }else{
                  this.handleError(response);
              }
            }, (err) => {
              console.log(err);
            })
          }else{
            Toast("请输入用户名");
          }
        }else{
          Toast("两次密码不一致");
        }
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
