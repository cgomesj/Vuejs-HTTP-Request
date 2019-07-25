<template>
  <div>
    <div class="alert alert-success">
      <strong>Success!</strong> Your data was submitted.
      <button
        @click="closeAlert"
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";

export default {
  name: "SuccessAlert",

  created() {
    let vm = this;
    setTimeout(function() {
      vm.closeAlert();
    }, 4000);
  },

  methods: {
    closeAlert() {
      this.$emit("close-alert");
    }
  }
};
</script>

<style scoped>
</style>