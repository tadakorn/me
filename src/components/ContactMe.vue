<template>
  <div class="row">
    <div class="col-12 col-md-6 text-center">
      <div>
        <h1 class="spacing-header">C O N T A C T</h1>
        <br />
        <p>tadakorn.nakkaew@gmail.com</p>
        <p>Chatuchak, Bangkok, Thailand</p>
      </div>
    </div>
    <div class="col-12 col-md-6 text-center">
      <div>
        <h1>F O L L O W M E</h1>
        <br />
        <a href="" @click="clickGithub" class="github-profile"
          >github.com/tadakorn</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickGithub() {
      let url = "https://github.com/tadakorn";
      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style scoped>
.github-profile {
  text-decoration: none;
  color: var(--text-primary-color);
}
</style>
