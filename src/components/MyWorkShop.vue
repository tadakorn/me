<template>
  <div class="container">
    <h2 class="pb-2 border-bottom">Workshop</h2>
    <!-- Responsive -->
    <div
      class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 justify-content-center"
    >
      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg click-card"
          @click="clickProject"
        >
          <div class="d-flex flex-column p-4 pb-3 text-white text-shadow-1">
            <div class="pt-3 mt-5 mb-5">
              <h3>Crypto Exchange</h3>
              <h3>Website Clone</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-1.jpg')"
        >
          <div class="d-flex flex-column p-4 pb-3 text-white text-shadow-1">
            <h3 class="pt-3 mt-5 mb-5">Coming Soon...</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickProject() {
      let url = "https://cryptocur.vercel.app/";
      window.open(url, "_blank").focus();
    },
  },
};
</script>
<style scoped>
.click-card {
  cursor: pointer;
}
</style>
