/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var baseDepUrl = "/api/base-departments";

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
  }
}
