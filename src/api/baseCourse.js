/**
 * Created by zhuliang on 2017/8/10.
 */
import api from './index'

var  baseUrl = '/api/base-courses'

export default {
  getAllcourseWithNoPage : function(){
    return api.get(baseUrl,{})
  }
}
