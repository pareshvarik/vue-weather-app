import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const Search=()=>import('../views/Search.vue');
const PageNotFound=()=>import('../views/PageNotFound.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/search",
    component:Search
  },
  {
    path:"*",
    component:PageNotFound
  }
  // {
  //   path: "/about",
  //   name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
