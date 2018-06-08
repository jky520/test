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
  iframe{
    height: 100%;
    width: 100%;
  }
</style>
<template>
  <div class="view">
    <Header :title="'在线预览'" :hasBack="true" ref="top"></Header>
    <div class="contentBox" ref="content">
      <iframe :src="showOnline($route.query.path)" class="online"></iframe>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight - this.$refs.top.$el.clientHeight + 'px';
    },
    methods: {

    }
  }
</script>

