import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../icon/iconfont"
// 引入iconfont
import './assets/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
