// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import 'vant/lib/index.css'// 引入vant样式
// import VueSocketIO from "vue-socket.io";
// // 注册并使用Vue-socket.io
// Vue.use(
// new VueSocketIO({
//     debug: true, // debug调试，生产建议关闭
//     connection: '/socket'
//   })
// )

// 添加事件总线对象
Vue.prototype.$bus = new Vue()
// 引入
import fastClick from 'fastclick'
// 解决移动端300ms延迟
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
