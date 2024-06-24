<script lang="ts">
import Banner from './components/Banner.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';

export default {
  components: { Banner, ConteudoPrincipal }

}
</script>

<template>

  <Banner />


  <h1 class="titulo">
    Texto do App.vue
  </h1>

  <ConteudoPrincipal />

</template>

<style scoped>
.titulo {
  color: red;
}
</style>