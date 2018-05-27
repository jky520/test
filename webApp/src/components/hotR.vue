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
    padding: 0 0.5rem;
    -webkit-box-flex: 1;
    flex: 1
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
    <Header :title="'热点推荐'" :hasBack="true" ref="top"></Header>
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
      // this.$refs.content.style.height = document.documentElement.clientHeight -this.$refs.top.$el.clientHeight + 'px';
      this.hotId = this.$store.state.hotId;
      this.getHotR();
    },
    methods: {
      getHotR() {
        this.$http({
          method: 'get',
          url: URL.hotR + this.hotId + '/load',
          params: {},
          responseType: 'json',
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

