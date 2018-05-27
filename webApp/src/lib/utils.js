export default{
  install(Vue,options){
    Vue.prototype.goBack = function(){
      history.back()
    };
    Vue.prototype.toURL = function(url){
      location.href = url;
    };
    Vue.prototype.getImgUrl = function(url){
      return 'http://139.129.130.136:8081'+url;
    };
    Vue.prototype.handleError = function(res){
      if(res.meta.code == "4001"){
        location.href = "/";
      }
    };
    Vue.prototype.toBaidu = function(){
      location.href = "http://www.baidu.com";
    };
    Vue.prototype.toNumber = function(num,n) {
      let len = num.toString().length;
      while(len < n) {
        num = "0" + num;
        len++;
      }
      return num;
    };
  }
}
