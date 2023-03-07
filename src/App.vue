<template>
  <div id="app" :dir="direction" class="p-0 m-0 box-border">
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => {
    const lang = localStorage.getItem("len") || "en";
    return {
      direction: "",
      lang,
    };
  },
  mounted() {
    if (this.lang === "en") {
      this.direction = "lft";
    } else {
      this.direction = "rtl";
    }
  },
};
</script>
<style lang="scss"></style>
