<template>
<div>
  <p style="font-size: 20px;font-weight: bold;text-align: center;margin: 20px auto">Form</p>
  <div class="container">
    <p>Radio单选框</p>
    <div class="item-container">
        <p>基础用法</p>
        <el-radio v-model="radio" label="1">备选1</el-radio>
        <el-radio v-model="radio" label="2">备选2</el-radio>
    </div>
    <div class="item-container">
      <p>禁用状态</p>
      <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
    </div>
    <div class="item-container">
      <p>单选框组</p>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>
    <div class="item-container">
      <p>按钮样式</p>
      <el-radio-group v-model="radio3">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="南京"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="radio3" size="small" style="display: block; margin-top: 20px">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="南京"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="item-container">
      <p>带有边框</p>
      <el-radio v-model="radio4" label="1" border>备选项</el-radio>
      <el-radio v-model="radio4" label="2" border>备选项</el-radio>
    </div>
  </div>
  <div class="container">
    <p>CheckBox多选框</p>
    <div class="item-container">
      <p>基础用法</p>
      <el-checkbox v-model="checked">备选项</el-checkbox>
    </div>
    <div class="item-container">
      <p>多选框组</p>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框A"></el-checkbox>
        <el-checkbox label="复选框B"></el-checkbox>
        <el-checkbox label="复选框C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="item-container">
      <p>indeterminate状态</p>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
  <div class="container">
    <p>Input输入框</p>
    <div class="item-container">
      <p>基础用法</p>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-input v-model="input1" placeholder="请输入内容" :disabled="true"></el-input>
    </div>
    <div class="item-container">
      <p>带icon的输入框</p>
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" style="display: inline-block"></el-input>
      <el-input placeholder="请选择日期" prefix-icon="el-icon-search"></el-input>
    </div>
    <div class="item-container">
      <p>复合型输入框</p>
      <el-input placeholder="请输入内容">
        <template slot="prepend">Http://</template>
      </el-input>
      <el-input placeholder="请输入内容">
        <template slot="append">.com</template>
      </el-input>
      <el-input placeholder="请输入内容" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="1"></el-option>
          <el-option label="用户电话" value="1"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
  <div class="container">
    <p>InputNumber计数器</p>
    <div class="item-container">
      <p>基础用法</p>
      <el-input-number v-model="num" :min="1" :max="10" @change="valuechange"></el-input-number>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "element-form",
        data() {
          return {
            radio: '1',
            radio1: '选中且禁用',
            radio2: 3,
            radio3: '南京',
            radio4: '1',
            checked: true,
            checkList: ['复选框A','选中且禁用'],
            checkAll: false,
            checkedCities: ['上海','北京'],
            cities: ['上海','北京','广州','深圳'],
            isIndeterminate: true,
            input: '',
            input1: '',
            select: '',
            num: 1
          }
        },
        methods:{
          handleCheckAllChange(val){
            this.checkedCities = val ? this.cities : []
            this.isIndeterminate = false
          },
          handleCheckedCitiesChange(value){
            var length = value.length
            this.checkAll = length === this.cities.length
            this.isIndeterminate = length > 0 && length < this.cities.length
          },
          valuechange(value){
            console.log('hello world')
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
  .el-input
    margin-bottom 10px
  .el-select
    width 130px
</style>
