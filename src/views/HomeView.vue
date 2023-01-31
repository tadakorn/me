<template>
  <section id="home" class="section1 theme-primary first-page">
    <div class="container">
      <FirstPage />
    </div>
  </section>

  <section id="resume" class="section2 theme-secondary">
    <div class="container">
      <Resume />
    </div>
  </section>

  <section id="projects" class="theme-primary">
    <div class="p-5">
      <div class="container workshop-recent" id="workshop">
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
  padding-bottom: 12rem; 



}
.workshop-recent {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
