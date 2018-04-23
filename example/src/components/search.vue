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
</style>
<template>
  <div class="view">
    <mt-search v-model="sVal"></mt-search>
  </div>
</template>

<script>
  import URL from '../lib/api';
  export default {
    data() {
      return {
        sVal:''
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>
