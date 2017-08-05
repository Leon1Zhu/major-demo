import Vue from 'vue'
import App from './App'
/*import store from './store/index'*/
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import './common/css/reset.css'
import './filter'
import './common/css/fontClass.css'
import './common/css/style.scss'
import './globalFun'
import './mainFun'


Vue.use(iView);
Vue.config.productionTip = false
refushToken()
/* eslint-disable no-new */
  const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })

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
