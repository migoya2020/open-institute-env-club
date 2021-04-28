<template >
    <div>
  <navbar-component></navbar-component>
<main> 
<gallary-component></gallary-component>
</main>
<footer-component></footer-component>
    </div>
</template>

<script>
import GallaryComponent from "../components/Gallary"
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
"name": "Gallary",
components: {
      NavbarComponent,
      FooterComponent,
     GallaryComponent 
 
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>