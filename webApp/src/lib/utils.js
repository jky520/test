export default{
  install(Vue,options){
    Vue.prototype.goBack = function(){
      history.back()
    };
    Vue.prototype.toURL = function(url){
      location.href = url;
    }
  }
}
