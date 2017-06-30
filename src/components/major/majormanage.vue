<template>
  <div class="major-manage">
    <div class="left-dep">
      <Menu :theme="theme3" active-name="1">
        <Menu-item name="7" @click="getMajorData('All')">
          <Icon type="document-text"></Icon>
          全部
        </Menu-item>
        <Menu-item name="1" @click="getMajorData('All')">
          <Icon type="document-text"></Icon>
          计算机与软件学院
        </Menu-item>
        <Menu-item name="3" @click="getMajorData('All')">
          <Icon type="chatbubbles"></Icon>
          机械学院
        </Menu-item>
        <Menu-item name="4" @click="getMajorData('All')">
          <Icon type="chatbubbles"></Icon>
          能源与电器学院
        </Menu-item>
        <Menu-item name="5" @click="getMajorData('All')">
          <Icon type="chatbubbles"></Icon>
          航天学院
        </Menu-item>
        <Menu-item name="6" @click="getMajorData('All')">
          <Icon type="chatbubbles"></Icon>
          国际教育学院
        </Menu-item>
      </Menu>
    </div>
    <div class="right-major">
      <Button type="primary" @click="modal1 = true">新增专业</Button>
      <div class="major-table">
        <Table height="400" :columns="columns1" :data="data2"></Table>
      </div>
    </div>
    <Modal
      v-model="modal1"
      title="新增专业"
      @on-ok="ok"
      @on-cancel="cancel">
      <Form :model="formItem" :label-width="80">
        <Form-item label="专业编码">
          <Input v-model="formItem.majorNumber" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="专业名称">
          <Input v-model="formItem.majorName" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="专业带头人">
          <Select v-model="formItem.userLoginName" placeholder="请选择" filterable>
            <Option value="beijing" label="北京市">
              <span>杨静丽</span>
              <span style="float:right;color:#ccc">2005100441</span>
            </Option>
            <Option value="beijing" label="北京市">
              <span>朱亮</span>
              <span style="float:right;color:#ccc">1402753119</span>
            </Option>
            <Option value="beijing" label="北京市">
              <span>赵刚</span>
              <span style="float:right;color:#ccc">1402753117</span>
            </Option>
          </Select>
        </Form-item>

        <Form-item label="单选框">
          <Radio-group v-model="formItem.radio">
            <Radio label="male">启用</Radio>
            <Radio label="female">停用</Radio>
          </Radio-group>
        </Form-item>
        </Form-item>
      </Form>
    </Modal>
  </div>
</template>
<script>
  export default{
    props: {},
    data () {
      return {
        majorDep: '',
        modal1: false,
        theme3: 'light',
        formItem: {
          majorNumber: '',
          majorName: '',
          userLoginName: '',
          radio: 'male',
        },
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      console.log(params);
                      /* this.show(params.index)*/
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      console.log(params);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data2: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          }, {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    created () {
        // 初始化的时候先获取到所有的专业的信息
    },
    methods: {
      ok () {
      },
      cancel () {
        this.formItem = {
          majorNumber: '',
          majorName: '',
          userLoginName: '',
          radio: 'male',
        }
      },
      changeDepData (depNumber) {
        this.getMajorData(depNumber);
      },
      getMajorData (depNumber) {

      },
      insertMajorData () {

      },
      deleteMajorData () {

      },
      updateMajorData () {

      }
    },
    components: {}
  };

</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .major-manage {
    padding: 10px;
    display: flex;
    .left-dep {
      flex: 1 1 10%;
    }
    .right-major {
      margin-left: 2%;
      flex: 1 1 88%;
      .major-table {
        margin-top: 8px;
      }
    }
  }
</style>
