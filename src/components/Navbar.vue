<template>
  <nav class="navbar navbar-expand-lg navbar-text-color-1">
    <div class="container-fluid">
      <a class="navbar-brand navbar-text-color-2" href="#home">EARNTADAKORN</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse flex-grow-1 justify-content-end align-middle"
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav ml-auto flex-nowrap">
          <li class="nav-item align-middle">
            <a class="nav-link active navbar-text-color-2" href="#about">ABOUT</a>
            <!-- <router-link to="#about">ABOUT</router-link> -->
          </li>
          <li class="nav-item align-middle">
            <a
              class="nav-link active navbar-text-color-2"
              aria-current="page"
              href="#resume"
              >RESUME</a
            >
          </li>
          <li class="nav-item align-middle">
            <a class="nav-link active navbar-text-color-2" href="#projects">PROJECTS</a>
          </li>
          <li class="nav-item align-middle">
            <a class="nav-link active navbar-text-color-2" href="#contact">CONTACT</a>
          </li>
          <li class="nav-item align-middle">
            <div
              role="button"
              tabindex="0"
              class="nav-link active toggle-icon-text"
              @click="toggleTheme"
            >
              <font-awesome-icon v-if="theme === 'dark'" icon="fa-regular fa-moon" />
              <font-awesome-icon v-else icon="fa-regular fa-sun" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    toggleTheme() {
      this.theme = localStorage.getItem("theme");
      if (this.theme === "light") {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    },
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
    this.theme = this.getTheme() || this.theme;
  },
};
</script>

<style scoped>
.navbar-text-color-1 {
  font-size: 30px;
  color: black;
}

.navbar-text-color-2 {
  font-size: 30px;
  color: black;
}
.navbar-text-color-2:hover {
  color: #ffe6e6;
}
</style>
