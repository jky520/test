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
    overflow: hidden;
  }
  .bdMap{
    height:8rem;
    width: 10rem;
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
</style>
<template>
    <div class="view">
      <div ref="top" class="topBox">
        <div class="back" v-tap="{methods:goBack}"></div>
        <div class="title font-h3">学校地址</div>
      </div>
      <div class="bdMap" id="bdMap" ref="bdMap"></div>
    </div>
</template>

<script>
    import URL from '../lib/api';

    export default {
        data() {
            return {

            }
        },
        mounted() {
          let map = new BMap.Map("bdMap");
          let local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
          });
          local.search("贵州大学");
          this.$refs.bdMap.style.height = document.documentElement.clientHeight - this.$refs.top.clientHeight + 'px';
        },
        methods: {}
    }
</script>

