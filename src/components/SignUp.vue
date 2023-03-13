<template>
  <section class="login-page bg-white text-blue-color h-auto rounded-b-lg">
    <h1 class="title-form text-center py-5">signup</h1>
    <form class="p-2 space-y-5" @submit.prevent="signup()">
      <input
        type="text"
        placeholder="enter your name"
        class="capitalize placeholder:px-2 placeholder:text-blue-color focus:outline-0 border border-blue-900 rounded-lg w-full p-2"
        v-model.trim="name"
      />
      <input
        type="email"
        placeholder="enter your email"
        class="capitalize placeholder:px-2 placeholder:text-blue-color focus:outline-0 border border-blue-900 rounded-lg w-full p-2"
        v-model.trim="email"
      />
      <input
        type="password"
        placeholder="enter your password"
        class="capitalize placeholder:px-2 placeholder:text-blue-color focus:outline-0 border border-blue-900 rounded-lg w-full p-2"
        v-model.trim="password"
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
import axios from "axios";
import useValidate from "@vuelidate/core"; //import from page
import { required, email, minLength } from "@vuelidate/validators"; //option validate
export default {
  name: "sign-up-page",
  data() {
    return {
      v$: useValidate(),
      name: "",
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(5) },
      email: { required, email },
      password: { required, minLength: minLength(8) },
    };
  },
  methods: {
    signup() {
      let result = axios.post(
        "https://e-comerce-b4659-default-rtdb.firebaseio.com/users",
        {
          Name: this.name,
          Password: this.password,
          Email: this.email,
        }
      );
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        setTimeout(() => {
          this.redirect("Home");
        }, 2000);
      } else {
        console.log("error");
      }
    },
  },
};
</script>

<style></style>
