/**
 * Created by zhuliang on 2017/4/14.
 */
import Vue from 'vue'
Vue.prototype.$infomsg = function(title,nodesc){
  this.$Notice.info({
    title: title ? title : '',
    desc: nodesc ? nodesc :  ""
  });
}
Vue.prototype.$successmsg = function(title,nodesc){
  this.$Notice.success({
    title: title ? title : '',
    desc: nodesc ? nodesc :  ""
  });
}
Vue.prototype.$warningmsg = function(title,nodesc){
  this.$Notice.warning({
    title: title ? title : '',
    desc: nodesc ? nodesc :  ""
  });
}
Vue.prototype.$errormsg = function(title,nodesc){
  this.$Notice.error({
    title: title ? title : '',
    desc: nodesc ? nodesc :  ""
  });
}

Vue.prototype.$confirm = function(title,content,surFun,canFun){
  this.$Modal.confirm({
    title: title,
    content: content,
    onOk: () => {
      surFun()
    },
    onCancel: () => {
      canFun()
    }
  });
}



