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
    border-top: 1px solid #d4d4d4;
    padding: 0.5rem;
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex: 1
  }
  .title2{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    display: inline-block;
    height: 0.37rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'专业详情'" :hasBack="true" ref="top"></Header>
    <div class="contentBox" ref="content">
      <div class="title2 font-t2">{{textName}}</div>
      <div class="context" ref="context"></div>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        diplomasId:0,
        schoolId:0,
        textName:'',
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.diplomasId = this.$route.query.diplomasId;
      this.schoolId = this.$route.query.schoolId;
      this.getMajorDetail();
    },
    methods: {
      getMajorDetail(){
        this.$http({
          method:'get',
          url:URL.majorDetail,
          params:{
            diplomasId:this.diplomasId,
            schoolId:this.schoolId
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.textName = response.data.name;
            this.$refs.context.innerHTML = response.data.content;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        });
      }
    }
  }
</script>

