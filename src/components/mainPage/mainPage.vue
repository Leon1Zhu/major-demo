<template>
    <div class="mainPage">
      <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
          <i-col :span="spanLeft" class="layout-menu-left">
            <Menu active-name="1" theme="dark" width="auto">
              <div class="layout-logo-left"></div>
              <Menu-item name="1"  :class="{'centerClass': spanLeft < 5}"  @click.native="push('departentManage')">
                <Icon class="animateClass1" type="ios-navigate" :size="iconSize"></Icon>
                <span class="layout-text">选项 1</span>
              </Menu-item>
              <Menu-item name="2"  :class="{'centerClass': spanLeft < 5}">
                <Icon class="animateClass1" type="ios-keypad" :size="iconSize"></Icon>
                <span class="layout-text">选项 2</span>
              </Menu-item>
              <Menu-item name="3"  :class="{'centerClass': spanLeft < 5}">
                <Icon class="animateClass1" type="ios-analytics" :size="iconSize"></Icon>
                <span class="layout-text">选项 3</span>
              </Menu-item>
            </Menu>
          </i-col>
          <i-col :span="spanRight">
            <div class="layout-header">
              <i-button type="text" @click="toggleClick">
                <Icon type="navicon" size="32"></Icon>
              </i-button>
              <Menu mode="horizontal" active-name="1">
                <div class="layout-assistant">
                  <Menu-item name="1">二级导航</Menu-item>
                  <Menu-item name="2">二级导航</Menu-item>
                  <Menu-item name="3">二级导航</Menu-item>
                </div>
              </Menu>
            </div>
            <div class="layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
              </Breadcrumb>
            </div>
            <div class="layout-content">
              <router-view class="layout-content-main"></router-view>
             <!-- <div class="layout-content-main">内容区域</div>-->
            </div>
            <div class="layout-copy">
              2011-2016 &copy; TalkingData
            </div>
          </i-col>
        </Row>
      </div>
    </div>
</template>

<script>
import './mainPage.scss'
    export default{
        data(){
            return {
              spanLeft: 5,
              spanRight: 19
            }
        },
        computed: {
          iconSize () {
            return this.spanLeft === 5 ? 14 : 24;
          }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          toggleClick () {
            if (this.spanLeft === 5) {
              this.spanLeft = 2;
              this.spanRight = 22;
            } else {
              this.spanLeft = 5;
              this.spanRight = 19;
            }
          },
          push(val){
            this.$router.push({ path: val})
            return;
          }
        }
    }
</script>
