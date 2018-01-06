import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import upload from '@/components/upload-image/upload'
import elementbase from '../components/element-ui/hello-element'
import elementcontainer from '../components/element-ui/element-container'
import elementform from '../components/element-ui/element-form'
import elementdata from '../components/element-ui/element-data'
import elementnotice from '../components/element-ui/element-notice'
import elementnav from '../components/element-ui/element-nav'
import elementother from '../components/element-ui/element-other'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/index',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/index/',
      name: 'index',
      component: index,
      meta: {
        title: "首页"
      }
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload,
      meta: {
        title: '图片上传'
      }
    },
    {
      path: '/element/base',
      name: 'element-base',
      component: elementbase,
      meta: {
        title: '饿了么基础'
      }
    },
    {
      path: '/element/container',
      name: 'element-container',
      component: elementcontainer,
      meta: {
        title: '布局容器'
      }
    },
    {
      path: '/element/form',
      name: 'element-form',
      component: elementform,
      meta: {
        title: "form表单"
      }
    },
    {
      path: '/element/data',
      name: 'element-data',
      component: elementdata,
      meta: {
        title: '数据'
      }
    },
    {
      path: '/element/notice',
      name: 'element-notice',
      component: elementnotice,
      meta: {
        title: '通知'
      }
    },
    {
      path: '/element/nav',
      name: 'element-nav',
      component: elementnav,
      meta: {
        title: '导航栏'
      }
    },
    {
      path: '/element/other',
      name: 'element-other',
      component: elementother,
      meta: {
        title: '其他'
      }
    }
  ]
})
