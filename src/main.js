import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// views

import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Gallary from './views/Gallary.vue'
import Programmes from './views/Programmes.vue'

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";

// mouting point for the whole app

import App from "@/App.vue";

// routes

const routes = [
  {
    path: "/landing",
    component: Landing,
  },
{
    path: "/gallary",
    component: Gallary,
  },
{
    path: "/programmes",
    component: Programmes,
  },
{path: "/login", 
component: Login},
  { path: "/:pathMatch(.*)*", redirect: "/landing" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
