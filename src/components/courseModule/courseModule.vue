<template>
    <div class="courseModule">
        <div class="moduleMenu">
          <Menu  active-name="1">
            <Menu-group title="课程模块列表">
              <Menu-item name="1">
                <Icon type="document-text"></Icon>
                通识通修课程
              </Menu-item>
              <Menu-item name="2">
                <Icon type="chatbubbles"></Icon>
                技术平台课程
              </Menu-item>
              <Menu-item name="3">
                <Icon type="document-text"></Icon>
                专项能力课程
              </Menu-item>
              <Menu-item name="4">
                <Icon type="chatbubbles"></Icon>
                个性化学习课程
              </Menu-item>
            </Menu-group>
          </Menu>
        </div>
    </div>
</template>

<script>
import './courseModule.scss'
    export default{
        data(){
            return {}
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
