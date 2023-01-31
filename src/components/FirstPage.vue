<template>
  <div class="row g-0 ms-2">
    <div class="col-12 col-md-6 text-center">
      <img
        alt="Vue logo"
        class="logo rounded-circle border-2 shadow img-fluid"
        src="/img/profile.jpeg"
        width="300"
      />
    </div>
    <div
      class="col-12 col-md-6 py-3 ms-auto bd-highlight align-self-center p-5 pb-3"
    >
      <h1><strong>I' m</strong></h1>
      <h1><strong>Tadakorn Nakkaew</strong></h1>
      <h1><strong> Front-End Developer</strong></h1>
      <div>
        <button
          type="button"
          :class="{
            btn: true,
            'btn-outline-dark': themeStore.theme === 'light',
            'btn-outline-warning': themeStore.theme === 'dark',
            'mt-2': true,
          }"
          @click="downloadCV"
        >
          Dowload CV <font-awesome-icon icon="fa-solid fa-download" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { themeStore } from "../store/theme.js";
import cv from "../assets/resume.pdf"

export default {
  data() {
    return {
      themeStore,
    };
  },
  methods: {
    async downloadCV() {
      try {
        const url = window.URL.createObjectURL(new Blob([cv]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "resume.pdf");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>
