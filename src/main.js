import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

// $httpでJSネイティブのfetchメソッドを呼び出せるように
// API呼び出すため
Vue.prototype.$http = (url, opts) => fetch(url, opts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
