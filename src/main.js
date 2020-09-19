import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./custom.scss";
import "./pipes";
import { BootstrapVue } from "bootstrap-vue";
import { Axios } from "./config/axios";
import VueAxios from "vue-axios";
import Vue2Filters from "vue2-filters";
import VueClipboard from "vue-clipboard2";
import VueMeta from "vue-meta";

Vue.use(BootstrapVue);
Vue.use(VueClipboard);
Vue.use(Vue2Filters);
Vue.use(VueAxios, Axios);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
