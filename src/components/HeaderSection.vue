<template>
  <header class="w-full">
    <div
      class="header-links lg:flex xl:flex md:flex sm:flex space-x-10 rtl:space-x-20 max-md:rtl:space-x-10 tracking-wider font-bold text-amber-400 justify-end pr-10 pt-10 mb-10 max-sm:hidden"
    >
      <router-link
        class="rtl:mx-10"
        :to="{
          name: 'home',
        }"
        >{{ $t("home") }}</router-link
      >

      <router-link
        :to="{
          name: 'about',
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
    </div>
    <div
      class="lg:hidden md:hidden max-md:hidden max-sm:block fixed right-5 top-5"
    >
      <div
        v-if="show"
        class="w-full fixed right-1 left-1 top-0 h-36 bg-black-color"
      >
        <h1>asd</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header-comp",
  props: {
    languages: {
      type: String,
    },
  },
  data() {
    const len = localStorage.getItem("len") || "en";
    return {
      lang: len,
      show: false,
    };
  },
  methods: {
    changeLen(event) {
      localStorage.setItem("len", event.target.value);
      window.location.reload();
    },
  },
};
</script>

<style></style>
