<template>
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
import HeaderComponent from "../components/Header";
import ProgrammdetailsComponent from "../components/Programmdetails";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "programmdetails",
  component: {
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