<style scoped="scoped">
  .view{
    background-color: #fff;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .topBox{
    height: 1.46rem;
    background-color: black;
  }
  .topTitle{
    color: #fff;
    height: 1.46rem;
    line-height: 1.46rem;
    text-align: center;
  }
  .contentBox{
    overflow-y: scroll;
  }
  .content{
    overflow: hidden;
    height: 7rem;
  }
  .banner{
    height: 5rem;
    width: 10rem;
    background-image: url(../styles/images/icon_banner.jpg);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .title{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    height: 0.37rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
    display: inline-block;
  }
  .more{
    display: inline-block;
    margin-left: 4.5rem;
    color: #7b7b7b;
  }
  .line{
    height: 0.13rem;
    background: #f3f3f3;
    width: 10rem;
  }
  .flexBox{
    width: 8.2rem;
    margin: 0.45rem auto 0 auto;
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction:row;
    justify-content: space-around;
  }
  .typeBox{
    width: 1.5rem;
    height: 1.8rem;
  }
  .typeIcon{
    margin: 0 auto;
    width: 1.25rem;
    height: 1.25rem;
    background-image: url("../styles/images/icon_search1.png");
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: 1.25rem 1.25rem;
    background-size: 1.25rem 1.25rem;
  }
  .search2{
    background-image: url("../styles/images/icon_search2.png");
  }
  .search3{
    background-image: url("../styles/images/icon_search3.png");
  }
  .search4{
    background-image: url("../styles/images/icon_search4.png");
  }
  .search5{
    background-image: url("../styles/images/icon_search5.png");
  }
  .search6{
    background-image: url("../styles/images/icon_search6.png");
  }
  .search7{
    background-image: url("../styles/images/icon_search7.png");
  }
  .search8{
    background-image: url("../styles/images/icon_search8.png");
  }
  .typeTitle{
    line-height: 0.55rem;
    height: 0.55rem;
    text-align: center;
    margin-top:0.24rem;
  }
  .footer{
    height: 1.3rem;
    background-color: black;
    color: #fff;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .list span{
    display: inline-block;
  }
  .listIcon{
    margin-left: 0.468rem;
    margin-right: 0.32rem;
    width: 0.1rem;
    height: 0.07rem;
    background: #c33f3e;
  }
  .listText{
    width: 8rem;;
    line-height: 0.8rem;
    position: relative;
  }
  .menuBox{
    width:25%;
    text-align: center;
  }
  .menuIcon{
    background-image: url(../styles/images/icon_home_red.png);
    background-repeat:no-repeat;
    background-position: center center;
    -webkit-background-size:.46rem;
    background-size:.46rem;
    height:0.84rem;
  }
  .news_w{
    background-image: url(../styles/images/icon_news_w.png);
  }
  .school_w{
    background-image: url(../styles/images/icon_school_w.png);
  }
  .mine_w{
    background-image: url(../styles/images/icon_mine_w.png);
  }
  .para{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
  }
  .la{
    width: 1rem;
  }
  .lala{
    position: absolute;
    left: -0.5rem;
    top: 0.3rem;
    width: 0.15rem;
    height: 0.15rem;
    background-color: red;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }
</style>

<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="topTitle font-h3">教育在线</div>
    </div>
    <div class="contentBox" ref="mid">
      <div class="banner"></div>
      <div class="content">
        <div class="title font-t2">精准·高校·院校搜索</div>
        <div class="line"></div>
        <div class="flexBox">
          <div class="typeBox" v-tap="{methods:toOtherPage,pageName:'school'}">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">找学校</div>
          </div>
          <div class="typeBox" v-tap="{methods:toOtherPage,pageName:'major'}">
            <div class="typeIcon search2"></div>
            <div class="typeTitle font-t3">找专业</div>
          </div>
          <div class="typeBox" v-tap="{methods:toOtherPage,pageName:'item'}">
            <div class="typeIcon search3"></div>
            <div class="typeTitle font-t3">试题库</div>
          </div>
          <div class="typeBox">
            <div class="typeIcon search4" v-tap="{methods:toOtherPage,pageName:'overseas'}"></div>
            <div class="typeTitle font-t3">去留学</div>
          </div>
        </div>
        <div class="flexBox">
          <div class="typeBox" v-tap="{methods:toOtherPage,pageName:'skill'}">
            <div class="typeIcon search5"></div>
            <div class="typeTitle font-t3">技术培训</div>
          </div>
          <div class="typeBox" v-tap="{methods:toOtherPage,pageName:'job'}">
            <div class="typeIcon search6"></div>
            <div class="typeTitle font-t3">学生就业</div>
          </div>
          <div class="typeBox" v-tap="{methods:toOtherPage,pageName:'exam'}">
            <div class="typeIcon search7"></div>
            <div class="typeTitle font-t3">各种考试</div>
          </div>
          <div class="typeBox" v-tap="{methods:toOtherPage,pageName:'pressure'}">
            <div class="typeIcon search8"></div>
            <div class="typeTitle font-t3">减压空间</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="title font-t2">新闻推荐</div>
        <div class="more font-t2">更多新闻></div>
        <div class="line"></div>
        <div class="para">
          <div class="la">
          </div>
          <div class="text">
            <div class="listText font-t3"><span class="lala"></span>教育部：近五年已有约231万留学生学成归国</div>
            <div class="listText font-t3"><span class="lala"></span>清华大学自主招生为何那么“重体育”</div>
            <div class="listText font-t3"><span class="lala"></span>转变发展理念促进研究生教育内涵式发展——国务院学位办、教育部研究生司负责人答记者问</div>
            <div class="listText font-t3"><span class="lala"></span>最新调查显示：这拨大学生不到两成想当科学家</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" ref="foot">
      <div class="menuBox">
        <div class="menuIcon"></div>
        <div class="menuTitle font-t3">首页</div>
      </div>
      <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'news'}">
        <div class="menuIcon news_w"></div>
        <div class="menuTitle font-t3">新闻</div>
      </div>
      <!--<div class="menuBox">-->
        <!--<div class="menuIcon school_w"></div>-->
        <!--<div class="menuTitle font-t3">智能择校</div>-->
      <!--</div>-->
      <div class="menuBox" v-tap="{methods:toOtherPage,pageName:'mine'}">
        <div class="menuIcon mine_w"></div>
        <div class="menuTitle font-t3">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.$refs.mid.style.height = document.documentElement.clientHeight - this.$refs.foot.clientHeight -this.$refs.top.clientHeight + 'px';
    },
    methods: {
      toOtherPage(params){
        this.$router.push({
          name:params.pageName
        });
      },
      getIndex(){
          // POST用data GET用params
          this.$http({
            method:'post',
            url:'',
            params:{

            },
            responseType:'json',
            headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
                token:this.$store.state.userinfo.token
            }),
            timeout: 5000
          }).then((res)=>{
              console.log(res);
              if(res.meta.code == "200"){
                  this.$router.push({
                    name:"login"
                  })
              }
          },(err)=>{
              console.log(err);
          })
      }
    }
  }
</script>
