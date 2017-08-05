<template>
  <div class="periodRatio">
    <div id="coursePanel1" class="grayPanel panel courseAnalyse">
      <div id="courseDiv1" class="courseAnalyseTitle" style="margin-bottom: 6px; ">
        <div id="courseTitle1" class=" font-size-14" >通识通修课程</div>
      </div>

    </div>

    <div id="coursePanel2" class="grayPanel panel courseAnalyse">
      <div id="courseDiv2" class="courseAnalyseTitle" style=" margin-bottom: 6px; ">
        <div id="courseTitle2" class=" font-size-14" >技术平台课</div>
      </div>

    </div>

    <div id="coursePanel3" class="grayPanel panel courseAnalyse">
      <div id="courseDiv3" class="courseAnalyseTitle" style=" margin-bottom: 6px;">
        <div id="courseTitle3" class=" font-size-14" >专项能力课程</div>
      </div>
      <div class="course-info" style="clear: both;margin-top: 2%">
        <Collapse v-model="value2">
          <Panel name="2">
            高等数学
            <span style="margin-left: 20%;">学时14/学分24</span>
            <Poptip trigger="hover" title="提示标题" content="编辑课程内容" placement="left">
              <div class="ivu-icon ivu-icon-edit" @click="dosomething($event)"></div>
            </Poptip>
            <div slot="content">
              <div class="course-content">
                <div class="content-item">
                  <label>课程简介:</label>
                  <div class="item-ability">点击<span class="content-span" style="color: red;">编辑</span>，填写内容</div>
                </div>
                <div class="content-item">
                  <label>课程目标:</label>
                  <div class="item-ability">点击<span class="content-span" style="color: red;">编辑</span>，填写内容</div>
                </div>
                <div class="content-item">
                  <label>课程内容:</label>
                  <div class="item-ability">点击<span class="content-span" style="color: red;">编辑</span>，填写内容</div>
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>


    <div id="coursePanel4" class="grayPanel panel courseAnalyse">
      <div id="courseDiv4" class="courseAnalyseTitle" style="margin-bottom: 6px;">
        <div id="courseTitle4" class=" font-size-14" >个性化学习课程</div>
      </div>
      <div class="course-info" style="clear: both;margin-top: 2%">
        <Collapse v-model="value1">
          <Panel name="1">
            Objective-C程序设计语言
            <span style="margin-left: 20%;">学时14/学分24</span>
            <Poptip trigger="hover" title="提示标题" content="编辑课程内容" placement="left">
              <div class="ivu-icon ivu-icon-edit"></div>
            </Poptip>

            <div slot="content">
              <div class="course-content">
                <div class="content-item">
                  <label>课程简介:</label>
                  <div class="item-ability">点击<span class="content-span" style="color: red;">编辑</span>，填写内容</div>
                </div>
                <div class="content-item">
                  <label>课程目标:</label>
                  <div class="item-ability">点击<span class="content-span" style="color: red;">编辑</span>，填写内容</div>
                </div>
                <div class="content-item">
                  <label>课程内容:</label>
                  <div class="item-ability">点击<span class="content-span" style="color: red;">编辑</span>，填写内容</div>
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  </div>
</template>

<script>
  import './courseBriefModify.scss'
  export default{
    data(){
      return {
        value1: '1',
        value2: '2'
      }
    },
    components: {},
    created(){
    },
    mounted(){
    },
    methods: {}
  }
</script>
