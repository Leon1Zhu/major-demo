<template>
    <div class="departmentManage">
      <div class="button-div">
        <Button class="add-dep-button" type="info" icon="plus" @click.native="managedepartment">新增部门</Button>
      </div>
      <div class="department-content">
        <Card :key="index" style="width:320px"  v-for="(department,index) in departmentInfo" class="departcard">
          <div style="text-align:center">
            <p  class="font-size-18" style="color: black;">{{department.depName}}</p>
            <p >部门编号:{{department.depCode}}</p>
            <p >部门类型:{{department.depType}}</p>
            <p >部门简称:{{department.depShotName}}</p>
            <i class="iconfont icon-bianji pointer font-size-22"  @click="managedepartment(department)"></i>
            <i class="iconfont icon-shanchu pointer font-size-22" @click="deleteDep(department,index)"></i>
          </div>
        </Card>
      </div>
      <!--新增，修改部门弹出框-->
      <Modal
        title="部门管理"
        v-model="modaldepartment"
        @on-ok="addNewDep"
        okText="确定"
        >
        <Input class="dep-info-model" v-model="depItem.depName">
        <span slot="prepend">部门名称</span>
        </Input>
        <Input class="dep-info-model" v-model="depItem.depShotName">
        <span slot="prepend">部门简称</span>
        </Input>
        <Input class="dep-info-model" v-model="depItem.depCode">
        <span slot="prepend">部门编码</span>
        </Input>
        <Select class="dep-info-model" v-model="depItem.depType" placeholder="请选择部门类型">
          <Option v-for="item in depType" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
      </Modal>
    </div>
</template>

<script>
import './departmentManage.scss'
import api from '../../api/department'
    export default{
        data(){
            return {
                departmentInfo:[],
              depItem: {
              },
              modaldepartment:false,
              depType:DEPARTMENTYPE,
              depItemTemp:{
                id:null,
                depCode:null,
                depName:null,
                depType:null,
                depShotName:null,
                depSort:null
              }
            }
        },
        components: {},
        created(){
            this.getAllDep()

        },
        mounted(){
        },
        methods: {
          getAllDep(){
              var that = this;
             api.getAllDep().then((response)=>{
               that.departmentInfo = response.data
             }).catch((response)=>{
                 that.$errormsg('',"部门列表获取出错！");
             })
          },
          addNewDep(){
              var that =this;
           /* depCode,depName,depType,depShotName,depSort*/
            if(isNull(that.depItem.depCode) || isNull(that.depItem.depName) || isNull(that.depItem.depType) || isNull(that.depItem.depShotName) ){
                this.$warningmsg('', "请先填写完整表单再进行提交！");
                return;
            }
            api.addNewDepparment(that.depItem.depCode,that.depItem.depName,that.depItem.depType,that.depItem.depShotName,0).then((response) => {
               this.$successmsg("","部门"+that.depItem.depName+"创建成功！");
               that.depItem={};
            }).catch((response)=>{
               this.$warningmsg("部门创建失败！");
            })
          },
          managedepartment(val){
              if(!isNull(val.depName)){
                this.depItemTemp.id=val.id
                this.depItemTemp.depCode=val.depCode
                this.depItemTemp.depName=val.depName
                this.depItemTemp.depType=val.depType
                this.depItemTemp.depShotName=val.depShotName
                this.depItemTemp.depSort=val.depSort
                console.log( this.depItemTemp)
                  this.depItem =  this.depItemTemp
              }else{
                this.depItem = {}
              }
              this.modaldepartment = true
          },
          deleteDep(val,index){
              var that = this;
              this.$confirm("删除确认",'确认删除'+val.depName+'吗？',function(){
                  api.deleteDepartment(val.id).then((response) =>{
                      that.departmentInfo.splice(index,1)
                  }).catch((response)=>{

                  })
              },function(){})
          }
        }
    }
</script>
