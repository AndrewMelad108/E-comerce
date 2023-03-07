<template>
  <div
    class="login-page bg-home-page-image h-[100vh] bg-center bg-cover capitalize"
  >
    <header-app></header-app>
    <section
      class="login-form max-sm:w-full max-sm:h-full bg-black-color h-auto text-stone-200 p-5 w-[50vw] rounded-lg text-center"
    >
      <h1
        class="text-5xl max-sm:text-center text-start mt-20 mb-10 hover:text-amber-400 transition-all duration-0 hover:duration-1000 hover:ease-in-out"
      >
        {{ $t("Train Tickets") }}
      </h1>
      <p class="text-start sm:text-center text-amber-400 leading-6">
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
        class="w-[15vw] mt-20 block transition-all hover:duration-1000 hover:ease-in-out hover:text-amber-400 text-black hover:bg-black font-bold mx-auto rounded-full p-4 bg-amber-400 max-sm:w-[40vw] max-sm:mt-5"
        >{{ $t("signup") }}</router-link
      >
    </section>
  </div>
</template>

<script>
import header from "@/components/HeaderSection.vue";

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
  },
  methods: {
    login() {
      alert("login");
    },
  },
};
</script>
