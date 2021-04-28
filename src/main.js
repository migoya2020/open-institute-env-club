/* eslint-disable no-unused-vars */
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import {store} from './store';
import {VeeValidate} from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
 
// views

import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Gallary from './views/Gallary.vue'
import Programmes from './views/Programmes.vue'
import Register from './views/Register.vue'
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
    path: "/register",
    component: Register,
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

createApp(App).use(router, VeeValidate, store,).mount("#app");
