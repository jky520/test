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
    flex: 1
  }
  .topBox{
    height: 1.46rem;
    background-color: black;
    position: relative;
  }
  .back{
    width: 2rem;
    height: 1.46rem;
    background-image: url("../../styles/images/icon_back.png");
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
  .video{
    width: 10rem;
    height: 5rem;
  }
  .videoTitle{
    padding: 0.5rem 0;
    text-align: center;
    background: #DEDDDC;
  }
  .video video{
    height: 100%;
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  .nav{
    width: 10rem;
    display: flex;
    display: -webkit-flex;
  }
  .nav .on{
    color: #43B5CC;
    border-bottom: 1px solid #43B5CC;
  }
  .navList{
    width: 5rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
  .tab-pane{
    padding: 0.5rem;
  }
  .lab-item{
    display: flex;
    display: -webkit-flex;
  }
  .lab-item-status{
    width: 1rem;
    height: 1rem;
  }
  .lab-item-status img{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="view">
    <Header :title="'视频课程'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="video">
        <video :src="getImgUrl(video.path)" :poster="getImgUrl(videoinfo.themes)" controls="controls"></video>
      </div>
      <div class="videoInfo">
        <div class="videoTitle font-h2">{{videoinfo.name}}</div>
      </div>
      <div class="nav">
        <div class="navList font-h2" v-bind:class="{'on':item.on}" v-for="(item,index) in menu"  v-tap="{methods:checkMenu,index:index}">{{item.name}}</div>
      </div>
      <div class="tab-content">
        <div class="tab-pane active" v-show="menu[0].on">
          <div v-html="videoinfo.brief"></div>
          <div class="lab-item" v-for="a in catalogJsons">
            <div class="lab-item-status">
              <img :src="getImgUrl('/images/video-btn.png')">
            </div>
            <div class="lab-item-title">{{videoinfo.name}}{{a.name}}</div>
          </div>
        </div>
        <div class="tab-pane" v-show="menu[1].on">
          <div v-html="video.catalog"></div>
          <div class="lab-item" v-for="a in catalogJsons">
            <div class="lab-item-status">
              <img :src="getImgUrl('/images/video-btn.png')">
            </div>
            <div class="lab-item-title">{{videoinfo.name}}{{a.name}}</div>
          </div>
        </div>
      </div>
      <Review :type="1" :objId="$route.query.videoId"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        videoId:0,
        videoinfo:'',
        video:{},
        catalogJsons:{},
        menu:[{
          name:'课程介绍',
          on:true
        },{
          name:'课程目录',
          on:false
        }],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.videoId = this.$route.query.videoId;
      this.getVideo();
    },
    methods: {
      checkMenu(params){
        this.menu.map((val)=>{
          val.on = false;
        });
        this.menu[params.index].on = true;
      },
      getVideo(){
        this.$http({
          method: 'get',
          url: URL.getVideo + this.videoId + "/video",
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.video = response.data.videofile[0];
            this.videoinfo = response.data.videoinfo;
            this.catalogJsons = JSON.parse(response.data.videoinfo.catalogJson)
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>
