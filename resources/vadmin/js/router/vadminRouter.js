import Vue from "vue";

// Vue Router
import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.component("vadmin-main", require("../sections/VadminMain").default);
import Dashboard from "../sections/DashboardSection";
import Users from "../sections/UsersSection";
import UserProfile from "../sections/UserProfileSection.vue";
import ArticleCategories from "../sections/ArticleCategoriesSection.vue";
import Articles from "../sections/ArticlesSection.vue";
import ArticlesCreate from "../sections/ArticlesCreateSection.vue";
// import Categories from "../sections/ArticleCategories.vue";
import Provs from "../sections/ProvsSection.vue";
import Locs from "../sections/LocsSection.vue";
import Roles from "../sections/RolesSection.vue";
import Permissions from "../sections/PermissionsSection.vue";
import Settings from "../sections/SettingsSection.vue";
import DevUtilities from "../sections/DevUtilitiesSection.vue";
import DevTasks from "../sections/DevTasksSection.vue";


const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/vadmin",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/vadmin/usuarios",
      name: "users",
      component: Users
    },
    {
      path: "/vadmin/perfil-de-usuario",
      name: "user_profile",
      component: UserProfile
    },
    {
      path: "/vadmin/categorias",
      name: "articles_categories",
      component: ArticleCategories
    },
    {
      path: "/vadmin/articulos",
      name: "articles",
      component: Articles
    },
    {
      path: "/vadmin/crear-articulo",
      name: "articles_create",
      component: ArticlesCreate
    },
    {
      path: "/vadmin/editar-articulo/:id",
      name: "article_edit",
      component: ArticlesCreate
    },
    {
      path: "/vadmin/categorias-de-articulos",
      name: "articleCategories",
      component: ArticleCategories
    },
    {
      path: "/vadmin/roles",
      name: "roles",
      component: Roles
    },
    {
      path: "/vadmin/permisos",
      name: "permissions",
      component: Permissions
    },
    {
      path: "/vadmin/localidades",
      name: "locs",
      component: Locs
    },
    {
      path: "/vadmin/provincias",
      name: "provs",
      component: Provs
    },
    {
      path: "/vadmin/configuraciones",
      name: "settings",
      component: Settings
    },
    {
      path: "/vadmin/utilidades",
      name: "dev_utilities",
      component: DevUtilities
    },
    {
      path: "/vadmin/tareas-de-desarollo",
      name: "dev_tasks",
      component: DevTasks
    }
  ]
});

export default router;

// Vue.component('sidebar-component', require('./../core/components/SidebarComponent').default);
// Vue.component('sidebar-component', require('./../core/components/HeaderComponent').default);
// Vue.component('user-component', require('./../sections/UsersSection').default);
// Vue.component('article-categories-component', require('./../sections/ArticleCategories.vue').default);
// Vue.component('provs-component', require('./../sections/ProvsSection.vue').default);
// Vue.component('locs-component', require('./../sections/LocsSection.vue').default);
// Vue.component('settings-component', require('./../sections/SettingsSection.vue').default);
// Vue.component('article-component', require('./../sections/ArticlesSection.vue').default);
// Vue.component('article-create-component', require('./../sections/ArticlesCreateSection.vue').default);

// Async load - must configure webpack
// Vue.component('sidebar-component', () => import('./../core/components/SidebarComponent.vue'));
// Vue.component('user-component', () => import('./../sections/UsersSection.vue'));
// Vue.component('article-categories-component', () => import('./../sections/ArticleCategories.vue'));
// Vue.component('provs-component', () => import('./../sections/ProvsSection.vue'));
// Vue.component('locs-component', () => import('./../sections/LocsSection.vue'));
// Vue.component('settings-component', () => import('./../sections/SettingsSection.vue'));
