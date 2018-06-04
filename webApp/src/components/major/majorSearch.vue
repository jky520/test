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
  .content{
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex: 1
  }
  .title2{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
    display: inline-block;
    height: 0.37rem;
  }
  .title3{
    margin: 0 0.44rem 0 0.25rem;
    display: inline-block;
    height: 0.37rem;
  }
  .marjorType li{
    border-left: 0.1rem solid #082b65;
    margin: 0.3rem 0;
    text-indent: 0.2rem;
  }
  .major{
    color:#2a669b;
    display: inline-block;
    padding: 0 0.3rem;
  }
  .list{
    padding: 0.1rem 0.3rem;
    color:#2a669b;
  }
  select{
    height: 0.8rem;
    width: 4rem;
  }
  .toTop{
    position: fixed;
    bottom: 1rem;
    right: 0.5rem;
    width: 0.7rem;
    height: 0.7rem;
    background-image: url(../../styles/images/icon_top.png);
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .searchBox{
    height: 1rem;
    background: #ccc;
    padding-top: 0.5rem;
  }
  .search{
    background: #b65822;
    color: #fff;
    width: 2rem;
    display: block;
    float: left;
    vertical-align: middle;
    text-align: center;
    height: 0.7rem;
    line-height: 0.7rem;
  }
  .inputBox{
    width: 6rem;
    font-size: 0.4rem;
    border: 0;
    outline: none;
    padding: 0;
    margin: 0;
    display: block;
    float: left;
    vertical-align: middle;
    height: 0.7rem;
    line-height: 0.7rem;
    text-indent: 0.3rem;
  }
  .l{
    width: 8rem;
    height: 0.7rem;
    margin: 0 auto;
    -webkit-border-radius: 0.35rem;
    -moz-border-radius: 0.35rem;
    border-radius: 0.35rem;
    overflow: hidden;
  }
</style>
<template>
  <div class="view">
    <Header :title="'找专业'" :hasBack="true"></Header>
    <div class="searchBox" ref="searchBox">
      <div class="l">
        <input class="inputBox" type="text" v-model="sVal" placeholder="专业名称"><span class="search font-t1" v-tap="{methods:guolv}">搜索</span>
      </div>
    </div>
    <select name="major" @change="changeCategory" v-model="Id">
      <option v-for="(item,index) in marjorArr" :value="item.id">{{item.name}}</option>
    </select>
    <div class="content" ref="content">
      <div class="title2 font-t2">专业目录</div>
      <div class="listBox">
        <div class="major font-t3" v-for="(item,index) in majorList" @click="goAnchor('#anchor-'+index)">{{item.name}}</div>
      </div>
      <div class="listBox">
        <div class="fenlei" v-for="(item,index) in majorList" :id="'anchor-'+index" v-if="majorList.length>0">
          <div class="title2 font-t2">{{item.name}}</div>
          <div class="feileiBox" v-for="item2 in item.subs" v-if="item.subs.length>0">
            <div class="title3 font-t2">{{item2.name}}</div>
            <div class="listBox" v-if="item2.subs.length>0">
              <div class="list font-t3" v-for="item3 in item2.subs" v-tap="{methods:toDetail,name:item3.name,id:item3.id}">{{item3.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toTop" v-tap="{methods:toTop}"></div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  export default {
    data() {
      return {
        sVal:'',
        majorList:[],
        Id:0,
        marjorArr:[{
          "name":"专科专业",
          "id":"0"
        },{
          "name":"本科专业",
          "id":"1"
        },{
          "name":"研究生专业",
          "id":"2"
        },{
          "name":"海外院校专业",
          "id":"3"
        }],
        majorId:0,
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.getMsg();
      this.majorId = this.$route.query.majorId;
    },
    methods: {
      changeCategory(){
        this.majorId = this.Id;
        this.getMsg();
      },
      guolv(){

      },
      getMsg(){
        this.$http({
          method: 'get',
          url: URL.majorCategory+this.majorId,
          params: {},
          responseType: 'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          })
        }).then((res) => {
          let response = res.data;
          if (response.meta.code == "200") {
            this.majorList = response.data;
          }else{
            this.handleError(response)
          }
        }, (err) => {
          console.log(err);
        })
      },
      goAnchor(selector) {
        let anchor = this.$refs.content.querySelector(selector);
        this.$nextTick(()=>{
          this.$refs.content.scrollTop = anchor.offsetTop - 150;
        });
      },
      toTop(){
        this.$refs.content.scrollTop = 0;
      },
      toDetail(params){
        this.$router.push({
          name:'majorInfo',
          query:{
            name:params.name,
            id:params.id
          }
        })
      }
    }
  }
</script>

