import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import elementUi from "element-ui";
import axios from "axios";
Vue.config.productionTip = false;
// 可以全局使用element-ui
Vue.use(elementUi);

// 设置axios
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";
axios.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

Vue.prototype.$http = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
