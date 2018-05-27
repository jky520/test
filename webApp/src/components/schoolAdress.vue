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
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bdMap{
    -webkit-box-flex: 1;
    flex: 1;
    width: 10rem;
  }
</style>
<template>
    <div class="view">
      <Header :title="'学校地址'" :hasBack="true" ref="top"></Header>
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
          local.search(this.$store.state.searchName);
        },
        methods: {}
    }
</script>

