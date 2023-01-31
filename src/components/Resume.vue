<template>
  <div class="row ">
    <div class="col-12 col-md-6 text-center">
      <p class="h1">Tech Skill</p>
      <div class="d-flex gap-3 flex-wrap justify-content-center p-4 pb-3">
        <div v-for="img in logos" :key="img">
          <img
            alt="Vue logo"
            :src="`/img/${img}.png`"
            width="50"
            height="50"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 text-center">
      <p class="h1">Soft Skill</p>
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        <div
          v-for="skill in softSkills"
          :key="skill.text"
          :class="{
            border: true,
            'border-dark': themeStore.theme === 'light',
            'border-warning': themeStore.theme === 'dark',
            'rounded-3': true,
            'px-3': true,
            'py-2': true,
          }"
        >
          <h5 class="mb-0">
            <font-awesome-icon :icon="skill.icon" /> {{ skill.text }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { themeStore } from "../store/theme.js";
export default {
  data() {
    return {
      logos: ["html", "css", "javascript", "bootstrap", "vuejs", "github"],
      softSkills: [
        { icon: "fa-solid fa-computer", text: "Self Learning" },
        { icon: "fa-regular fa-heart", text: "Gererous" },
        { icon: "fa-regular fa-handshake", text: "Interpersonal" },
      ],
      themeStore,
    };
  },
};
</script>

<style scoped></style>
