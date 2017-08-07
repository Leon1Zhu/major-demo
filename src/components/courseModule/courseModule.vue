<template>
    <div class="courseModule">
        <div class="moduleMenu">
          <Menu  active-name="1">
            <Menu-group title="课程模块列表">
              <Menu-item name="1" @click.native="changeModule()">
                <Icon type="document-text"></Icon>
                通识通修课程
              </Menu-item>
              <Menu-item name="2" @click.native="changeModule()">
                <Icon type="chatbubbles"></Icon>
                技术平台课程
              </Menu-item>
              <Menu-item name="3" @click.native="changeModule()">
                <Icon type="document-text"></Icon>
                专项能力课程
              </Menu-item>
              <Menu-item name="4" @click.native="changeModule()">
                <Icon type="chatbubbles"></Icon>
                个性化学习课程
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
      <Modal
        title="课程模块管理"
        v-model="modalcourse"
        :mask-closable="false">
        <Input class="course-info-model" v-model="courseInfo.moduleName" placeholder="模块名称" ></Input>
        <Select class="course-info-model"   placeholder="请选择模块学年制">
          <Option v-for="item in courseYear" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
        <Select class="course-info-model"   placeholder="请选择模块学年制">
          <Option v-for="item in courseYear" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
      </Modal>
    </div>
</template>

<script>
import './courseModule.scss'
    export default{
        data(){
            return {
                coursedata:this.getCourseData(),
                courseTargetKeys:this.getTargetKeys(),
                titles:['所有课程列表', '模块已选课程列表'],
                listStyle: {
                  height: '400px',
                  width: '280px'
                },
              modalcourse:false,
              courseYear: COURSEMODULEYEAR,
              courseInfo:{},
              theme2:"light",
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          getCourseData(){
              return [{
                key: '1',
                courseNo:'1',
                courseName:"java面向对象编程",
                courseRemark:"三年制",
              },{
                key: '2',
                courseNo:'1',
                courseName:"java面向对象编程",
                courseRemark:"三年制",
              },{
                key: '3',
                courseNo:'1',
                courseName:"java面向对象编程",
                courseRemark:"三年制",
              },{
                key: '4',
                courseNo:'1',
                courseName:"java面向对象编程",
                courseRemark:"三年制",
              },{
                key: '5',
                courseNo:'1',
                courseName:"java面向对象编程",
                courseRemark:"三年制",
              },{
                key: '6',
                courseNo:'1',
                courseName:"java面向对象编程",
                courseRemark:"三年制",
              },{
                key: '7',
                courseNo:'1',
                courseName:"java面向对象编程",
                courseRemark:"三年制",
              }]
          },
          changeModule(){
           /* this.coursedata=this.getCourseData(),*/
            this.courseTargetKeys=this.getTargetKeys()
          },
          getTargetKeys(){
            return this.getCourseData().filter(() => Math.random() * 2 > 1).map(item => item.key);
          },
          render(item){
              if(isNull(item.courseRemark)) return item.courseName;
            return item.courseName + ' - ' + item.courseRemark;
          },
          reloadData(){
              //刷新数据
          },
          handleChange(targetKeys, direction, moveKeys){
            this.courseTargetKeys = targetKeys;
          }
        }
    }
</script>
