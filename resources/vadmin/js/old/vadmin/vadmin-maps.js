require('../bootstrap');

window.Vue = require('vue');

global.$ = global.jQuery = require('jquery');

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueLazyload from 'vue-lazyload'

Vue.use(VueSweetalert2);
Vue.use(VueLazyload)

Vue.config.productionTip = false;

Vue.component('sidebar-component', require('./../core/components/SidebarComponent').default);
Vue.component('article-component', require('./../vadmin-sections/ArticlesSection.vue').default);
Vue.component('article-create-component', require('./../vadmin-sections/ArticlesCreateSection.vue').default);


const app = new Vue({
	el: '#app',
});


