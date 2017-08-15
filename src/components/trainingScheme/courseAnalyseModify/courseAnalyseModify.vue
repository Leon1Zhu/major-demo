<template>
    <div class="courseAnalyseModify">
      <div id="coursePanel1" class="grayPanel panel courseAnalyse">
        <div id="courseDiv1" class="courseAnalyseTitle" style="float: left; margin-bottom: 0px; min-width: 20%;width: 35%;">
          <div id="courseTitle1" class=" font-size-14" style="float:left;">通识通修课程  ——  职业基本能力</div>
        </div>
        <div style="float:left;" class="contentData font-size-12">尚未添加课程</div>
      </div>

      <div id="coursePanel2" class="grayPanel panel courseAnalyse">
        <div id="courseDiv2" class="courseAnalyseTitle" style="float: left; margin-bottom: 0px; min-width: 20%;width: 35%;">
          <div id="courseTitle2" class=" font-size-14" style="float:left;">技术平台课程  ——  职业通用能力</div>
        </div>
        <!--<div style="float:left;" class="contentData font-size-12">尚未添加课程</div>-->
        <div class="course-info" style="clear: both;margin-top: 3%">
          <Collapse v-model="value1">
            <Panel name="1">
              Objective-C程序设计语言
              <Poptip trigger="hover" title="提示标题" content="编辑课程内容" placement="left">
                <div class="ivu-icon ivu-icon-edit" @click="dosomething($event,'Objective-C程序设计语言');"></div>
              </Poptip>

              <div slot="content">
                <div class="course-content">
                  <div class="content-item">
                    <label>职业能力:</label>
                    <div class="item-ability">点击<span class="content-span" style="color: #5cadff;" @click="dosomething($event,'Objective-C程序设计语言');">编辑</span>，填写内容</div>
                  </div>
                  <div class="content-item">
                    <label>学习内容分析:</label>
                    <div class="item-ability">点击<span class="content-span" style="color: #5cadff;" @click="dosomething($event,'Objective-C程序设计语言');">编辑</span>，填写内容</div>
                  </div>
                </div>
              </div>
            </Panel>
            <Panel name="2">
              高等数学
              <Poptip trigger="hover" title="提示标题" content="编辑课程内容" placement="left">
                <div class="ivu-icon ivu-icon-edit" @click="dosomething($event,'Objective-C程序设计语言');"> </div>
              </Poptip>
              <div slot="content">
                <div class="course-content">
                  <div class="content-item">
                    <label>职业能力:</label>
                    <div class="item-ability">点击<span class="content-span" style="color: #5cadff;" @click="dosomething($event,'Objective-C程序设计语言');">编辑</span>，填写内容</div>
                  </div>
                  <div class="content-item">
                    <label>学习内容分析:</label>
                    <div class="item-ability">点击<span class="content-span" style="color: #5cadff;" @click="dosomething($event,'Objective-C程序设计语言');">编辑</span>，填写内容</div>
                  </div>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>

      <div id="coursePanel3" class="grayPanel panel courseAnalyse">
        <div id="courseDiv3" class="courseAnalyseTitle" style="float: left; margin-bottom: 0px; min-width: 20%;width: 35%;">
          <div id="courseTitle3" class=" font-size-14" style="float:left;">专项能力课程  ——  职业专项能力</div>
        </div>
        <div style="float:left;" class="contentData font-size-12">尚未添加课程</div>
      </div>

      <div id="coursePanel4" class="grayPanel panel courseAnalyse">
        <div id="courseDiv4" class="courseAnalyseTitle" style="float: left; margin-bottom: 0px; min-width: 20%;width: 35%;">
          <div id="courseTitle4" class=" font-size-14" style="float:left;">个性化学习课程  ——  职业提升能力</div>
        </div>
        <!--<div style="float:left;" class="contentData font-size-12">尚未添加课程</div>-->
        <div class="course-info" style="clear: both;margin-top: 3%">
          <Collapse v-model="value2">
            <Panel name="3">
              Objective-C程序设计语言
              <Poptip trigger="hover" title="提示标题" content="编辑课程内容" placement="left">
                <div class="ivu-icon ivu-icon-edit"  @click="dosomething($event,'Objective-C程序设计语言')"></div>
              </Poptip>

              <div slot="content">
                <div class="course-content">
                  <div class="content-item">
                    <label>职业能力</label>
                    <div class="item-ability">点击<span class="content-span" style="color: #5cadff;" @click="dosomething($event,'Objective-C程序设计语言');">编辑</span>，填写内容</div>
                  </div>
                  <div class="content-item">
                    <label>学习内容分析</label>
                    <div class="item-ability">点击<span class="content-span" style="color: #5cadff;" @click="dosomething($event,'Objective-C程序设计语言');">编辑</span>，填写内容</div>
                  </div>
                </div>
              </div>
            </Panel>
            <Panel name="4">
              高等数学
              <Poptip trigger="hover" title="提示标题" content="编辑课程内容" placement="left">
                <div class="ivu-icon ivu-icon-edit" @click="dosomething($event)"></div>
              </Poptip>
              <div slot="content">
                <div class="course-content">
                  <div class="content-item">
                    <label>职业能力</label>
                    <div class="item-ability">点击<span class="content-span" style="color: #5cadff;" @click="dosomething($event,'Objective-C程序设计语言');">编辑</span>，填写内容</div>
                  </div>
                  <div class="content-item">
                    <label>学习内容分析</label>
                    <div class="item-ability">点击<span class="content-span" style="color: #5cadff;" @click="dosomething($event,'Objective-C程序设计语言');">编辑</span>，填写内容</div>
                  </div>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>


      <div>
        <mu-drawer right :docked="docked" :open="modal" >
            <div class="drawer-title"><span class="title-text">课程与能力分析</span><span class="close-icon" @click="modal=false"><Icon type="close-round"></Icon></span></div>
            <div class="drawer-content">
              <div class="drawer-course-item" >
                <i class="iconfont icon-bookmarkwhite"  ></i>
                <span class="course-item-text">课程名称</span>
                <span style="color: black;font-weight: 700;margin-left: 4%;">《{{courseName}}》</span>
              </div>
              <div class="divider"></div>
              <div class="drawer-course-item" >
                <i class="iconfont icon-bookmarkwhite"  ></i>
                <span class="course-item-text">职业能力</span>
                <Select style="margin-top: 3%;width: 95%;" class="course-item-type" v-model="courseItem.courseAblity" placeholder="请选择职业能力">
                 <!-- <Option v-for="item in depType" :value="item.value" :key="item">{{ item.label }}</Option>-->
                </Select>
              </div>
              <div class="divider"></div>
              <div class="drawer-course-item" >
                <i class="iconfont icon-bookmarkwhite"  ></i>
                <span class="course-item-text">职业能力分析</span>
                <Input style="margin-top: 3%;width: 95%;" v-model="courseItem.analyze" type="textarea" :rows="4" placeholder="请输入..."></Input>
              </div>
              <div class="drawer-bottom">
                <div class="divider"></div>
                <div class="drawer-submit-button animateClass1">提交</div>
              </div>
            </div>
        </mu-drawer>
      </div>
    </div>
</template>

<script>
import './courseAnalyseModify.scss'
    export default{
        data(){
            return {
              value1: ['1','2'],
              value2: ['3','4'],
              modal:false,
              docked:false,
              courseName:null,
              courseItem:{},
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          dosomething(ev,courseName){
            this.courseName = courseName;
            ev.stopPropagation()
            this.modal=true
          }
        }
    }
</script>
