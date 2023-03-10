<template>
  <header class="w-full">
    <div
      class="header-social max-md:hidden p-2 bg-head-color flex justify-around capitalize content-baseline"
    >
      <div
        class="call-me flex space-x-2 w-1/3 flex-wrap content-baseline justify-center"
      >
        <img src="@/assets/images/call.png" alt="call-icons" />
        <a href="#">call us:0121-067-3776</a>
      </div>
      <div class="social-links w-1/3">
        <ul class="flex space-x-2 justify-center">
          <li class="bg-slate-400 p-1 rounded-full">
            <img src="@/assets/images/call.png" alt="call-icons" />
          </li>
          <li class="bg-slate-400 p-1 rounded-full">
            <img src="@/assets/images/call.png" alt="call-icons" />
          </li>
          <li class="bg-slate-400 p-1 rounded-full">
            <img src="@/assets/images/call.png" alt="call-icons" />
          </li>
        </ul>
      </div>
      <div class="work-hour space-x-2 w-1/3 flex justify-center content-center">
        <select
          v-model="lang"
          class="w-28 rounded-full p-1 text-sm bg-transparent capitalize"
          @change="changeLen($event)"
        >
          <option value="en" class="foucs:bg-transparent text-amber-400">
            {{ $t("english") }}
          </option>
          <option value="ar" class="bg-transparent">{{ $t("arabic") }}</option>
        </select>
        <p class="text-[15px] max-md:text-md">Open hour: 8.00 - 18.00</p>
      </div>
    </div>
    <div class="header-info p-10 flex">
      <div
        class="email-info max-md:hidden flex flex-wrap justify-center content-baseline pl-5 w-1/3 space-x-2"
      >
        <img
          src="@/assets/images/email.png"
          alt="email-icon"
          class="w-auto self-center max-h-auto h-[15px]"
        />
        <p class="email-title">andrewmelad108@gmail.com</p>
      </div>
      <p class="logo-page w-1/3 text-center max-md:text-center max-md:w-full">
        logo
      </p>
      <div class="cart max-md:hidden flex justify-center space-x-1 w-1/3">
        <img
          src="@/assets/images/shopping.png"
          alt="shopping-icon"
          class="h-[25px] self-center"
        />
        <button
          class="order-btn text-[15px] capitalize text-center text-white bg-blue-color p-1 rounded-full w-[150px]"
        >
          order now
        </button>
      </div>
    </div>
    <div
      class="header-links max-md:p-5 max-md:max-h-auto max-md:block flex uppercase bg-blue-color text-white h-[100px]"
    >
      <div
        class="links max-md:hidden md:text-md pl-20 md:pl-0 flex flex-wrap content-center justify-around h-[100%] w-2/3"
      >
        <router-link
          class="px-4 md:px-1 hover:bg-amber-500 h-[100%]"
          :to="{
            name: 'home',
          }"
          ><span class="block mt-10">{{ $t("home") }}</span></router-link
        >

        <router-link
          class="px-4 md:px-1 hover:bg-amber-500 h-[100%]"
          :to="{
            name: 'about',
          }"
          ><span class="block mt-10">{{ $t("about") }}</span></router-link
        >
        <router-link
          class="px-4 md:px-1 hover:bg-amber-500 h-[100%]"
          to="{
        name:'home'
      }"
          ><span class="block mt-10">{{ $t("products") }}</span></router-link
        >
        <router-link
          class="px-4 md:px-1 hover:bg-amber-500 h-[100%]"
          to="{
        name:'home'
      }"
          ><span class="block mt-10">{{ $t("fashion") }}</span></router-link
        >
        <router-link
          class="px-4 md:px-1 hover:bg-amber-500 h-[100%]"
          to="{
        name:'home'
      }"
          ><span class="block mt-10">{{ $t("news") }}</span></router-link
        >
        <router-link
          class="px-4 md:px-1 hover:bg-amber-500 h-[100%]"
          to="{
        name:'home'
      }"
          ><span class="block mt-10">{{ $t("contactus") }}</span></router-link
        >
      </div>
      <div
        class="header-phone lg:hidden md:hidden max-md:grid max-md:grid-cols-2-auto max-md:gap-x-5"
      >
        <img
          src="@/assets/images/toggle-icon.png"
          alt="menu-icon"
          class="h-[30px] cursor-pointer justify-self-end w-fit"
          @click="show = !show"
        />
        <input
          type="text"
          placeholder="search"
          class="h-[35px] p-2 rounded-full"
        />
        <div
          v-if="show"
          class="drop-menu bg-[#183661] col-start-1 col-end-3 w-[50vw] sm:mx-auto shadow-black rounded-md relative top-3 space-x-4 p-5"
        >
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
      </div>

      <div
        class="search-btn w-1/3 flex flex-wrap justify-center content-center max-md:hidden"
      >
        <input
          type="text"
          placeholder="search"
          class="h-[35px] p-2 rounded-full"
        />
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
