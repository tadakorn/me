<template>
  <nav class="navbar navbar-expand-lg navbar-text-1">
    <div class="container">
      <a class="navbar-brand navbar-text-2 ms-2" href="#home">Tadakorn</a>
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
        class="collapse navbar-collapse flex-grow-1 justify-content-end align-middle "
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav ms-auto flex-nowrap click-here">
          <li class="nav-item align-middle">
            <a
              class="nav-link active navbar-text-2"
              aria-current="page"
              href="#resume"
              >Resume</a
            >
          </li>
          <li class="nav-item align-middle">
            <a class="nav-link active navbar-text-2" href="#workshop">Workshop</a>
          </li>
          <li class="nav-item align-middle">
            <a class="nav-link active navbar-text-2" href="#contact">Contact</a>
          </li>
          <li class="nav-item align-middle">
            <div
              role="button"
              tabindex="0"
              class="nav-link active toggle-icon-text"
              @click="themeStore.toggleTheme"
            >
              <font-awesome-icon v-if="themeStore.theme === 'dark'" icon="fa-regular fa-moon" />
              <font-awesome-icon v-else icon="fa-regular fa-sun" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { themeStore } from '../store/theme.js'

export default {
  data() {
    return {
      themeStore
    };
  },
  mounted() {
    const initTheme = themeStore.getTheme();
    themeStore.setTheme(initTheme);
  },
};
</script>

<style scoped>
.navbar-brand {
  color: var(--text-primary-color) !important
}

.nav-link {
  color: var(--text-primary-color) !important
}

.navbar-toggler-icon {
  border-color: var(--text-primary-color) !important
}

.navbar-text-1, .navbar-text-2 {
  font-size: 30px;
}

</style>
