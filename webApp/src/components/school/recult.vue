<style scoped>
  .view{
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
    padding: 0.5rem;
  }
  .title2{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    margin: 0.53rem 0.44rem 0.25rem 0;
    display: inline-block;
  }
</style>
<template>
  <div class="view">
    <Header :title="'招生信息'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="title2 font-h2">{{$route.query.name}}</div>
      <div v-html="info.html"></div>
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
      this.getInfo();
    },
    methods: {
      getInfo(){
        this.$http({
          method:'get',
          url:URL.base+'school/enroll',
          params:{
            diplomasId:this.$route.query.diplomasId,
            schoolId:this.$route.query.schoolId
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            console.log(response.data);
            this.info = response.data;
          }
        },(err)=>{
          console.log(err);
        })
      }
    }
  }
</script>
