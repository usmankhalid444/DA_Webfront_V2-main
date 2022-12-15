import Vue from 'vue'
import App from './App.vue'
import router from './config/routes.js'
import store from './config/store.js'
import Api from './config/api'
import vueResource from 'vue-resource'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { Plugin } from 'vue-fragment'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "./assets/css/style.fda.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
// import exportingInit from 'highcharts/modules/exporting'
import highchartsMore from "highcharts/highcharts-more";
import seriesLable from "highcharts/modules/series-label"
// exportingInit(Highcharts)
seriesLable(Highcharts)
highchartsMore(Highcharts)

Vue.use(HighchartsVue)

import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)


import Notifications from 'vue-notification'

Vue.use(Notifications)



import vuetify from './plugins/vuetify'
export const bus = new Vue();

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)



Vue.use(vueResource)
Vue.use(Plugin);

// Vue.prototype.rootHost = "http://127.0.0.1"
// Vue.prototype.host = "http://127.0.0.1"

// Vue.prototype.api = Api
// Vue.http.options.credentials = true
// Vue.http.options.emulateJSON = true
// Vue.http.options.headers = {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//     'Content-Type': 'application/json;charset=utf-8'
// }

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')