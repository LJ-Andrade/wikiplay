import Vue from "vue";

// Vue Router
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../sections/Home.vue";

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

  ]
});

export default router;