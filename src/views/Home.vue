<template>
  <div
    class="login-page bg-login-page-image h-screen bg-center bg-cover capitalize"
  >
    <header
      class="lg:flex md:flex sm:flex space-x-10 tracking-wider font-bold text-white justify-end pt-10 pr-20 mb-10 max-sm:hidden"
    >
      <router-link
        to="{
        name:'home'
      }"
        >{{ $t("home") }}</router-link
      >

      <router-link
        to="{
        name:'home'
      }"
        >{{ $t("about") }}</router-link
      >
      <router-link
        to="{
        name:'home'
      }"
        >{{ $t("contact us") }}</router-link
      >
      <router-link
        to="{
        name:'home'
      }"
        >{{ $t("login/signup") }}</router-link
      >
      <select
        v-model="lang"
        class="bg-transparent capitalize"
        @change="changeLen($event)"
      >
        <option value="en" class="foucs:bg-transparent text-amber-400">
          {{ $t("english") }}
        </option>
        <option value="ar" class="bg-transparent">{{ $t("arabic") }}</option>
      </select>
    </header>

    <section
      :dir="direction"
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
// @ is an alias to /src

export default {
  name: "Home-page",
  data: () => {
    const len = localStorage.getItem("len") || "en";
    return {
      user: {
        email: "",
        password: "",
      },
      lang: len,
      direction: "",
    };
  },
  mounted() {
    if (this.lang === "en") {
      this.direction = "lft";
    } else {
      this.direction = "rtl";
    }
  },
  methods: {
    login() {
      alert("login");
    },
    changeLen(event) {
      localStorage.setItem("len", event.target.value);
      window.location.reload();
    },
  },
};
</script>
