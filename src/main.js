import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./custom.scss";
import { BootstrapVue } from "bootstrap-vue";
import { Axios } from "./config/axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, Axios);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
