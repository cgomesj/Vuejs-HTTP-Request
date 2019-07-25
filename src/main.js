import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.http.options.root = "https://vuejs-http-b7853.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == "POST") {
    request.method = "PUT";
  }
  next(response => {
    response.json = () => {
      return { theresponse: response.body };
    };
  });
});

new Vue({
  render: h => h(App)
}).$mount("#app");
