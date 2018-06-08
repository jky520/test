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
    flex: 1;
  }

  .result{
    display: flex;
    justify-content: space-between;
    color: #333333;
    height: 1.5rem;
    border-bottom: 0.05rem solid #eeeeee;
    line-height: 1rem;
    width: 10rem;
    position: relative;
  }
  .schoolName{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    line-height: 1.5rem;
    text-indent: 1rem;
  }
  select{
    width: 4rem;
    height: 0.8rem;
    text-indent: 0.5rem;
    display: inline-block;
  }
  .suoyin{
    position: absolute;
    top: 0;
    left: 0;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #fff;
    background: #d5d5d5;
    padding:0 0.1rem;
  }
  .colorRed{
    color: red;
    padding-right: 0.5rem;
    line-height: 1.5rem;
  }
  .searchBox{
    height: 1rem;
    background: #ccc;
    padding-top: 0.2rem;
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
    width: 7rem;
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
    width: 9rem;
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
    <Header :title="'学校搜索'" :hasBack="true" ref="top"></Header>
    <div>
      <select name="major" @change="changeCategory" v-model="Id">
        <option v-for="(item,index) in schoolType" :value="item.id" v-if="item.category == $route.query.category">{{item.name}}</option>
      </select>
      <select name="city" @change="edition" v-model="cityId">
        <option value="0">学校所在地</option>
        <option v-for="(item,index) in majorType" :value="item.id">{{item.name}}</option>
      </select>
    </div>
    <div class="searchBox" ref="searchBox">
      <div class="l">
        <input class="inputBox" type="text" v-model="sVal" placeholder="学校名称"><span class="search font-t1" v-tap="{methods:guolv}">搜索</span>
      </div>
    </div>
    <div class="content" ref="content">
      <div class="searchResult">
        <div class="result" v-for="(item,index) in results" v-tap="{methods:schoolDetail,id:item.id,name:item.name}">
          <span class="font-t4 suoyin">{{toNumber(index+1,5)}}</span>
          <span class="schoolName font-t1">{{item.name}}</span>
          <span class="font-t1 colorRed">进入</span>
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
        sVal:'',
        majorType:[],
        searchData:{},
        results:[],
        schoolType:'',
        cityId:0,
        Id:0,
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{}
      }
    },
    mounted() {
      this.searchData = {
        id:this.$route.query.id,
        category:this.$route.query.category
      };
      this.getSchool();
      this.getSchoolList();
      this.getCityList();
    },
    methods: {
      getSchool(){
        this.$http({
          method:'get',
          url:URL.school,
          params:{
            category:0
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.schoolType = response.data.school;
            this.$nextTick(()=>{
              this.Id = this.$route.query.id;
            });
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      changeCategory(){
        this.searchData.id = this.Id;
        this.getSchoolList2();
      },
      edition(){
        this.getSchoolList2();
      },
      getSchoolList(){
        this.$http({
          method:'get',
          url:URL.schoolList,
          params:{
            category:this.searchData.category,
            Id:this.searchData.id,
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.results = response.data;
          }
        },(err)=>{
          console.log(err);
        })
      },
      getCityList(){
        this.$http({
          method:'get',
          url:URL.cityList,
          params:{
            category:this.searchData.category,
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            let citys = response.data;
            this.majorType = citys;
          }
        },(err)=>{
          console.log(err);
        })
      },
      getSchoolList2(){
        this.$http({
          method:'get',
          url:URL.schoolList2,
          params:{
            category:this.searchData.category,
            Id:this.searchData.id,
            cityId:this.cityId
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.results = response.data;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      },
      schoolDetail(params){
        this.pageUrl('schoolDetail',{
          schoolId:params.id,
          name:params.name
        });
        // this.$router.push({
        //   name:'schoolDetail',
        //   query:{
        //     schoolId:params.id,
        //     name:params.name
        //   }
        // })
      },
      guolv(){
        this.$http({
          method:'get',
          url:URL.base + 'school/search',
          params:{
            name:this.sVal
          },
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.results = response.data;
          }else{
            this.handleError(response)
          }
        },(err)=>{
          console.log(err);
        })
      }
    },
    computed:{

    }
  }
</script>
