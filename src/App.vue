<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-sm-12">
        <component :is="'app-title'" title="HTTP" class="my-4 text-center" />
        <component :is="'app-user-form'" class="my-4" />
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from "./components/AppTitle.vue";
import UserForm from "./components/UserForm";

export default {
  name: "app",

  components: {
    "app-title": AppTitle,
    "app-user-form": UserForm
  }
};
</script>

<style>
.container {
  width: 60%;
}

.slide-enter {
  opacity: 0;
  /* transform: translateY(20px) */
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 0.2s ease-out forwards;
  transition: opacity 0.2s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
