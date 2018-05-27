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
    padding:0 0.5rem;
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex: 1;
  }
  .bannerBox{
    height: 5rem;
    width: 9rem;
  }
  .bannerBox img{
    width: 100%;
    height: 100%;
  }
  .title3{
    font-weight: bold;
    text-indent: 0.2rem;
    margin: 0.2rem 0.44rem 0.25rem 0;
    display: block;
    height: 0.37rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'培训'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="title3 font-t1">{{pageData.title}}</div>
      <div class="bannerBox" v-tap="{methods:toBaidu}">
        <img :src="getImgUrl(pageData.image)">
      </div>
      <div ref="pageContent">

      </div>
      <Review :type="9" :objId="$store.state.trainLoadId"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../lib/api';
  export default {
    data() {
      return {
        trainLoadId:0,
        pageData:{}
      }
    },
    mounted() {
      this.trainLoadId = this.$store.state.trainLoadId;
      this.studyLoad();
    },
    methods: {
      studyLoad(){
        this.$http({
          method:'get',
          url:URL.trainLoad,
          params:{
            id:this.trainLoadId
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.$store.state.userInfo.token
          }),
          timeout: 5000
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.pageData = response.data;
            this.$refs.pageContent.innerHTML = response.data.content;
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

