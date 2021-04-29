<template>
   <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style="min-height: 50vh;"
        >
  <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
             style='background-image: url("https://images.pexels.com/photos/5940827/pexels-photo-5940827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");'
           
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
    <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
                <div class="w-full  px-4 ml-auto mr-auto text-left">
                    <div class="pr-12">
                    <h1 class="text-white font-semibold text-5xl">
                        Programmes
                    </h1>
                    
                    </div>
                </div>
                </div>
        </div>
   </div>
 
 

</template>

<script>
export default {
    setup () {
      
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>