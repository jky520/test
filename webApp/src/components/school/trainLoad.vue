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
      <div class="bannerBox">
        <img :src="getImgUrl(pageData.image)">
      </div>
      <div ref="pageContent">

      </div>
      <Review :type="9" :objId="$route.query.id"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        trainLoadId:0,
        pageData:{},
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.trainLoadId = this.$route.query.id;
      this.studyLoad();
    },
    methods: {
      studyLoad(){
        this.$http({
          method:'get',
          url:URL.schoolLoad + this.$route.query.id + '/train_infoload',
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
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

