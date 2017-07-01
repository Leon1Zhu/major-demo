/**
 * Created by zhuliang on 2017/7/1.
 */
const traningmainPage = resolve => require(['@/components/trainingScheme/main'], resolve);

const traningrouter = {
  path: '/traningmainPage',
  component: traningmainPage
}
export default traningrouter
