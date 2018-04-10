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
  .contentBox{
    overflow-y: scroll;
  }
  .address{
    display: inline-block;
    color: #fff;
    text-indent: 0.42rem;
    line-height: 1.46rem;
  }
  .arrow{
    display: inline-block;
    background-image: url(../styles/images/icon_arrow.png);
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;
  }
  .searchInput{
    margin-left: 0.3rem;
    width: 5.78rem;
    height: 0.81rem;
    vertical-align: middle;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    color: #000;
    text-indent: 0.9rem;
    border: 0;
    background-image: url(../styles/images/icon_glass.jpg);
    background-repeat: no-repeat;
    background-position: 0.3rem center;
    -webkit-background-size: 0.5rem 0.5rem;
    background-size: 0.5rem 0.5rem;
  }
  .banner{
    height: 5rem;
    width: 10rem;
    background-image: url(../styles/images/icon_banner.png);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .title{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    height: 0.33rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
  }
  .line{
    height: 0.13rem;
    background: #f3f3f3;
    width: 10rem;
  }
  .flexBox{
    width: 8.2rem;
    height: 1.8rem;
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
    background: url("../styles/images/icon_type.png") no-repeat center center;
    -webkit-background-size: 1.25rem 1.25rem;
    background-size: 1.25rem 1.25rem;
  }
  .typeTitle{
    line-height: 0.55rem;
    height: 0.55rem;
    text-align: center;
  }
  .footer{
    height: 1.3rem;
    background-color: black;
    color: #666666;
  }
</style>

<template>
  <div class="view">
    <div ref="top" class="topBox">
      <div class="address font-t3">{{address}}<span class="arrow"></span>
        <input type="text" class="searchInput font-t1" placeholder="搜索">
      </div>
    </div>
    <div class="contentBox" ref="mid">
      <div class="banner"></div>
      <div class="content">
        <div class="title font-t2">精准·高校·院校搜索</div>
        <div class="line"></div>
        <div class="flexBox">
          <div class="typeBox">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">找学校</div>
          </div>
          <div class="typeBox">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">找专业</div>
          </div>
          <div class="typeBox">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">试题库</div>
          </div>
          <div class="typeBox">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">去留学</div>
          </div>
        </div>
        <div class="flexBox">
          <div class="typeBox">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">技术培训</div>
          </div>
          <div class="typeBox">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">学生就业</div>
          </div>
          <div class="typeBox">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">各种考试</div>
          </div>
          <div class="typeBox">
            <div class="typeIcon"></div>
            <div class="typeTitle font-t3">减压空间</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="title font-t2">新闻推荐</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="footer" ref="foot">
      <div class="menuBox">
        <div class="menuIcon"></div>
        <div class="menuTitle">首页</div>
      </div>
      <div class="menuBox">
        <div class="menuIcon"></div>
        <div class="menuTitle">新闻</div>
      </div>
      <div class="menuBox">
        <div class="menuIcon"></div>
        <div class="menuTitle">智能择校</div>
      </div>
      <div class="menuBox">
        <div class="menuIcon"></div>
        <div class="menuTitle">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        address:'贵阳市'
      }
    },
    mounted() {
      this.$refs.mid.style.height = document.documentElement.clientHeight - this.$refs.foot.clientHeight -this.$refs.top.clientHeight + 'px';
    },
    methods: {}
  }
</script>
