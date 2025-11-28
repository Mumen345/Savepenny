import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import axios from 'axios';

Vue.use(MotionPlugin)
Vue.config.productionTip = false

new Vue({
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
