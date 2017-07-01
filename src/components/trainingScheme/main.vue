<template>
    <div class="trainingMainPage">
      <div class="training-nav">
        <Cascader :data="casData" change-on-select placeholder="请选择版本"></Cascader>
        <Tabs value="name1" @on-click="push">
          <Tab-pane label="目标与规格" name="name1" ></Tab-pane>
          <Tab-pane label="教学安排表" name="name2"></Tab-pane>
          <Tab-pane label="职业能力分析" name="name3"></Tab-pane>
          <Tab-pane label="课程能力分析" name="courseAnalyseModify" ></Tab-pane>
          <Tab-pane label="学时学分比例" name="name5"></Tab-pane>
          <Tab-pane label="课程简介" name="name6"></Tab-pane>
        </Tabs>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
import './main.scss'
    export default{
        data(){
            return {
              casData: [{
                value: '1',
                label: '2017',
                children: [
                  {
                    value: '1-1',
                    label: '高中后'
                  },
                  {
                    value: '1-2',
                    label: '中职生'
                  },
                  {
                    value: '1-3',
                    label: '3+2'
                  }
                ]
              },{
                value: '2',
                label: '2016',
                children: [
                  {
                    value: '2-1',
                    label: '高中后'
                  },
                  {
                    value: '2-2',
                    label: '中职生'
                  },
                  {
                    value: '2-3',
                    label: '3+2'
                  }
                ]
              }, {
                value: '3',
                label: '2015',
                children: [
                  {
                    value: '3-1',
                    label: '高中后'
                  },
                  {
                    value: '3-2',
                    label: '中职生'
                  },
                  {
                    value: '3-3',
                    label: '3+2'
                  }
                ]
              }, ]
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
            push(link){
                console.log(link)
              this.$router.push({ path: link})
            }
        }
    }
</script>
