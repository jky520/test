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
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex: 1
  }
  .itemList{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    height: 0.8rem;
    line-height: 0.8rem;
    padding:0 0.5rem;
    margin: 0 auto;
    background-color: #fff;
  }
  .itemList:nth-child(2n){
    background:#c8c8c8;
  }
  .contentBox:nth-child(2){
    background-color: #f4f4f4;
  }
  .itemText{
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 7.5rem;
  }
  .downLoad{
    color: red;
  }
</style>
<template>
  <div class="view">
    <Header :title="'试题列表'" :hasBack="true" ref="top"></Header>
    <div class="contentBox" ref="content">
      <div class="itemList" v-for="item in itemList">
        <div class="itemText font-t2" v-tap="{methods:showOnline,url:item.path}">{{item.title}}</div>
        <div class="downLoad font-t2" v-tap="{methods:downLoadItem,url:item.path}">下载</div>
      </div>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    data() {
      return {
        pId:{},
        itemList:[],
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.pId = {
        pId1:this.$route.query.pId1,
        pId2:this.$route.query.pId2,
      };
      this.getItemList();
    },
    methods: {
      getItemList(){
        this.$http({
          method:'get',
          url:URL.itemList,
          params:{
            pId1:this.pId.pId1,
            pId2:this.pId.pId2,
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          console.log(res);
          let response = res.data;
          if(response.meta.code == "200"){
            this.itemList = response.data;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      downLoadItem(params){
          location.href= "http://139.129.130.136:8081" + params.url;
      },
      showOnline(params){
          this.$router.push({
            name:'showOnline',
            query:{
              path:params.url
            }
          })
      }
    }
  }
</script>

