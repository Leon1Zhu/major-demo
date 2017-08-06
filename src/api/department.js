/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var baseDepUrl = "/api/base-departments";
var idurl = "/api/base-departments{/id}"


export default {
  addNewDepparment : function(depCode,depName,depType,depShotName,depSort){
    var bodyparams = {
      depCode:depCode,
      depName:depName,
      depType:depType,
      depShotName:depShotName,
      depSort:depSort
    }
    return api.post(baseDepUrl,bodyparams,{})
  },
  getAllDep: function(){
    var pageable={
      page:0,
      size:100
    }
    return api.get(baseDepUrl,{})
  },
  deleteDepartment:function(id){
      var params={
        id:id
      }
      return api.delete(baseDepUrl,params)
  }
}
