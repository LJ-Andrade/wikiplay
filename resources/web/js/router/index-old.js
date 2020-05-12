import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
    meta: {
      title: 'WikiPlay | Inicio',
      metaTags: [
        {
          name: 'description',
          content: 'Un sitio para salir, muchos para llegar. Por derecho a la educación, el juego, la recreación, y a participar de la vida cultural y artística de los niños y niñas. (Declaración Universal - 1959)'
        },
        {
          property: 'og:description',
          content: 'Un sitio para salir, muchos para llegar. Por derecho a la educación, el juego, la recreación, y a participar de la vida cultural y artística de los niños y niñas. (Declaración Universal - 1959)'
        }
      ]
    }
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
