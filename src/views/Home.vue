<template>
  <section class="home-page capitalize">
    <header-app></header-app>

    <footer-app></footer-app>
  </section>
</template>

<script>
import header from "@/components/HeaderSection.vue";
import footer from "@/components/Footer.vue";
export default {
  name: "Home-page",
  data: () => {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    "header-app": header,
    "footer-app": footer,
  },
  methods: {
    login() {
      alert("login");
    },
  },
};
</script>
