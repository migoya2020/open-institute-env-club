<template >
  <div>
    <navbar-component></navbar-component>
    <header-component></header-component>
    <main>
      <programmdetails-component></programmdetails-component>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ProgrammdetailsComponent from "../components/Programmdetails.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import HeaderComponent from "../components/Header.vue";
export default {
  name: "Progdetails",
  components: {
    ProgrammdetailsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>