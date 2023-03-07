<template>
  <div id="app" class="p-0 m-0 box-border">
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
};
</script>
<style lang="scss"></style>
