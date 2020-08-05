import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// bootstrap檔案
import 'bootstrap'
// vue-loading-overlay
import Loading from 'vue-loading-overlay' // component
import 'vue-loading-overlay/dist/vue-loading.css' // style
Vue.use(Loading) // Use default options
Vue.component('Loading', Loading)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
