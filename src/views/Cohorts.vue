<template>
    <div>
    <navbar-component></navbar-component>
    <header-component></header-component>
    <main>
      <cohorts-component></cohorts-component>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
// Import neccessary componenets
import CohortsComponent from "../components/Cohorts";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import HeaderComponent from "../components/Header.vue";
export default {
  name: "Cohorts",
  components: {
    CohortsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  },
  
}
</script>

<style lang="scss" scoped>

</style>