<template>
  <div class="home-page capitalize">
    <div
      class="home-page-content max-sm:flex max-sm:flex-wrap max-sm:justify-center max-sm:content-center h-[100vh] bg-center bg-cover"
    >
      <header-app></header-app>
      <div
        class="card bg-black-color text-stone-200 p-2 rounded-lg text-center w-1/2 mx-auto"
      >
        <h1
          class="text-5xl max-sm:text-xl max-md:text-3xl pt-10 mb-10 hover:text-amber-400 transition-all duration-0 hover:duration-1000 hover:ease-in-out"
        >
          {{ $t("Train Tickets") }}
        </h1>
        <p class="max-sm:text-center max-sm:text-sm text-amber-400 leading-6">
          {{
            $t(
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipi"
            )
          }}
        </p>
        <router-link
          to="{
        name:'signup'
      }"
          class="w-1/2 mt-20 max-md:mt-10 block transition-all hover:duration-1000 hover:ease-in-out hover:text-amber-400 text-black hover:bg-black font-bold mx-auto rounded-full p-4 bg-amber-400 max-sm:w-1/2 max-sm:p-2 max-sm:text-sm text-center max-sm:mt-5"
          >{{ $t("signup") }}</router-link
        >
      </div>
    </div>
    <footer-app></footer-app>
  </div>
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
