<style scoped>
  .view{
    background-color: #fff;
    width: 100%;
    height: 100%;
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
  .content{
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex: 1;
  }
  .title{
    color: #8d2a2a;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
  }
  .box{
    padding: 0.5rem;
    line-height: 1rem;
    background: #f9f9f9;
  }
  .title2{
    color: #8d2a2a;
  }
  .infoBox{
    background: #fff;
    padding: 0.5rem;
  }
  .title2{
    color: #953734;
  }
  .line{
    line-height: 0.8rem;
  }
  .bigBox{
    background: #c8c8c8;
    padding: 0 0.5rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'减压空间'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="bigBox">
        <div class="title font-t1">{{info.title}}</div>
        <div class="context" v-html="info.brief"></div>
      </div>
      <div class="box font-h3">
        <div class="title2">擅长领域</div>
        <div v-html="info.shanchang"></div>
      </div>
      <div class="infoBox">
        <div class="title2 font-t1">咨询方式</div>
        <p class="line font-t1">预约电话：{{info.yyTel}}</p>
        <p class="line font-t1">资讯电话：{{info.zxTel}}</p>
        <p class="line font-t1">微信咨询：{{info.weixin}}</p>
        <p class="line font-t1">QQ咨询：{{info.qq}}</p>
        <p class="line font-t1">联系地址：{{info.address}}</p>
      </div>
      <Review :type="7" :objId="$route.query.id"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
        info:{}
      }
    },
    mounted() {
      this.getJianyaImg();
    },
    methods: {
      getJianyaImg(){
        this.$http({
          method:'get',
          url:URL.base + 'dppf/'+this.$route.query.id+'/load',
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.info = response.data;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      }
    }
  }
</script>
