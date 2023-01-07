<template>
  <div class="row align-items-center">
    <div class="col-6">
      <h5>Hello I'm</h5>
      <h1>Tadakorn Nakkaew</h1>
      <h3>Front-end developer</h3>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae
        tortor condimentum lacinia quis vel. Purus non enim praesent elementum
        facilisis leo vel fringilla.
      </h5>
      <button
        type="button"
        :class="{
          'btn': true,
          'btn-outline-dark': themeStore.theme === 'light',
          'btn-outline-warning': themeStore.theme === 'dark',
          'mt-2': true,
        }"
      >
        Dowload CV
      </button>
    </div>
    <div class="col-6 text-center">
      <img
        alt="Vue logo"
        class="logo rounded-circle border border-2 shadow p-1 mb-2 bg-body rounded"
        src="../assets/profile.jpeg"
        width="300"
        height="300"
      />
    </div>
  </div>
  <!-- <div class="container">
   <p>HI, EVERYONE (:</p>
   <h1>Welcome to My ....</h1>
   <button type="button" class="btn btn-secondary btn-height">Click Here</button> -->
  <!-- <i class="fa fa-search"></i> -->
  <!-- </div>
   <font-awesome-icon icon="fa-solid fa-arrow-down" class="icon-fa" /> -->
</template>

<script>
import { themeStore } from "../store/theme.js";

export default {
  data() {
    return {
      themeStore,
    };
  },
};
</script>

<style scoped></style>
