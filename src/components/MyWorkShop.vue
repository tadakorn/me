<template>
  <div class="container">
    <h2 class="pb-2 border-bottom text-center">Workshop</h2>
    <!-- Responsive -->
    <div class="row row-cols-1 row-cols-lg-3 py-5 justify-content-center">
      <div class="col">
        <div
          class="card h-100 bg-change click-card"
          @click="clickProject"
        >
          <img class="card-img-top" src="/img/crypto-exchange-workshop.png">
          <div class="card-body">
            <h5 class="card-title text-white">Crypto Exchange Website Clone</h5>
            <div class="card-subtitle">Vue.js, Bootstrap</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="d-flex h-100 align-items-center justify-content-center coming-soon rounded-2"
        >
          <h3 class="mb-0 text-white">Coming Soon . . .</h3>
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

.nav-link {
  color: var(--text-primary-color) !important;
}
.nav-link:hover {
  color: #f2cd5c;
}
.navbar-text-2 {
  font-size: 30px;
}
.bg-change {
  background-color: var(--background-color-workshop) !important;
}

.coming-soon {
  background-color: var(--background-color-workshop) !important;
}

.bg-change:hover {
  background-color: rgb(59 130 246) !important;
}
</style>
