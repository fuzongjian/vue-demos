<template>
<div>
  <p style="font-size: 20px;font-weight: bold;text-align: center;margin: 20px auto">数据展示</p>
  <div class="container">
    <p>Table表格</p>
    <div class="item-container">
      <p>基础表格</p>
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="item-container">
      <p>带斑马纹的表格</p>
      <el-table :data="tableData" style="width: 100%" stripe>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="日期" width="180"></el-table-column>
        <el-table-column prop="address" label="日期"></el-table-column>
      </el-table>
    </div>
    <div class="item-container">
      <p>带边框表格</p>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="item-container">
      <p>带状态的表格及固定表头</p>
      <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName"  height="200">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="item-container">
      <p>展开行</p>
      <el-table :data="tableData1" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-row-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-row-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商品ID" prop="id"></el-table-column>
        <el-table-column label="商品名称" prop="name"></el-table-column>
        <el-table-column label="描述" prop="desc"></el-table-column>
      </el-table>
    </div>
  </div>
  <div class="container">
    <p>Tag标签</p>
    <div class="item-container">
      <p>基础用法</p>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>
    <div class="item-container">
      <p>可移除标签</p>
      <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{ tag.name }}</el-tag>
    </div>
  </div>
  <div class="container">
    <p>Progress进度条</p>
    <div class="item-container">
      <p>线型进度条——百分比外显</p>
      <el-progress :percentage="0"></el-progress>
      <el-progress :percentage="70"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    <div class="item-container">
      <p>线形进度条——百分比内显</p>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
    </div>
    <div class="item-container">
      <p>环形进度条</p>
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
  </div>
  <div class="container">
    <p>Tree树形控件</p>
    <div class="item-container">
      <p>基础用法</p>
      <el-tree :data="treeData" :props="defaultProps"></el-tree>
    </div>
  </div>
  <div class="container">
    <p>Pagination分页</p>
    <div class="item-container">
      <p>基础用法</p>
      <el-pagination layout="prev,pager,next" :total="50"></el-pagination>
      <el-pagination layout="prev,pager,next" :total="1000"></el-pagination>
    </div>
    <div class="item-container">
      <p>带背景色的分页</p>
        <el-pagination background layout="prev,pager,next" :total="1000"></el-pagination>
    </div>
  </div>
  <div class="container">
    <p>Badge标记</p>
    <div class="item-container">
      <p>基础用法</p>
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="100" :max="99" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
    </div>
    <div class="item-container">
      <p>自定义内容</p>
      <el-badge value="new" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge value="hot" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
    </div>
    <div class="item-container">
      <p>小红点</p>
      <el-badge is-dot class="item">数据查询</el-badge>
      <el-badge is-dot class="item">
        <el-button icon="el-icon-share" type="primary" size="mini"></el-button>
      </el-badge>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "element-data",
        data(){
          return {
            tableData:[
              {
                date: '2018-01-04',
                name: '付宗建',
                address: '合作街道天泉路200号'
              },
              {
                date: '2018-01-04',
                name: '付宗建',
                address: '合作街道天泉路200号'
              },
              {
                date: '2018-01-04',
                name: '付宗建',
                address: '合作街道天泉路200号'
              },
              {
                date: '2018-01-04',
                name: '付宗建',
                address: '合作街道天泉路200号'
              },
            ],
            tableData1: [
              {
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
              },
              {
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
              },
              {
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
              },
              {
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
              }
            ],
            tags: [
              {name: '标签一',type: ''},
              {name: '标签二',type: 'success'},
              {name: '标签三',type: 'info'},
              {name: '标签四',type: 'warning'},
              {name: '标签五',type: 'danger'},
            ],
            treeData: [
              {
                label: 'first1',
                children: [
                  {
                    label: 'first1-1',
                    children: [
                      {label: 'first1-1-1'}
                    ]
                  }

                ]
              },
              {
                label: 'first1',
                children: [
                  {
                    label: 'first1-1',
                    children: [
                      {label: 'first1-1-1'}
                    ]
                  }

                ]
              }
            ]
          }
        },
        methods: {
          tableRowClassName({row, rowIndex}) {
            if(rowIndex === 1){
              return 'warning-row'
            }else if(rowIndex === 3){
              return 'success-row'
            }
            return ''
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
  .el-table-column
    text-align center
  .el-table .warning-row
    background oldlace
  .el-table .success-row
    background #f0f9eb
  .demo-table-expand
    font-size 0
    .el-form-item
      margin-right 0
      margin-bottom 0
      width 50%
      label
        width 90px
        color #99a9bf
  .item
    margin-top 10px
    margin-right 40px
</style>
