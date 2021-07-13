import Vue from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import store from './store'

import FlagIcon from 'vue-flag-icon'
import i18n from './i18n.js'

Vue.use(FlagIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
