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
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("theme", theme);
      this.theme = theme;
      document.documentElement.className = `${theme}-theme`;
    },
    getTheme() {
      return localStorage.getItem("theme");
    },
  },
  mounted() {
    const initTheme = this.getTheme() || this.theme;
    this.setTheme(initTheme);
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  height: 50%;
}
</style>
