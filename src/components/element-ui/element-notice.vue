<template>
<div>
  <p style="font-size: 20px;font-weight: bold;text-align: center;margin: 20px auto">信息提示</p>
  <div class="container">
    <p>Alert警告</p>
    <div class="item-container">
      <p>基本用法</p>
      <el-alert title="成功提示文案" type="success"></el-alert>
      <el-alert title="消息提示文案" type="info"></el-alert>
      <el-alert title="警告提示文案" type="warning"></el-alert>
      <el-alert title="错误提示文案" type="error"></el-alert>
    </div>
    <div class="item-container">
      <p>自定义关闭按钮</p>
      <el-alert title="不可关闭的alert" type="success" :closable="false"></el-alert>
      <el-alert title="自定义close-text" type="info" close-text="知道了"></el-alert>
      <el-alert title="设置了回调的alert" type="warning" @close="hello"></el-alert>
    </div>
    <div class="item-container">
      <p>带有icon及文字居中</p>
      <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
      <el-alert title="成功提示的文案" type="info" show-icon></el-alert>
      <el-alert title="成功提示的文案" type="warning" show-icon center></el-alert>
      <el-alert title="成功提示的文案" type="error" show-icon center></el-alert>
    </div>
    <div class="item-container">
      <p>带有辅助行的文字介绍及icon</p>
      <el-alert title="带有辅助性的文字介绍" type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"></el-alert>
      <el-alert title="成功提示的文案" type="success" description ="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……" show-icon></el-alert>
    </div>
  </div>
  <div class="container">
    <p>Loadding加载</p>
    <div class="item-container">
      <p>区域加载</p>
      <el-table v-loading="loading" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="item-container">
      <p>自定义</p>
      <el-table v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0,0,0,0.8)" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="item-container">
      <p>整页加载</p>
      <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">指令方方式</el-button>
      <el-button type="primary" @click="openFullScreen2">服务方式</el-button>
    </div>
  </div>
  <div class="container">
    <p>Message消息提示</p>
    <div class="item-container">
      <p>基础用法</p>
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="openVN">VNode</el-button>
    </div>
    <div class="item-container">
      <p>不同状态及可关闭</p>
      <el-button :plain="true" @click="openstatus(1)">成功</el-button>
      <el-button :plain="true" @click="openstatus(2)">警告</el-button>
      <el-button :plain="true" @click="openstatus(3)">消息</el-button>
      <el-button :plain="true" @click="openstatus(4)">错误</el-button>
    </div>
    <div class="item-container">
      <p>MessageBox弹框</p>
      <div class="item-container">
        <p>确认消息</p>
        <el-button type="text" @click="openbox">点击打开Message Box</el-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "element-notice",
        data(){
          return {
            tableData: [
              {
                date: '2018-01-04',
                name: '付宗建',
                address: '合作街道天全路200号'
              },
              {
                date: '2018-01-04',
                name: '付宗建',
                address: '合作街道天全路200号'
              },
              {
                date: '2018-01-04',
                name: '付宗建',
                address: '合作街道天全路200号'
              }
            ],
            loading: true,
            fullscreenLoading: false
          }
        },
        methods:{
          hello(){
            alert('Hello World')
          },
          openFullScreen(){
            this.fullscreenLoading = true
            setTimeout(() => {
              this.fullscreenLoading = false
            },2000)
          },
          openFullScreen2(){
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0,0,0,0.7)'
            })
            setTimeout(()=>{
              loading.close()
            },2000)
          },
          open(){
            this.$message('这是一条消息提示')
          },
          openVN(){
            console.log('hello world')
            const h = this.$createElement;
            this.$message({
             message: h('p',null,[
               h('span',null,'内容可以是'),
               h('i',{style: 'color: teal'},'VNode')
             ])
            })
          },
          openstatus(status){
            if(status === 3){
              this.$message('这是一条提示信息')
            }else if(status === 1){
              this.$message({
                center: true,
                message: '恭喜你！！！',
                type: 'success'
              })
            }else if(status === 2){
              this.$message({
                showClose: true,
                message: '警告哟！！！',
                type: 'warning'
              })
            }else{
              this.$message.error('错误信息提示！！！')
            }
          },
          openbox(){
            this.$confirm('此操作将永久删除文件,是否继续？','提示',{
              confirmButtonText: '确定',
              canclemButtonText: '取消',
              type: 'warning'
            }).then(()=>{
              this.$message({
                type: 'success',
                message: '删除成功'
              })
            }).catch(()=>{
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            })
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheetstylus">
  .container
    padding 10px
    margin 10px
    border 1px solid red
    p
      text-align center
      font-weight bold
      font-size 15px
    .item-container
      padding 10px
      margin 10px
      border 1px solid blue
      p
        margin-bottom 10px
        text-align center
        font-weight bold
        font-size 12px
  .el-alert
    margin-bottom 10px
</style>
