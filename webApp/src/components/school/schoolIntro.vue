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
    padding: 0 0.5rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'学校简介'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="context">

    </div>
    <Review :type="0" :objId="$route.query.id"></Review>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        school:{},
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
      }
    },
    mounted() {
      this.schoolId = this.$route.query.schoolId;
      this.getSchoolDetail();
    },
    methods: {
      getSchoolDetail(){
        this.$http({
          method:'get',
          url:URL.schoolDetail+this.schoolId+"/schoolInformation",
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
          timeout: 5000
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.school = response.data;
            this.brief = response.data.brief;
            this.$refs.context.innerHTML = this.brief;
          }
        },(err)=>{
          console.log(err);
        })
      }
    }
  }
</script>
