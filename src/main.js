// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
/* eslint-disable no-new */
router.beforeEach((to,from,next) =>{
  /* 路由发生改变修改页面的title */
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
