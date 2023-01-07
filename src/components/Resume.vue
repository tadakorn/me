<template>
  <div class="row">
    <div class="col-12 col-md-6 text-center">
      <p class="h1">Tech Skill</p>
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        <div v-for="logo in logos" :key="logo">
          <img
            alt="Vue logo"
            :src="`/src/assets/logo/${logo}.png`"
            width="50"
            height="50"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 text-center">
      <p class="h1">Soft Skill</p>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      logos: ["html", "css", "javascript", "bootstrap", "vuejs", "github"],
    };
  },
};
</script>

<style scoped></style>
