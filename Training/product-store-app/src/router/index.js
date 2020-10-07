import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Add from '../views/Add.vue'
// import Update from '../views/Update.vue'
// import PageNotFound from '../views/PageNotFound.vue'

const Add = () => import('../views/Add.vue')
const Update = () => import('../views/Update.vue')
const PageNotFound = () => import('../views/PageNotFound.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/add',
    component: Add
  },
  {
    path: '/update',
    name: 'up',
    component: Update
  },
  {
    path: '*',
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
