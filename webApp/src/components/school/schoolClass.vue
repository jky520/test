<style scoped>
  .view{
    background-color: #F9F9F9;
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
  }
  .item{
    position: relative;
    background-color: #fff;
    height: 2rem;
    border-bottom:1px solid #eaeaea;
  }
  .videoImg{
    height: 1.8rem;
    width: 1.8rem;
    display: inline-block;
    vertical-align: middle;
  }
  .textBox{
    display: inline-block;
  }
  .videoImg img{
    width: 100%;
    height: 100%;
  }
  .videoTitle{
    font-weight: bold;
    position: absolute;
    top: 0.3rem;
    left: 2.5rem;
  }
  .videoContext{
    color: #888;
    position: absolute;
    top: 1rem;
    left: 2.5rem;
  }
  .videoPrice{
    color: red;
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'学校视频课程'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="videoBox">
        <div class="item" v-for="item in videoList" v-tap="{methods:toVideo,id:item.id}">
          <div class="videoImg">
            <img :src="getImgUrl(item.themes)">
          </div>
          <div class="textBox">
            <div class="videoTitle font-t1">{{item.name}}</div>
            <div class="videoContext font-t2">{{item.brief}}</div>
            <div class="videoPrice font-t2">￥{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        schoolId:0,
        videoList:[],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.schoolId = this.$route.query.schoolId;
      this.getSchoolDetail();
    },
    methods: {
      getSchoolDetail() {
        this.$http({
          method: 'get',
          url: URL.schoolVideo + this.schoolId + "/videolist",
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
          timeout: 5000
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.videoList = response.data;
          }
        }, (err) => {
          console.log(err);
        })
      },
      toVideo(params){
        this.$router.push({
          name:'classVideo',
          query:{
            videoId:params.id
          }
        });
      }
    }
  }
</script>
