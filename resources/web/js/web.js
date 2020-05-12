require('bootstrap')

window.Vue = require('vue')

import router from './router/webRouter'
import store from './store/index'

// --------------------------------------------
// VENDORS
// --------------------------------------------

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// Bootstrap vue (https://bootstrap-vue.js.org/)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Sweet alert (https://sweetalert2.github.io/)
import VueSweetalert2 from 'vue-sweetalert2'

import 'leaflet/dist/leaflet.css'

Vue.use(VueSweetalert2)

// ----------------------------------------------

Vue.component("web-main", require("./sections/WebMain").default)

Vue.config.productionTip = false

// if (process.env.MIX_ENV_MODE === 'production') {
//     Vue.config.devtools = false;
//     Vue.config.debug = false;
//     Vue.config.silent = true;
// }

const app = new Vue({
    el: '#app',
    router,
    store
});

