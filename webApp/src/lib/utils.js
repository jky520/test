export default{
  install(Vue,options){
    Vue.prototype.goBack = function(){
      history.back()
    };
    Vue.prototype.toURL = function(url){
      location.href = url;
    };
    Vue.prototype.getImgUrl = function(url){
      return 'http://120.24.216.26'+url;
    };
    Vue.prototype.handleError = function(res){
      if(res.meta.code == "4001"){
        location.href = "/index.html#login";
      }
    };
    Vue.prototype.toBaidu = function(params){
      location.href = params.url;
    };
    Vue.prototype.toNumber = function(num,n) {
      let len = num.toString().length;
      while(len < n) {
        num = "0" + num;
        len++;
      }
      return num;
    };
    Vue.prototype.showOnline = function(url){
      return 'http://www.xdocin.com/xdoc?_func=to&_format=html&_cache=true&_xdoc='+'http://120.24.216.26'+url;
    }
  }
}
