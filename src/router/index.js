import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
const mainPage = resolve => require(['@/components/mainPage/mainPage'], resolve);
const departentManage = resolve => require(['@/components/departmentManage/departmentManage'], resolve);
const courseModule = resolve => require(['@/components/courseModule/courseModule'], resolve);

const courselibrarymanage = resolve => require(['@/components/major/courselibrarymanage'], resolve);
const majormanage = resolve => require(['@/components/major/majormanage'], resolve);
const teachermanage = resolve => require(['@/components/major/teachermanage'], resolve);

export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    /*{path: '/', component: mainPage},*/
    {path: '*', name: '404', component: notFound},
    {path: '/mainPage', name: 'mainPage', component: mainPage,
      children: [
        {
          path: '/departentManage',
          component: departentManage
        },
        {
          path: '/courseModule',
          component: courseModule
        },
        {
          path: '/courselibrarymanage',
          component: courselibrarymanage
        },
        {
          path: '/majormanage',
          component: majormanage
        },
        {
          path: '/teachermanage',
          component: teachermanage
        }
      ]
    }
  ]
})
