/**
 * Created by zhuliang on 2017/5/2.
 */
import  './global'
import Vue from 'vue'
import axios from 'axios'
import api from "./api/index"
axios.interceptors.request.use(
  config => {
    console.log(config.url)
    if(config.url.indexOf("/api")>-1){
     if (TOKEN) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.url = SERVICEURL+config.url;
        config.headers.Authorization = "Bearer "+TOKEN;
        console.log("发送请求!")
        console.log(config)
     }
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });


axios.interceptors.response.use(
  response => {
    console.log("收到请求")
    console.log(JSON.parse(JSON.stringify(response)))
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          refushToken();break;
        case 403:
          refushToken();break;
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });
/*global.setNoticConfig= function(title,desc,duration,key,onClose){
  let cof = {};
  if(title!=null)cof.title=title;
  if(desc!=null)cof.desc=desc;
  if(duration!=null)cof.duration=duration;
  if(key!=null)cof.key=key;
  if(onClose!=null)cof.onClose=onClose;
  return cof;
}
*/
global.refushToken=function(){
    if(TOKENTIME==null ||new Date().getTime()-TOKENTIME.getTime()>30*60*1000){
      console.log("token超时，重新获取")
      getToken()
    }else{
      console.log("token尚未过时，尚能使用")
    }
}

global.getToken =function(){
  api.post(SERVICEURL+"/api/authenticate",{username:"admin",password:"admin"},{}).then((response)=>{
    if(isNull(response.data.id_token)){
      alert("token获取出错，请刷新页面重试！")
    }else{
      TOKEN = response.data.id_token
      TOKENTIME = new Date();
    }
  }).catch((response)=>{
    alert("token获取出错，请刷新页面重试！")
  })
}
/*global.setLoginInfo=function(logininfo,rememberMe){
    USERINFO = logininfo
    ISLOGIN=true;
    if(rememberMe){
      localStorage.setItem("AlienlabnewsUserInfo",JSON.stringify(USERINFO));
    }else{
      localStorage.setItem("AlienlabnewsUserInfo",null);
      sessionStorage.setItem("AlienlabnewsUserInfo",JSON.stringify(USERINFO));
    }
}
global.checkLoginInfo=function(){
    if(JSON.parse(localStorage.getItem("AlienlabnewsUserInfo")) ||  JSON.parse(sessionStorage.getItem("AlienlabnewsUserInfo"))){
      ISLOGIN=true;
      console.log(JSON.parse(sessionStorage.getItem("AlienlabnewsUserInfo")))
      USERINFO = JSON.parse(localStorage.getItem("AlienlabnewsUserInfo"))
      if(USERINFO==null || USERINFO == ""){
        USERINFO = JSON.parse(sessionStorage.getItem("AlienlabnewsUserInfo"))
      }
      console.log(USERINFO)
    }else{
      ISLOGIN=false;
    }
}
global.loginOut=function(){
  ISLOGIN=false;
  localStorage.setItem("AlienlabnewsUserInfo",null);
  sessionStorage.setItem("AlienlabnewsUserInfo",null);
}*/

global.isNull =function (val){
  if(val===null || val === undefined || val ==="")return true;
  else return false;
}

