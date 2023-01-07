<template>
  <header class="header">
    <Navbar />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
</style>
