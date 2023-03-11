<template>
  <section class="home-page capitalize">
    <img
      src="@/assets/images/loading.gif"
      alt="loading-icon"
      v-if="loading"
      class="mx-auto"
    />
    <div v-else>
      <header-app></header-app>
      <div class="home-content min-h-[20000px]">
        <intro-app></intro-app>
      </div>
      <footer-app></footer-app>
    </div>
  </section>
</template>

<script>
import header from "@/components/HeaderSection.vue";
import IntroSection from "@/components/Home/IntroSection.vue";
import footer from "@/components/Footer.vue";
export default {
  name: "Home-page",
  data: () => {
    return {
      loading: true,
      user: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  components: {
    "header-app": header,
    "footer-app": footer,
    "intro-app": IntroSection,
  },
  methods: {
    login() {
      alert("login");
    },
  },
};
</script>
