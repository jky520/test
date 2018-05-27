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
  .contentBox{
    -webkit-box-flex: 1;
    flex: 1;
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
    <Header :title="'资料编辑'" :hasBack="true" ref="top"></Header>
    <div class="contentBox" ref="content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="密码确认" placeholder="请再次输入密码" type="password" v-model="password2"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="生日" placeholder="请输入生日,格式19900101" type="text" v-model="birthday"></mt-field>
      <div class="loginBtn">保存</div>
    </div>
  </div>
</template>

<script>
  import URL from '../lib/api';
  import { Field } from 'mint-ui';
  export default {
    data() {
      return {
        username:'',
        email:'',
        password:'',
        password2:'',
        phone:'',
        birthday:'',
      }
    },
    mounted() {
    },
    methods: {

    },
    component:{

    }
  }
</script>

