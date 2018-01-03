import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import upload from '@/components/upload-image/upload'
import elementbase from '../components/element-ui/hello-element'
import elementcontainer from '../components/element-ui/element-container'
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
    }
  ]
})
