/**
 * Created by zhuliang on 2017/7/1.
 */
const traningmainPage = resolve => require(['@/components/trainingScheme/main'], resolve);
const courseAnalyseModify = resolve => require(['@/components/trainingScheme/courseAnalyseModify/courseAnalyseModify'], resolve);
const traningrouter = {
  path: '/traningmainPage',
  component: traningmainPage,
  children: [
    {
      path: '/courseAnalyseModify',
      component: courseAnalyseModify
    }
  ]
}
export default traningrouter
