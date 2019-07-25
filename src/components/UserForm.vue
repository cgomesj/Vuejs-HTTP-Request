<template>
  <div id="UserForm">
    <form>
      <div class="form-group">
        <label for="userNameInput">Name</label>
        <input
          type="text"
          class="form-control"
          id="userNameInput"
          placeholder="Your name"
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <label for="userMailInput">Mail</label>
        <input type="email" class="form-control" placeholder="Enter email" v-model="user.email" />
        <small class="form-text text-muted" id="emailHelp">Your email is safe with us.</small>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <button
            @click.prevent="submitForm"
            type="submit"
            class="btn btn-primary w-100"
          >Submit Data</button>
          <transition name="slide">
            <component
              :is="alertHTTPResponse"
              v-if="isSubmitted"
              @close-alert="isSubmitted = false"
              class="my-3"
            />
          </transition>
        </div>
        <div class="col-sm-12 mt-2">
          <button @click.prevent="fetchData" type="submit" class="btn btn-secondary w-100">Get Data</button>
          <ul class="list-group mt-3">
            <li
              class="list-group-item"
              v-for="(u, index) in users"
              :key="index"
            >{{ u.username }} - {{ u.email }}</li>
          </ul>
          <transition name="slide">
            <component
              :is="alertHTTPResponse"
              v-if="isFetched"
              @close-alert="isFetched = false"
              class="my-3"
            />
          </transition>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";

export default {
  name: "UserForm",

  components: {
    "app-danger-alert": DangerAlert,
    "app-success-alert": SuccessAlert
  },

  data() {
    return {
      user: {
        username: "Frédéric Chopin",
        email: "f.chopin@mail.com"
      },
      users: [],
      isSubmitted: false,
      isFetched: false,
      alertHTTPResponse: "",
      resource: {}
    };
  },

  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" }
    };
    this.resource = this.$resource("data.json", {}, customActions);
    console.log(customActions);
    console.log(this.resource);
  },

  methods: {
    submitForm() {
      /* this.isSubmitted = true;
      this.$http.post("data.json", this.user).then(
        response => {
          console.log(response);
          this.alertHTTPResponse = "app-success-alert";
        },
        error => {
          console.log(error);
          this.alertHTTPResponse = "app-danger-alert";
        }
      ); */

      /* this.resource.save({}, this.user); */
      this.resource.saveAlt(this.user);
    },

    fetchData() {
      this.$http
        .get("data.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            console.log(key);
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  }
};
</script>

<style scoped>
</style>