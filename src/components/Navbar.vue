<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="#"
          >Open Institute Env Club</a
        ><button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{ hidden: !showMenu, block: showMenu }"
      >
        <!-- Nav Items begin -->
        <div
          class="flex flex-col lg:flex-row ml-1 items-center"
          id="navbar-info"
        >
          <ul class="flex flex-col lg:flex-row list-none ml-auto items-start">
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-lg font-bold leading-snug lg:text-white lg:hover:text-indigo-600 text-gray-800 hover:opacity-75"
                href="#"
                @click="$router.push('/about')"
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-lg font-bold leading-snug lg:text-white md:hover:text-indigo-500 text-gray-800 hover:opacity-75"
                href="#"
                @click="$router.push('/programmes')"
              >
                Programs
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-lg font-bold leading-snug lg:text-white lg:hover:text-indigo-500 text-gray-800 hover:opacity-75"
                href="#"
                @click="$router.push('/cohorts')"
              >
                Cohorts
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-lg font-bold leading-snug lg:text-white lg:hover:text-indigo-600 text-gray-800 hover:opacity-75"
                href="#"
                @click="$router.push('/gallary')"
              >
                Gallary
              </a>
            </li>
          </ul>
        </div>

        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#Open-Institute-club"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg"
              ></i
              ><span class="lg:hidden inline-block ml-2">Share</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#Open-Institute-club"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg"
              ></i
              ><span class="lg:hidden inline-block ml-2">Tweet</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#Open-Institute-club"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg"
              ></i
              ><span class="lg:hidden inline-block ml-2">Star</span></a
            >
          </li>
          <li class="flex items-center px-2">
            <button v-if="!user"
              class="inline-flex text-white bg-indigo-500 font-semibold border border-white py-1 px-4 focus:outline-none hover:text-indigo hover:bg-white rounded"
              @click="$router.push('/login')"
            >
              Sign in
            </button>
          </li>
          <li class="flex items-center px-2">
            <button v-if="!user"
              class="inline-flex bg-transparent hover:bg-indigo-500 text-white font-semibold hover:text-white py-1 px-4 border border-indigo-500 hover:border-transparent rounded"
              @click="$router.push('/register')"
            >
              Register
            </button>
<button v-if="user" type="submit" @click="logOut()"
              class="inline-flex bg-transparent hover:bg-indigo-500 text-white font-semibold hover:text-white py-1 px-4 border border-indigo-500 hover:border-transparent rounded"
            >
              Logout
            </button>
 <h2 class="px-4 text-white font-semibold" v-if="user" >{{user}}</h2>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import firebase from 'firebase'
export default {
  name: "Navbar",
  data() {
    return {
      user: null,
      showMenu: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
 
        this.user = user.email;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
// Redirect after  logout
            this.$router.push("/landing");
          });
        });
    },
  },
};
</script>
