<template>
  <section class="about min-h-[100vh] w-full bg-cover bg-center">
    <header-app class="text-black"></header-app>
    <h1
      class="about-title font-bold text-4xl pt-2 text-center text-white capitalize first-letter:text-amber-400"
    >
      about us
    </h1>
    <span class="line"></span>
    <div class="about-content gap-5 grid grid-cols-3 p-10">
      <div
        class="bg-black-color text-center p-2 rounded-xl hover:animate-pulse text-amber-400 cursor-pointer"
      >
        <p class="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          maiores voluptates esse iusto quis eum quas, omnis recusandae quidem
          ipsa beatae at ex, possimus perspiciatis obcaecati. Aperiam dolores
          iste quo!
        </p>
        <button
          class="w-[15vw] mt-5 block transition-all hover:duration-1000 hover:ease-in-out hover:text-amber-400 text-black hover:bg-black font-bold mx-auto rounded-full p-4 bg-amber-400 max-sm:w-[40vw] max-sm:mt-5"
          @click="booking()"
        >
          booking
        </button>
      </div>
      <div
        class="bg-black-color text-center p-2 rounded-xl hover:animate-pulse text-amber-400 cursor-pointer"
      >
        <p class="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          maiores voluptates esse iusto quis eum quas, omnis recusandae quidem
          ipsa beatae at ex, possimus perspiciatis obcaecati. Aperiam dolores
          iste quo!
        </p>
        <button
          class="w-[15vw] mt-5 block transition-all hover:duration-1000 hover:ease-in-out hover:text-amber-400 text-black hover:bg-black font-bold mx-auto rounded-full p-4 bg-amber-400 max-sm:w-[40vw] max-sm:mt-5"
          @click="booking()"
        >
          booking
        </button>
      </div>
      <div
        class="bg-black-color text-center p-2 rounded-xl hover:animate-pulse text-amber-400 cursor-pointer"
      >
        <p class="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          maiores voluptates esse iusto quis eum quas, omnis recusandae quidem
          ipsa beatae at ex, possimus perspiciatis obcaecati. Aperiam dolores
          iste quo!
        </p>
        <button
          class="w-[15vw] mt-5 block transition-all hover:duration-1000 hover:ease-in-out hover:text-amber-400 text-black hover:bg-black font-bold mx-auto rounded-full p-4 bg-amber-400 max-sm:w-[40vw] max-sm:mt-5"
          @click="booking()"
        >
          booking
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import header from "@/components/HeaderSection.vue";
export default {
  name: "about-page",
  data() {
    return {};
  },
  methods: {
    booking() {
      alert("run");
    },
  },
  components: {
    "header-app": header,
  },
};
</script>

<style></style>
