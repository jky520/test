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
    -webkit-box-flex: 1;
    flex: 1;
  }
</style>
<template>
  <div class="view">
    <Header :title="'院系'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">

    </div>
  </div>
</template>

<script>
    import URL from '../../lib/api';

    export default {
        data() {
            return {
              departmentData:{},
              context:'',
              userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}

            }
        },
        mounted() {
          this.departmentData = {
            id:this.$route.query.id,
            schoolId:this.$route.query.schoolId
          };
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
              responseType:'json',
              headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
                token:this.userInfo.token
              }),
              timeout: 5000
            }).then((res)=>{
              let response = res.data;
              if(response.meta.code == "200"){
                this.$refs.content.innerHTML = response.data.brief;
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

