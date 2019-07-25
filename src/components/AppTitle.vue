<template>
  <div id="app-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "app-title",

  props: {
    title: String
  }
};
</script>
