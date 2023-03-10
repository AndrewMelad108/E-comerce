<template>
  <section class="about min-h-[100vh] w-full bg-cover bg-center">
    <header-app></header-app>
  </section>
</template>

<script>
import header from "@/components/HeaderSection.vue";
export default {
  name: "about-page",
  data() {
    return {};
  },
  methods: {
    booking() {
      alert("run");
    },
  },
  components: {
    "header-app": header,
  },
};
</script>

<style></style>
