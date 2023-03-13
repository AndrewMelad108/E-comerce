import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";
import i18n from "../src/vue-i18n";
import firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  firebase,
  render: (h) => h(App),
}).$mount("#app");
