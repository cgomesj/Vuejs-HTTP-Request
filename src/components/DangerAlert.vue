<template>
  <div>
    <div class="alert alert-danger">
      <strong>Error!</strong> Something went wrong. Probably server-side.
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
export default {};
</script>

<script>
export default {
  name: "DangerAlert",

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