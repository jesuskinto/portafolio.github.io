import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import i18n from './i18n'
import App from './App.vue'

import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  offset: -85,
  mirror: true
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
