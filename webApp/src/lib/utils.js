export default{
  install(Vue,options){
    Vue.prototype.goBack = function(){
      // history.back();
      let ws=plus.webview.currentWebview();
      plus.webview.close(ws);
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
      }else if(res.meta.code == "1004"){

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
    Vue.prototype.pageUrl = function(name,data){
      let str = '/index.html#' + name;
      str = str + "?";
      for(let key in data){
        str = str + key + "=" + data[key] + "&";
      }
      str = str.substring(0,str.length-1);
      let w = window.plus.webview.create(str);
      w.show('pop-in',200);
    };
    Vue.prototype.showOnline = function(url){
      return 'http://www.xdocin.com/xdoc?_func=to&_format=html&_cache=true&_xdoc='+'http://120.24.216.26'+url;
    }
  }
}
