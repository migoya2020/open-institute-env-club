<template >
    <div>
  <navbar-component></navbar-component>
<main> 
<programmes-component></programmes-component>
</main>
<footer-component></footer-component>
    </div>
</template>

<script>
import ProgrammesComponent from "../components/Programmes"
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
 
export default {
"name": "Programmes",
components: {
      NavbarComponent,
      FooterComponent,
      ProgrammesComponent 
    
 
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>