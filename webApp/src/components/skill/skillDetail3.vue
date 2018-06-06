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
  .bannerBox{
    height: 5rem;
    width: 10rem;
  }
  .bannerBox img{
    width: 100%;
    height: 100%;
  }
  .title{
    line-height: 1rem;
    text-indent: 0.5rem;
    background: #e8e8e8;
  }
  .context{
    background: #fff;
    height: 3rem;
    line-height: 0.8rem;
    text-indent: 0.5rem;
  }
  .infoBox{
    background: #eee;
    padding: 0.5rem;
  }
  .title2{
    color: #953734;
  }
  .line{
    line-height: 1rem;
  }
  .colorRed{
    color: red;
  }
  .imgBox{
    width: 10rem;
    height: 8rem;
  }
  .imgBox img{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="view">
    <Header :title="'技能培训'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="title font-t1">{{data.title}}</div>
      <div class="imgBox">
        <img :src="getImgUrl(data.image)">
      </div>
      <div class="context font-t1" v-html="content"></div>
      <div class="infoBox">
        <div class="title2 font-t1">联系方式</div>
        <p class="line font-h3">地址：{{data.address}}</p>
        <p class="line font-h3">电话：{{data.telphone}}</p>
        <p class="line font-h3">手机：<a :href="'tel:'+data.mobile">{{data.mobile}}</a></p>
        <p class="line font-h3">官网：<span class="colorRed">{{data.url}}</span></p>
      </div>
      <Review :type="10" :objId="$route.query.id"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        data:{},
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
        content:''
      }
    },
    mounted() {
      this.getInfo();
    },
    methods: {
      getInfo(){
        this.$http({
          method: 'get',
          url: URL.base + 'trainInfo/'+this.$route.query.id+'/load',
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.data = response.data;
            this.content = this.data.content;
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>

