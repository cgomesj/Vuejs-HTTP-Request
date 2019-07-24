<template>
  <div id="app">
    <component :is="'app-title'" title="HTTP" />
  </div>
</template>

<script>
import Title from "./components/Title.vue";

export default {
  name: "app",
  components: {
    "app-title": Title
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
