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
    text-align: center;
    color: #d50505;
    background:#d0d0d0;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .majorIntro{
    height: 1rem;
    line-height: 1rem;
    text-indent: 0.2rem;
    color: #333;
    background: #ddd;
    position: relative;
  }
  .arrow{
    position: absolute;
    right: 0.2rem;
  }
  .toDown{
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .majorText{
    padding: 0 0.5rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'找专业'" :hasBack="true"></Header>
    <div class="content" ref="content">
      <div class="title font-t1">{{title}}</div>
      <div class="majorIntro font-h3" v-tap="{methods:toShow}">专业介绍 <span class="arrow" v-bind:class="{'toDown':show1}">&gt;</span></div>
      <div class="majorText" ref="text1" v-show="show1">

      </div>
      <div class="majorIntro font-h3" v-tap="{methods:toShow}">专业介绍 <span class="arrow" v-bind:class="{'toDown':!show1}">&gt;</span></div>
      <Review :type="2" :objId="$route.query.id"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
        show1:true,
        title:''
      }
    },
    mounted() {

      this.getMsg();
    },
    methods: {
      getMsg(){
        this.$http({
          method: 'get',
          url: URL.majorInfo+this.$route.query.id+'/load',
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.title = response.data.name;
            this.$refs.text1.innerHTML = response.data.feature;
          }else{
            this.handleError(response)
          }
        }, (err) => {
          console.log(err);
        })
      },
      toShow(){
        this.show1 = !this.show1;
      }
    }
  }
</script>

