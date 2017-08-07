/**
 * Created by zhuliang on 2017/8/7.
 */
import api from './index'

var baseUrl = '/api/course-groups'

export  default {
  addNewCourseGroup : function(courseGroup){
      return api.post(baseUrl,courseGroup,{})
  },
  getAllCourseGroup : function(){
    return api.get(baseUrl,{})
  }
}
