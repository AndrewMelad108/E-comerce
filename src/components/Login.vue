<template>
  <section class="login-page bg-white text-blue-color h-auto rounded-b-lg">
    <h1 class="title-form text-center py-5">login</h1>
    <form class="p-2 space-y-5" @submit.prevent="login()">
      <input
        type="text"
        placeholder="enter your name"
        class="capitalize placeholder:px-2 placeholder:text-blue-color focus:outline-0 border border-blue-900 rounded-lg w-full p-2"
        v-model.trim="user.name"
      />
      <input
        type="email"
        placeholder="enter your email"
        class="capitalize placeholder:px-2 placeholder:text-blue-color focus:outline-0 border border-blue-900 rounded-lg w-full p-2"
        v-model.trim="user.email"
      />
      <input
        type="password"
        placeholder="enter your password"
        class="capitalize placeholder:px-2 placeholder:text-blue-color focus:outline-0 border border-blue-900 rounded-lg w-full p-2"
        v-model.trim="user.password"
      />

      <button
        class="block bg-blue-color text-white rounded-full p-2 w-full mb-2"
      >
        login
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      user: {
        name: "",
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

<style></style>
