import Vue from 'vue'
import App from './App'
/*import store from './store/index'*/
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import {Dialog,Button} from 'element-ui'
import './common/css/reset.css'
import './filter'
import './common/css/fontClass.css'
import './common/css/style.scss'
import './globalFun'
import './mainFun'
import api from './api/index'

Vue.use(Dialog)
Vue.use(Button)
Vue.use(iView);
Vue.config.productionTip = false
/* var refushTokenT =function(){
  api.post(SERVICEURL+"/api/authenticate",{username:"admin",password:"admin"},{}).then((response)=>{
    if(isNull(response.data.id_token)){
      alert("token获取出错，请刷新页面重试！")
    }else{
      TOKEN = response.data.id_token
      TOKENTIME = new Date();


    }
  }).catch((response)=>{
    alert("token获取出错，请刷新页面重试！")
  })
}*/
refushToken()
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  app.$Loading.start();
  next()
  app.$Loading.finish();
})
/*
new Vue({
  router,
  /!* store,*!/
  render: h => h(App),
}).$mount('#app')
*/
