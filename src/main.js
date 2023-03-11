import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";
import i18n from "../src/vue-i18n";
import firebase from "firebase";
Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyBD9nyZzBUsY8usIi79OfuhRCphgXqavTg",
  authDomain: "fireblogsyt-2e013.firebaseapp.com",
  projectId: "fireblogsyt-2e013",
  storageBucket: "fireblogsyt-2e013.appspot.com",
  messagingSenderId: "891560623347",
  appId: "1:891560623347:web:6f8b45d1a18f5abea40b86",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  i18n,
  firebase,
  render: (h) => h(App),
}).$mount("#app");
