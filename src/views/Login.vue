<template >
    <div>
  <navbar-component></navbar-component>
<main> 
<login-component></login-component>
</main>
<footer-component></footer-component>
    </div>
</template>

<script>
import LoginComponent from "../components/Login";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
 name: "Login",
components: {
      NavbarComponent,
      FooterComponent,
      LoginComponent
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
 
</style>