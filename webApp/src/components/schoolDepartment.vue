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
    padding: 0.5rem;
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
</style>
<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="back" v-tap="{methods:goBack}"></div>
      <div class="title font-h3">院系</div>
    </div>
    <div class="content" ref="content">

    </div>
  </div>
</template>

<script>
    import URL from '../lib/api';

    export default {
        data() {
            return {
              departmentData:{},
              context:''
            }
        },
        mounted() {
          this.$refs.content.style.height = document.documentElement.clientHeight -this.$refs.top.clientHeight + 'px';
          this.departmentData = this.$store.state.departmentId;
          this.getDepartment();
        },
        methods: {
          getDepartment(){
            this.$http({
              method:'get',
              url:URL.department,
              params:{
                Id:this.departmentData.id,
                schoolId:this.departmentData.schoolId
              },
              responseType:'stream',
              timeout: 5000
            }).then((res)=>{
              let response = res.data;
              if(response.meta.code == "200"){
                this.$refs.content.innerHTML = response.data.brief;
              }
            },(err)=>{
              console.log(err);
            })
          }
        }
    }
</script>

