<template>
<div>
  <div class="container">
    <p>其他</p>
    <div class="item-container">
      <p>Dialog对话框</p>
        <el-button type="text" @click="dialogVisible=true">点击打开dialog</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible=false">取消</el-button>
            <el-button type="primary" @click="dialogVisible=false">确认</el-button>
          </span>
        </el-dialog>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "element-other",
        data(){
          return {
            dialogVisible: false
          }
        },
        methods:{
          handleClose(done){
            this.$confirm('确认关闭').then(_ =>{
              done()
            }).catch(_=>{})
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheetstylus">
  .container
    margin 10px
    border 1px solid red
    p
      text-align center
      font-weight bold
      font-size 20px
    .item-container
      margin 10px
      border 1px solid blue
      p
        text-align center
        font-size 15px
        font-weight normal


</style>
