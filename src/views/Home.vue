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
        >home</router-link
      >

      <router-link
        to="{
        name:'home'
      }"
        >about</router-link
      >
      <router-link
        to="{
        name:'home'
      }"
        >contact us</router-link
      >
      <router-link
        to="{
        name:'home'
      }"
        >login/signup</router-link
      >
    </header>

    <section
      class="login-form max-sm:w-full max-sm:h-full bg-black-color h-auto text-stone-200 p-5 w-[50vw] rounded-lg text-center"
    >
      <h1
        class="text-5xl max-sm:text-center text-start mt-20 mb-10 hover:text-amber-400 transition-all duration-0 hover:duration-1000 hover:ease-in-out"
      >
        train tickets
      </h1>
      <p class="text-start sm:text-center text-amber-400 leading-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        consequuntur beatae alias magnam illo voluptates eos iste veritatis
      </p>
      <router-link
        to="{
        name:'signup'
      }"
        class="w-[15vw] mt-20 block transition-all hover:duration-1000 hover:ease-in-out hover:text-amber-400 text-black hover:bg-black font-bold mx-auto rounded-full p-4 bg-amber-400 max-sm:w-[40vw] max-sm:mt-5"
        >signup</router-link
      >
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

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
  methods: {
    login() {
      alert("login");
    },
  },
};
</script>
