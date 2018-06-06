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
    flex: 1
  }
  .title2{
    line-height: 1rem;
    color: #666666;
    font-weight: bold;
    text-indent: 0.5rem;
  }
  .context{
    padding: 0 0.5rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'资讯'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="title2 font-h3">{{pageData.title}}</div>
      <div class="title2 font-t3">{{source}} {{date}}</div>
      <div class="bLine"></div>
      <div class="context" ref="context"></div>
      <Review :type="9" :objId="$route.query.id"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        oversearLoadId:0,
        pageData:{},
        date:'无数据',
        source:'',
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.oversearLoadId = this.$route.query.id;
      this.studyLoad();
    },
    methods: {
      studyLoad(){
        this.$http({
          method:'get',
          url:URL.overseasLoad +this.oversearLoadId+ "/load",
          params:{
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.pageData = response.data;
            this.$refs.context.innerHTML = this.pageData.content;
            this.date = new Date(this.pageData.indate).format('yyyy年MM月dd日');
            this.source = this.pageData.source;
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

