<template>
  <div
    class="login-page bg-login-page-image h-screen bg-center bg-cover flex flex-wrap items-start justify-center content-center"
  >
    <section
      class="login-form bg-black-color h-auto text-stone-200 p-5 w-[40vw] rounded-lg text-center animate-up-down"
    >
      <form class="space-y-8">
        <input
          type="email"
          v-model.trim="user.email"
          placeholder="enter your email"
          class="h-12 placeholder:p-2 placeholder:text-white placeholder:capitalize bg-transparent focus:outline-none"
        />
        <input
          type="password"
          v-model.trim="user.password"
          placeholder="enter your password"
          class="bg-none h-12 placeholder:p-2 placeholder:text-white placeholder:capitalize rounded-xl bg-transparent focus:outline-none"
        />

        <button class="block w-fit mx-auto" @click="login()">login</button>
      </form>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login-page",
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
