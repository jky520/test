<style scoped>
  .view {
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

  .content {
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex: 1
  }

  .title {
    height: 1rem;
    line-height: 1rem;
    background: #e8e8e8;
    text-indent: 0.5rem;
  }
  .infoBox{
    padding: 0.5rem;
  }
  .line{
    line-height: 0.8rem;
  }
</style>
<template>
  <div class="view">
    <Header :title="'招聘信息'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="title font-t1">{{companyName}}</div>
      <div class="infoBox font-t1">
        <div class="line" v-for="(item,index) in jobCities">
            <p>{{item.name}}</p>
            <p>{{item.require}}</p>
        </div>
      </div>
      <Review :type="6" :objId="$route.query.id"></Review>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';

  export default {
    data() {
      return {
        swiperSlides: [],
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {},
        companyName: ''
      }
    },
    mounted() {
      this.$refs.content.style.height = document.documentElement.clientHeight - this.$refs.top.$el.clientHeight + 'px';
      this.getCompany();
    },
    methods: {
      getCompany() {
        this.$http({
          method: 'get',
          url: URL.base + 'jobcity/' + this.$route.query.id + '/company',
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'}, {
            token: this.userInfo.token
          })
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.companyName = response.data[0].jobCompany[0].name;
            this.jobCities = response.data;
          } else {
            this.handleError(response)
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>

