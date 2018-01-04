<template>
  <div>
    <div class="container">
      <p>Container布局容器</p>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>
    <div class="container">
      <p>按钮</p>
      <div style="border: 1px solid red; padding: 10px;margin: 10px">
        <p style="text-align: center;font-weight: bold;font-size: 15px;margin-bottom: 10px">基础用法</p>
        <div style="border: 1px solid greenyellow;padding: 10px;margin: 10px">
          <p style="text-align: center;font-weight: bold;font-size: 10px;margin-bottom: 10px">使用type属性来定义Button的样式</p>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </div>
        <div style="border: 1px solid blue;padding: 10px;margin: 10px">
          <p style="text-align: center;font-weight: bold;font-size: 10px;margin-bottom: 10px">使用plain属性来定义Button的样式</p>
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="danger" palin>危险按钮</el-button>
        </div>
        <div style="border: 1px solid blue;padding: 10px;margin: 10px">
          <p style="text-align: center;font-weight: bold;font-size: 10px;margin-bottom: 10px">使用round属性来定义Button的样式</p>
          <el-button round>圆形按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="danger" round>危险按钮</el-button>
        </div>
      </div>
      <div style="border: 1px solid red; padding: 10px;margin: 10px">
        <p style="text-align: center;font-weight: bold;font-size: 15px;margin-bottom: 10px">禁用状态</p>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
      </div>
      <div style="border: 1px solid red; padding: 10px;margin: 10px">
        <p style="text-align: center;font-weight: bold;font-size: 15px;margin-bottom: 10px">文字按钮</p>
        <el-button type="text">主要按钮</el-button>
        <el-button type="text" disabled>禁用按钮</el-button>
      </div>
      <div style="border: 1px solid red; padding: 10px;margin: 10px">
        <p style="text-align: center;font-weight: bold;font-size: 15px;margin-bottom: 10px">图标按钮</p>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon-right"></i></el-button>
      </div>
      <div style="border: 1px solid red; padding: 10px;margin: 10px">
        <p style="text-align: center;font-weight: bold;font-size: 15px;margin-bottom: 10px">按钮组</p>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary" icon="el-icon-arrow-right">下一页</el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </div>
      <div style="border: 1px solid red; padding: 10px;margin: 10px">
        <p style="text-align: center;font-weight: bold;font-size: 15px;margin-bottom: 10px">按钮组</p>
        <el-button type="primary" :loading="true">加载中</el-button>
      </div>
      <div style="border: 1px solid red; padding: 10px;margin: 10px">
        <p style="text-align: center;font-weight: bold;font-size: 15px;margin-bottom: 10px">不同尺寸</p>
        <el-button>默认按钮</el-button>
        <el-button size="medium" @click="click">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "element-container",
        methods:{
            click(){
              console.log('hello world')
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheetstylus">
  .container
    border 1px solid rebeccapurple
    margin 10px
    padding 10px
    p
      text-align center
      font-weight bold
      font-size 20px
  .el-header,.el-footer
    background-color #B3C0D1
    color #333
    text-align center
    line-height 60px
  .el-main
    background-color #E9EEF3
    color #333
    text-align center
    line-height 160px
  .el-aside
    background-color #D3DCE6
    color #333
    text-align center
    line-height 200px
  .el-container
    margin-bottom 40px
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside
    line-height 260px
  .el-container:nth-child(7) .el-aside
    line-height 320px
</style>
