import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Stokvel from "../views/StokvelView.vue";
import FlexrandView from "../views/FlexrandView.vue";
import SecurityView from "../views/SecurityView.vue";
import FaqView from "../views/FaqView.vue";
import NotFound from "../views/NotFound.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import TermsandConditions from "../views/TermsandConditions.vue";
import AmlPolicy from "../views/AmlPolicy.vue";
import ContactView from "../views/ContactView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/stokvel",
    name: "stokvel",
    component: Stokvel,
  },
  {
    path: "/flexrand",
    name: "flexrand",
    component: FlexrandView,
  },
  {
    path: "/security",
    name: "security",
    component: SecurityView,
  },
  {
    path: "/faq",
    name: "faq",
    component: FaqView,
  },
  {
    path: "/privacypolicy",
    name: "privacypolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms",
    name: "termsandconditions",
    component: TermsandConditions,
  },
  // {
  //   path: "/amlpolicy",
  //   name: "amlpolicy",
  //   component: AmlPolicy,
  // },
  {
    path: "*",
    name: "notfound",
    component: NotFound,
  },
  {
    path: "/contact",
    name: "contactview",
    component: ContactView,
  },
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
