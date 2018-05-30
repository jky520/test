<style scoped>
  .title2{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
    display: inline-block;
    height: 0.37rem;
  }
  .review2{
    width: 9rem;
    height: 2rem;
    margin: 0 auto;
  }
  textarea{
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    text-indent: 0.3rem;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
    border-radius: 0.5rem;
    background:#f1f1f1;
    font-size: 0.4rem;
    line-height: 0.4rem;
  }
  .plBox{
    text-align: right;
    padding: 0.2rem 0.5rem;
  }
  .pl{
    background: #08aacf;
    color: #FFF;
    border: none;
    padding: 0.1rem 0.2rem;
    -webkit-border-radius: 0.1rem;
    -moz-border-radius: 0.1rem;
    border-radius: 0.1rem;
  }
  .list{
    display: flex;
    display: -webkit-flex;
    justify-content:space-between;
    border-bottom: 1px solid #DDD;
  }
  .headIcon{
    width: 1.5rem;
    height: 1.5rem;
    background-image: url(../../styles/images/icon_head.png);
    background-repeat: no-repeat;
    background-position: top center;
    -webkit-background-size: 1.2rem 1.2rem;
    background-size: 1.2rem 1.2rem;
  }
  .listText{
    width: 7rem;
    padding: 0 0.2rem;
  }
  .zan{
    width:1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .zan img{
    width: 0.5rem;
    height: 0.5rem;
  }
  .reviewTime{
    color: #a8a6a6;
    padding: 0.2rem 0;
  }
  .reviewText{
    word-break: break-all;
    word-wrap:break-word;
  }
</style>
<template>
    <div class="review">
      <div class="title2 font-t2">热门评论</div>
      <div class="review2">
        <textarea name="review" v-model="val"></textarea>
      </div>
      <div class="plBox">
        <span class="pl font-t3" v-tap="{methods:review}">评论</span>
      </div>
      <div class="plList">
        <div class="list" v-for="item in pList">
          <div class="headIcon"></div>
          <div class="listText">
            <div class="reviewText font-h3">{{item.message}}</div>
            <div class="reviewTime font-t3">{{new Date(Number(item.date)).format('MM-dd hh:mm')}}</div>
          </div>
          <div class="zan" v-tap="{methods:zan,id:item.id}">
            <span class="font-h3">{{item.praise}}</span>
            <img src="../../styles/images/icon_zan.png">
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
              pList:[],
              val:'',
              userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
            }
        },
        props:['type','objId'],
        mounted() {
          this.list();
        },
        methods: {
          list(){
            // 评论列表
            this.$http({
              method:'get',
              url:URL.pinglun,
              params:{
                type:this.type,
                objId:this.objId
              },
              responseType:'json',
              timeout: 5000,
              headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
                token:this.userInfo.token
              })
            }).then((res)=>{
              let response = res.data;
              if(response.meta.code == "200"){
                this.pList = response.data;
              }else{
                this.handleError(response)
              }
            },(err)=>{
              console.log(err);
            })
          },
          zan(params){
            // 点赞
            this.$http({
              method:'post',
              url:URL.praise+params.id,
              params:{},
              responseType:'json',
              timeout: 5000,
              headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
                token:this.userInfo.token
              })
            }).then((res)=>{
              let response = res.data;
              if(response.meta.code == "200"){
                this.list();
              }else{
                this.handleError(response)
              }
            },(err)=>{
              console.log(err);
            })
          },
          review(){
            // 提交评论
            this.$http({
              method:'post',
              url:URL.pinglunAdd,
              params:{
                type:this.type,
                objId:this.objId,
                message:this.val
              },
              responseType:'json',
              timeout: 5000,
              headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
                token:this.userInfo.token
              })
            }).then((res)=>{
              let response = res.data;
              if(response.meta.code == "200"){
                this.val = '';
                this.list();
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

