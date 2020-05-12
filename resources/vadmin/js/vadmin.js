require('./bootstrap');

window.Vue = require('vue');

import router from './router/vadminRouter'
import store from "./store/vadminStore";

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

Vue.use(VueSweetalert2);

// ----------------------------------------------

Vue.config.productionTip = false;

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

