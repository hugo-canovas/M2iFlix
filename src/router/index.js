import { createRouter, createWebHistory } from "vue-router";
import signinView from "../views/signinView.vue";
import signupView from "../views/signupView.vue";
import HomeView from "../views/HomeView.vue";
import MooviesView from "../views/MooviesView.vue";
import ListView from "../views/ListView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "home",
    alias: ["/accueil", "/home"],
  },
  {
    path: "/sign-in",
    component: signinView,
    name: "signin",
  },
  {
    path: "/inscription",
    component: signupView,
    name: "inscription",
  },
  {
    path: "/films",
    component: MooviesView,
    name: "films",
  },
  {
    path: "/liste",
    component: ListView,
    name: "liste",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "lien-actif",
});

export default router;
