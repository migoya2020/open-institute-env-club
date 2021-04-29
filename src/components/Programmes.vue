<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div
          class="py-8 flex flex-wrap md:flex-nowrap"
          v-for="prog in programmes"
          v-bind:key="prog.id"
        >
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="font-semibold title-font uppercase text-gray-700"
              >Date</span
            >
            <span class="mt-1 text-gray-500 text-sm">{{ prog.date }}</span>
          </div>
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ prog.title }}
            </h2>
            <p class="leading-relaxed">
              {{ prog.short_desc }}
            </p>
            <a class="text-indigo-500 inline-flex items-center mt-4"
              >Register now
              <svg
                class="w-8 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  component() {},
  data() {
    return {
      programmes: {},
    };
  },
  setup() {
    return {};
  },

  mounted() {
    axios
      .get("http://localhost:3000/programs")
      .then((response) => {
        this.programmes = response.data;
        console.log(this.programmes[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
</style>