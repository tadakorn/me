<template>
  <section id="home" class="theme-primary">
    <div class="container first-page">
      <FirstPage />
    </div>
  </section>

  <section id="resume" class="section2 theme-secondary">
    <div class="container">
      <Resume />
    </div>
  </section>

  <section id="projects" class="theme-primary">
    <div class="text-center text-white p-5">
      <div class="container" id="workshop">
        <div><MyWorkShop /></div>
      </div>
    </div>
  </section>

  <section id="contact" class="section3 theme-secondary">
    <div class="container" id="contact">
      <ContactMe />
    </div>
  </section>
</template>

<script>
import MyWorkShop from "../components/MyWorkShop.vue";
import FirstPage from "../components/FirstPage.vue";
import Resume from "../components/Resume.vue";
import ContactMe from "../components/ContactMe.vue";

export default {
  components: {
    MyWorkShop,
    FirstPage,
    Resume,
    ContactMe,
  },
};
</script>

<style scoped>
.section2 {
  padding-top: 100px;
  padding-bottom: 100px;
}
.section3 {
  padding-top: 100px;
  padding-bottom: 100px;
}

.theme-primary {
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}

.theme-secondary {
  background-color: var(--background-color-secondary);
  color: var(--text-primary-color);
}

.first-page {
  padding-top: 12rem;
  padding-bottom: 10rem;
}
</style>
