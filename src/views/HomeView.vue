<template>
  <section id="home">
    <div
      class="bg-image-cover"
      style="
        background-image: url(https://cdn.pixabay.com/photo/2022/11/27/00/44/poppy-7618736_960_720.jpg);
      "
    >
      <div class="text-center text-white p-5">
        <div class="container">
          <FirstPage />
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="section2">
    <div class="container">
      <div class="row">
        <div class="col-6 text-center">
          <img
            alt="Vue logo"
            class="logo rounded-circle border border-2 shadow p-1 mb-2 bg-body rounded"
            src="../assets/Earn.jpeg"
            width="200"
            height="200"
          />
        </div>
        <div class="col-6 text-center">
          <AboutMe />
        </div>
      </div>
    </div>
  </section>

  <section id="resume" class="section3 theme">
    <div class="container">
      <Resume />
    </div>
  </section>

  <section id="projects" class="theme">
    <div
      class="bg-image-cover"
      style="
        background-image: url(https://cdn.pixabay.com/photo/2016/03/27/20/00/coffee-1284041_960_720.jpg);
      "
    >
      <div class="text-center text-white p-5">
        <div class="container">
          <div><MyProject /></div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="section3">
    <div class="container" id="contact">
      <ContactMe />
    </div>
  </section>

</template>

<script>
import MyPortfolio from "../components/MyPortfolio.vue";
import MyProject from "../components/MyProject.vue";
import FirstPage from "../components/FirstPage.vue";
import Button from "../components/Button.vue";
import Resume from "../components/Resume.vue";
import AboutMe from "../components/AboutMe.vue";
import ContactMe from "../components/ContactMe.vue";


export default {
  components: { 
    MyPortfolio,
    MyProject,
    FirstPage,
    Button,
    Resume,
    AboutMe,
    ContactMe,
  
  },
};
</script>

<style scoped>
.section2 {
  padding-top: 100px;
  padding-bottom: 100px;
  background: linear-gradient(#fff, #eef5fa);
}
.section3 {
  padding-top: 100px;
  padding-bottom: 100px;
}

.theme {
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}
</style>
