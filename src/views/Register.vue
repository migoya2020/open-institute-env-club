<template >
    <div>
  <navbar-component></navbar-component>
 
<main> 
<register-component></register-component>
</main>
<footer-component></footer-component>
    </div>
</template>

<script>
//  import our necessary componenets
import RegisterComponent from "../components/Register";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
name: "register",
components: {
    RegisterComponent,
    NavbarComponent,
    FooterComponent
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>