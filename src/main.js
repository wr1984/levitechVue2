import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
