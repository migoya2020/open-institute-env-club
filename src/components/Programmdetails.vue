<template>
<div class="container"></div>
  <p>{{ full_desc }}</p>
</template>

<script>
export default {
  name: "Programmdetails",
  props: {
   id: { type: String },
    date: { type: String },
    full_desc: {
      type: String,
    },
    image_url: {
      type: String,
    },
    sponsor: {
      type: String,
    },
  },
 

  component() {},
   
};
</script>

<style lang="scss" scoped>
</style>