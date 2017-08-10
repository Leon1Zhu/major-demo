/**
 * Created by zhuliang on 2017/8/7.
 */
import api from './index'

var baseUrl = '/api/course-groups'
var groupItem = '/api/course-group-items/getItems'
var manageItem = '/api/course-group-items/deleteItem'

export  default {
  addNewCourseGroup : function(courseGroup){
      return api.post(baseUrl,courseGroup,{})
  },
  getAllCourseGroup : function(){
      return api.get(baseUrl,{})
  },
  getItemListByGroupId : function(id){
       return api.get(groupItem+'/'+id,{})
  },
  manageItem :function(groupId,courseids,type){
    let params={
        groupid:groupId,
        courseids:courseids.join('&'),
        type:type

    }
    return api.delete(manageItem,params)
  }
}
