import Vue from "vue";
import App from "./App.vue";

import Filters from "./filters";

Vue.use(Filters);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
