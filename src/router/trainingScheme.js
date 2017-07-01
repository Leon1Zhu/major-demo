/**
 * Created by zhuliang on 2017/7/1.
 */
const traningmainPage = resolve => require(['@/components/trainingScheme/main'], resolve);
const courseAnalyseModify = resolve => require(['@/components/trainingScheme/courseAnalyseModify/courseAnalyseModify'], resolve);


const targetspecification = resolve => require(['@/components/trainingScheme/targetspecification'], resolve);
const teachingarrangement = resolve => require(['@/components/trainingScheme/teachingarrangement'], resolve);
const vocationalabilityanalysis = resolve => require(['@/components/trainingScheme/vocational-ability-analysis'], resolve);
const traningrouter = {
  path: '/traningmainPage',
  component: traningmainPage,
  children: [
    {
      path: '/courseAnalyseModify',
      component: courseAnalyseModify
    },
    {
      path: '/targetspecification',
      component: targetspecification
    },
    {
      path: '/teachingarrangement',
      component: teachingarrangement
    },
    {
      path: '/vocationalabilityanalysis',
      component: vocationalabilityanalysis
    },
  ]
}
export default traningrouter
