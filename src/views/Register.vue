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
 
import RegisterComponent from "../components/Register";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
"name": "Register",
 componenets: {
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