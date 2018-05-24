<style scoped>
  .topBox {
    height: 1.46rem;
    background-color: #191e29;
    position: relative;
  }

  .topTitle {
    color: #fff;
    height: 1.46rem;
    line-height: 1.46rem;
    text-align: center;
  }

  .topLogo {
    height: 1.46rem;
    position: absolute;
    top: 0;
    right: 0.2rem;
    background-image: url(../../styles/images/logo01.jpg);
    background-repeat: no-repeat;
    width: 2rem;
    -webkit-background-size: 2rem auto;
    background-size: 2rem auto;
    background-position: center center;
  }

  .back {
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
</style>
<template>
    <div ref="top" class="topBox">
      <div class="back" v-if="hasBack" v-tap="{methods:goBack}"></div>
      <div class="topTitle font-h3">{{title}}</div>
      <div class="topLogo"></div>
    </div>
</template>

<script>
  export default {
    props: ['title','hasBack'],
    data() {
      return {}
    },
    mounted() {

    },
    methods: {}
  }
</script>

