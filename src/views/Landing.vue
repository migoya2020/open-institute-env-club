 
<template>
<div>
<navbar-component></navbar-component>
<main>
<landing-component></landing-component>
<partners-component></partners-component>
</main>
<footer-component></footer-component>

</div>

</template>
  <script>
import LandingComponent from "../components/Landing.vue"
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import PartnersComponent from "../components/Partners.vue";
  export default {
    name: "landing-page",
    components: {
      LandingComponent,
      NavbarComponent,
      FooterComponent,
      PartnersComponent
    }
  }
  </script>
<style scoped>
</style>
