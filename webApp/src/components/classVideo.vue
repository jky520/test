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
  .video{
    width: 10rem;
    height: 5rem;
  }
  .videoTitle{
    margin-top: 0.5rem;
    text-align: center;
  }
  .video video{
    height: 100%;
    width: 100%;
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
        <!--<p class="info">{{videoinfo.brief}}</p>-->
      </div>
      <Review :type="1" :objId="$store.state.videoId"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../lib/api';
  export default {
    data() {
      return {
        videoId:0,
        videoinfo:'',
        video:{}
      }
    },
    mounted() {
      this.videoId = this.$store.state.videoId;
      this.getVideo();
    },
    methods: {
      getVideo(){
        this.$http({
          method: 'get',
          url: URL.getVideo + this.videoId + "/video",
          params: {},
          responseType: 'json',
          timeout: 5000
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.video = response.data.videofile[0];
            this.videoinfo = response.data.videoinfo;
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>
