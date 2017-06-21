import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
const mainPage = resolve => require(['@/components/mainPage/mainPage'], resolve);
const departentManage = resolve => require(['@/components/departmentManage/departmentManage'], resolve);

export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    /*{path: '/', component: mainPage},*/
    {path: '*', name: '404', component: notFound},
    {path: '/mainPage', name: 'mainPage', component: mainPage,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/departentManage',
          component: departentManage
        }
      ]
    }
  ]
})
