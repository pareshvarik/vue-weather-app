import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import PageNotFound from '../views/PageNotFound.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about/:city',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
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

router.afterEach(to => {
  document.title = to.meta.title
})

export default router;
