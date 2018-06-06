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
  .title{
    line-height: 1rem;
    text-indent: 0.5rem;
    background:#eee;
  }
  .context{
    padding: 0.5rem;
  }
  .infoBox{
    background: #eee;
    padding: 0.5rem;
  }
  .title2{
    color: #953734;
  }
  .line{
    line-height: 1rem;
  }
  .colorRed{
    color: red;
  }
  a{
    text-decoration: none;
  }
</style>
<template>
  <div class="view">
    <Header :title="'留学'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="title font-t1">{{school.title}}</div>
      <div class="context" ref="context"></div>
      <div class="infoBox">
        <div class="title2 font-t1">联系方式</div>
        <p class="line font-h3">地址：{{school.address}}</p>
        <p class="line font-h3">电话：{{school.telphone}}</p>
        <p class="line font-h3">手机：<a :href="'tel:'+school.mobile">{{school.mobile}}</a></p>
        <p class="line font-h3">官网：<a class="colorRed" :href="school.url">{{school.url}}</a></p>
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
        school:'',
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.getInfo();
    },
    methods: {
      getInfo(){
        this.$http({
          method: 'get',
          url: URL.base +'schoolcat/'+this.$route.query.id+'/studyload',
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.school = response.data;
            this.$refs.context.innerHTML = this.school.content;
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>

