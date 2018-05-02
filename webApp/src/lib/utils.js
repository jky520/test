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
  }
}
