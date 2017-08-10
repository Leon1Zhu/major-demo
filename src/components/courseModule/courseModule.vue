<template>
    <div class="courseModule">
        <div class="moduleMenu">
          <Menu  active-name="1">
            <Menu-group title="课程模块列表">
              <Menu-item v-for="item in courseGroupList" :name="item.id" @click.native="changeModule(item.id)">
                <Icon type="document-text"></Icon>
                {{item.groupName}}
              </Menu-item>
            </Menu-group>
          </Menu>
          <!--<Menu :theme="theme2">
            <Menu-group title="课程模块列表">
            </Menu-group>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                基础课程
              </template>
              <Menu-item name="1-1"  @click.native="changeModule()">通识通修课程</Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people"></Icon>
                基础课程
              </template>
              <Menu-item name="2-1"  @click.native="changeModule()">通识通修课程</Menu-item>
              <Menu-item name="2-2"  @click.native="changeModule()">通识通修课程</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                基础课程
              </template>
                <Menu-item name="3-1"  @click.native="changeModule()">通识通修课程</Menu-item>
                <Menu-item name="3-2"  @click.native="changeModule()">通识通修课程</Menu-item>
                <Menu-item name="3-3"  @click.native="changeModule()">通识通修课程</Menu-item>
            </Submenu>
          </Menu>-->
        </div>
      <div class="moduleContent">
        <div class="button-div">
          <Button class="add-dep-button" type="info" icon="plus" @click.native="modalcourse=true">新增课程模块</Button>
        </div>
        <Transfer
          :titles="titles"
          :data="coursedata"
          :list-style="listStyle"
          :target-keys="courseTargetKeys"
          :render-format="render"
          :operations="['移出课程模块','加入课程模块']"
          filterable
          @on-change="handleChange">
          <div :style="{float: 'right', margin: '5px'}">
            <i-button type="ghost" size="small" @click="reloadData">刷新</i-button>
          </div>
        </Transfer>
      </div>


      <!--新增，修改课程模块弹出框-->
      <el-dialog
        title="新增课程模块"
        :visible.sync="modalcourse"
        size="tiny"
      >
        <Input class="course-info-model" v-model="courseInfo.groupName">
        <span slot="prepend">模块名称</span>
        </Input>
        <Input class="course-info-model" v-model="courseInfo.groupType">
        <span slot="prepend">模块类型</span>
        </Input>
        <Input class="course-info-model" type="number" :number="isnumber" v-model="courseInfo.groupSort">
        <span slot="prepend">模块序列</span>
        </Input>
        <!--
       <Select class="course-info-model"   placeholder="请选择模块学年制">
         <Option v-for="item in courseYear" :value="item.value" :key="item">{{ item.label }}</Option>
       </Select>-->
        <span slot="footer" class="dialog-footer">
          <el-button @click="modalcourse = false">取 消</el-button>
          <el-button type="primary" @click="addNewCourseGrouup">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
import './courseModule.scss'
import api from '../../api/courseGroup'
import courseApi from '../../api/baseCourse'
    export default{
        data(){
            return {
                coursedata:[],
                courseTargetKeys:[],
                titles:['所有课程列表', '模块已选课程列表'],
                listStyle: {
                  height: '400px',
                  width: '280px'
                },
              modalcourse:false,
              courseYear: COURSEMODULEYEAR,
              isnumber:true,
              courseInfo:{
                groupName:'',
                groupType:'',
                groupSort:'',
              },
              courseGroupList:null,
              changItem:null,
              theme2:"light",
            }
        },
        components: {},
        created(){
            this.getAllCourseGroup()
            this.getCourseData()
        },
        mounted(){
        },
        methods: {
          getAllCourseGroup(){
              let that = this;
              api.getAllCourseGroup().then((response) =>{
                 that.courseGroupList = response.data
                that.changItem = that.courseGroupList[0].id
                that.getTargetKeys(that.changItem)
              }).catch((response)=>{
                 that.$errormsg('','课程模块列表获取出错，请稍后重试！')
              })
          },
          getCourseData(){
              var that = this;
           courseApi.getAllcourseWithNoPage().then((response)=>{
             var code =[];
             response.data.forEach(function(item){
                 item.key = ''+item.id+''
             })

             that.coursedata =response.data
            }).catch((response)=>{
              that.$errormsg("",'课程信息获取出错！');
            })
          },
          changeModule(id){
              if(this.changItem != id){
                  this.changItem = id
                this.getTargetKeys(id)
              }

          },
          getTargetKeys(id){
               let that = this;
               api.getItemListByGroupId(id).then((response)=>{
                   let itemList =[];
                   for(let i=0;i<response.data.length;i++){
                     itemList.push(''+response.data[i].course.id+'')
                   }
                 that.courseTargetKeys = itemList
               }).catch((response)=>{
                   alert("出错啦")
                 that.courseTargetKeys=[];
               })
          },
          render(item){
              if(isNull(item.courseType)) return item.courseName;
            return item.courseName + ' - ' + item.courseType;
          },
          reloadData(){
              //刷新数据
          },
          handleChange(targetKeys, direction, moveKeys){
            let that = this;
            api.manageItem(that.changItem,moveKeys,direction).then((response)=>{
              that.courseTargetKeys = targetKeys;
            })
          },
          addNewCourseGrouup(){
            let that = this;
              if(isNull(that.courseInfo.groupName) || isNull(that.courseInfo.groupType) ||isNull(that.courseInfo.groupSort)){
                  that.$warningmsg('','请先填写完整表单再进行提交！');
                  return;
              }
            api.addNewCourseGroup(that.courseInfo).then((response) =>{
                that.$successmsg('',"课程模块创建成功。")
              that.getAllCourseGroup()
              that.modalcourse=false;
            }).catch((response)=>{
                that.$errormsg('',"课程模块创建失败！")
            })
          }
        }
    }
</script>
