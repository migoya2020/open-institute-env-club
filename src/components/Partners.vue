<template>
 <section class="pt-20 pb-48 text-gray-600 body-font">
 <div class="flex flex-wrap justify-center text-center mb-4">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Our Partners</h2>
              
            </div>
          </div>
  <div class="container px-5 py-16 mx-auto " >
    <div class="flex flex-col md:flex-row "  >
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full"  v-for="image in links" v-bind:key="image.id" >
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="club" class="object-cover object-center w-full h-full block" :src='image.url'>
        </a>
      </div>

    </div>
  </div>
</section>
</template>

<script>
export default {
    data () {
        

        return {
          links:[{url:"https://dummyimage.com/420x260"},{url:"https://dummyimage.com/420x260"}, {url:"https://dummyimage.com/420x260"},{url:"https://dummyimage.com/420x260"}]
}
    }
}
</script>

<style lang="scss" scoped>

</style>