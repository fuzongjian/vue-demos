<template>
    <div>
      <div class="container">
        <p>NavMenu导航菜单</p>
        <div class="item-container">
          <p>顶栏</p>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="margin-bottom: 10px">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">订单管理</el-menu-item>
          </el-menu>
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b" background-color="#545c64" color="#fff" style="margin-bottom: 10px">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项一</el-menu-item>
              <el-menu-item index="2-2">选项二</el-menu-item>
              <el-menu-item index="2-3">选项三</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">订单管理</el-menu-item>
          </el-menu>
        </div>
        <div class="item-container">
          <p>侧栏</p>
          <el-menu default-active="2" @open="handleopen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="width: 200px">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项一</el-menu-item>
                <el-menu-item index="1-2">选项二</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">分组二</template>
                <el-menu-item index="1-3">选项三</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项四</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="container">
        <p>下拉菜单</p>
        <div class="item-container">
          <p>基本用法</p>
          <el-dropdown style="margin-left: 10px;margin-bottom: 10px">
            <span class="el-dropdown-link">下拉菜单<i class="el-icon-arrow-down el-icon-right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item disabled>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="container">
        <p>Steps步骤条</p>
        <div class="item-container">
          <p>基本用法</p>
          <el-steps :active="active" finish-status="success">
            <el-step title="步骤一"></el-step>
            <el-step title="步骤二"></el-step>
            <el-step title="步骤三"></el-step>
          </el-steps>
          <el-button style="margin: 10px" @click="next">下一步</el-button>
        </div>
        <div class="item-container">
          <p>带图标的步骤条</p>
          <el-steps :active="1" style="margin: 10px">
            <el-step title="步骤一" icon="el-icon-edit"></el-step>
            <el-step title="步骤二" icon="el-icon-upload"></el-step>
            <el-step title="步骤三" icon="el-icon-picture"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "element-nav",
        data(){
          return{
            activeIndex: '1',
            active: 0
          }
        },
        methods:{
          handleSelect(key,keypath){
            console.log(key,keypath)
          },
          handleopen(key,keypath){
            console.log(key,keypath)
          },
          handleClose(key,keypath){
            console.log(key,keypath)
          },
          next(){
            if(this.active++ > 2){
              this.active=0
            }
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheetstylus">
  .container
    margin 10px
    border 1px solid red
    p
      margin-top 10px
      text-align center
      font-weight bold
      font-size 20px
    .item-container
      margin 10px
      border 1px solid blue
      p
        margin 10px auto
        text-align center
        font-weight bold
        font-size 18px

</style>
