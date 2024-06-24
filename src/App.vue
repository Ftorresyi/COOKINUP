<script lang="ts">
import Banner from './components/Banner.vue';

export default {
  components: { Banner: Banner }
}
</script>

<template>

  <Banner />

  <h1 class="titulo">
    Texto do App.vue
  </h1>
</template>

<style scoped>
.titulo {
  color: red;
}
</style>