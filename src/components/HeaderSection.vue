<template>
  <header
    class="lg:flex md:flex sm:flex space-x-10 rtl:space-x-20 tracking-wider font-bold text-amber-400 justify-end pt-10 pr-20 mb-10 max-sm:hidden"
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
