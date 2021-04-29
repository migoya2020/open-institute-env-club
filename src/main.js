/* eslint-disable no-unused-vars */
import {createApp} from 'vue';
import {createWebHistory, createRouter} from 'vue-router';
import axios from 'axios';
import firebase from 'firebase'
// firebase SDK  
 
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC2h0u3uCB3A3Oe__tEBETrnKXDdxmDh6U",
    authDomain: "openuniversity-1dced.firebaseapp.com",
    projectId: "openuniversity-1dced",
    storageBucket: "openuniversity-1dced.appspot.com",
    messagingSenderId: "742909936695",
    appId: "1:742909936695:web:b18d7a03c8d8612d7dabb2",
    measurementId: "G-YQ35VF2J0M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 


// views
import Landing from './views/Landing.vue';
import Login from './views/Login.vue';
import Gallary from './views/Gallary.vue';
import Programmes from './views/Programmes.vue';
import Programmdetails from './views/Programmdetails.vue';
import Register from './views/Register.vue';
import Cohorts from './views/Cohorts.vue';
// styles

import '@fortawesome/fontawesome-free/css/all.min.css';

// mouting point for the whole app

import App from '@/App.vue';

// routes

const routes = [
  {
    path: '/landing',
    component: Landing,
  },
  {
    path: '/gallary',
    component: Gallary,
  },
  { 
    path: '/register',
    component: Register,
  },
  {
    path: '/programmes',
    component: Programmes,
  },{
  path: '/cohorts',
    component: Cohorts,
name: Cohorts,
  },
  // single program details route
  {
    path: '/programmes/:id',
    props: true,
    name: "Programmdetails",
    component: Programmdetails,

  },
  {
    path: '/login',
    component: Login,
  },
  {path: '/:pathMatch(.*)*', redirect: '/landing'},
];

const router = createRouter ({
  history: createWebHistory (),
  routes,
});

createApp (App).use (router, axios ).mount ('#app');
