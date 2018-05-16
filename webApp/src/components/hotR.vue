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
  }
  .topBox{
    height: 1.46rem;
    background-color: black;
    position: relative;
  }
  .back{
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
  .title{
    color: #fff;
    height: 1.46rem;
    line-height: 1.46rem;
    text-align: center;
  }
  .title2{
    line-height: 1rem;
    height: 1rem;
    text-align: center;
    border-bottom: 0.05rem solid #f4f4f4;
  }
</style>
<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-tap="{methods:goBack}"></div>
      <div class="title font-h3">热点推荐</div>
    </div>
    <div class="content" ref="content">
      <div class="title2 font-h3">{{title}}</div>
      <div class="context" ref="context"></div>
    </div>
  </div>
</template>

<script>
  import URL from '../lib/api';
  export default {
    data() {
      return {
        title:'',
        hotId:0
      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight -this.$refs.top.clientHeight + 'px';
      this.hotId = this.$store.state.hotId;
      this.getHotR();
    },
    methods: {
      getHotR() {
        this.$http({
          method: 'get',
          url: URL.hotR + this.hotId + '/load',
          params: {},
          responseType: 'stream',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.title = response.data.title;
            this.$refs.context.innerHTML = response.data.info;
          }else{
              this.handleError(response);
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>

