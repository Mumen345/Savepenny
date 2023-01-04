import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import VendorView from "../views/VendorView.vue";
import CareerView from "../views/CareerView.vue";
import DocView from "../views/DocView.vue";
import NotFound from "../views/NotFound.vue";
// import ContactForm from "../views/ContactForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/vendors",
    name: "vendors",
    component: VendorView,
  },
  {
    path: "/careers",
    name: "careers",
    component: CareerView,
  },
  {
    path: "/docs",
    name: "docs",
    component: DocView,
  },
  {
    path: "*",
    name: "notfound",
    component: NotFound,
  },
  // {
  //   path: "/form",
  //   name: "contactForm",
  //   component: ContactForm,
  // },
  {
    path: "/cards",
    name: "cards",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CardView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
