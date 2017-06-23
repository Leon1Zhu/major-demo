<template>
    <div class="departmentManage">
      <div class="button-div">
        <Button class="add-dep-button" type="info" @click.native="managedepartment">新增部门</Button>
      </div>
      <div class="department-content">
        <Card :key="index" style="width:320px"  v-for="(department,index) in departmentInfo" class="departcard">
          <div style="text-align:center">
            <p  class="font-size-18" style="color: black;">{{department.depName}}</p>
            <p >部门类型:{{department.depType}}</p>
            <p >部门简称:{{department.depAbbreviation}}</p>
            <p >创建时间：{{department.createTime}}</p>
            <i class="iconfont icon-bianji pointer font-size-22"  @click="managedepartment(department)"></i>
            <i class="iconfont icon-shanchu pointer font-size-22" @click="deleteDep(department)"></i>
          </div>
        </Card>
      </div>
      <!--新增，修改部门弹出框-->
      <Modal
        title="部门管理"
        v-model="modaldepartment"
        :mask-closable="false">
        <Input class="dep-info-model" v-model="depItem.depName" placeholder="部门名称" ></Input>
        <Input class="dep-info-model" v-model="depItem.depAbbreviation" placeholder="部门简称" ></Input>
        <Select class="dep-info-model" v-model="depItem.depType">
          <Option v-for="item in depType" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
      </Modal>
    </div>
</template>

<script>
import './departmentManage.scss'
    export default{
        data(){
            return {
                departmentInfo:[
                  {
                      id:1,
                      depName:"计算机与软件学院",
                      depType:"教学部",
                      depCddwNo:"1",
                      depAbbreviation:"计软院",
                      depSort:"1",
                      createTime:"2017-06-21"
                  },
                  {
                    id:2,
                    depName:"机械工程学院",
                    depType:"行政部",
                    depCddwNo:"2",
                    depAbbreviation:"机械院",
                    depSort:"2",
                    createTime:"2017-06-21"
                  },
                  {
                    id:3,
                    depName:"国际教育学院",
                    depType:"教学部",
                    depCddwNo:"3",
                    depAbbreviation:"国教院",
                    depSort:"3",
                    createTime:"2017-06-21"
                  },
                  {
                    id:4,
                    depName:"航空航天学院",
                    depType:"教学部",
                    depCddwNo:"4",
                    depAbbreviation:"航天院",
                    depSort:"4",
                    createTime:"2017-06-21"
                  },
                ],
              depItem: {
              },
              modaldepartment:false,
              depType:departmentType,
            }
        },
        components: {},
        created(){

        },
        mounted(){
        },
        methods: {
          managedepartment(val){
              this.modaldepartment = true
          },
          deleteDep(val){
              this.$confirm("删除确认",'确认删除'+val.depName+'吗？',function(){console.log("sure")},function(){console.log("cancle")})
          }
        }
    }
</script>
