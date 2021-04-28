<template >
    <div>
  <navbar-component></navbar-component>
<header-component></header-component>
<main> 
<programmes-component></programmes-component>
</main>
<footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from "../components/Header"
import ProgrammesComponent from "../components/Programmes"
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
 
export default {
name: "programmes",
components: {
      NavbarComponent,
      FooterComponent,
      ProgrammesComponent,
      HeaderComponent
    
 
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>