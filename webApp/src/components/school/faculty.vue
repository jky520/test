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
  .title2{
    font-weight: bold;
    border-left: 0.2rem solid #c13c3d;
    text-indent: 0.2rem;
    margin: 0.53rem 0.44rem 0.25rem 0.44rem;
    display: inline-block;
    height: 0.37rem;
  }
  .listBox{
    width: 10rem;
    margin: 0 auto;
    position: relative;
  }
  .listBox:after{
    content: ' ';
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    display: block;
    clear: both;
  }
  .list2{
    background: #f4f4f4;
    float: left;
    width: 4.5rem;
    height: 0.7rem;
    line-height: 0.7rem;
    margin: 0.1rem 0.1rem;
    text-align: center;
  }
</style>
<template>
  <div class="view">
    <Header :title="'院系详情'" :hasBack="true" ref="top"></Header>
    <div class="content" ref="content">
      <div class="title2 font-t2">学校院系</div>
      <div class="listBox">
        <div class="list2 font-t3" v-for="(item,index) in faculty" v-tap="{methods:toDepartment,id:item.id,schoolId:item.schoolId}">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import URL from '../../lib/api';
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          apeed:500
        },
        image: [],
        zsxx:[],
        schoolId:0,
        schoolInfo:{},
        degree:[],
        degreeText:'',
        nature:'',
        faculty:[],
        major:[],
        attentioncount:0,
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
        school:{}
      }
    },
    mounted() {
      this.schoolId = this.$route.query.schoolId;
      this.getSchoolDetail();
    },
    methods: {
      getSchoolDetail(){
        this.$http({
          method:'get',
          url:URL.schoolDetail+this.schoolId+"/schoolInformation",
          params:{},
          responseType:'json',
          headers: Object.assign({'X-Requested-With': 'XMLHttpRequest'},{
            token:this.userInfo.token
          }),
        }).then((res)=>{
          let response = res.data;
          if(response.meta.code == "200"){
            this.school = response.data;
            this.faculty = response.data.faculty;
          }
        },(err)=>{
          console.log(err);
        })
      },
      toDepartment(params){
        this.pageUrl('schoolDepartment',{
          id:params.id,
          schoolId:params.schoolId
        });
        // this.$router.push({
        //   name:'schoolDepartment',
        //   query:{
        //     id:params.id,
        //     schoolId:params.schoolId
        //   }
        // })
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>
