<template>
  <div>
    <Nav></Nav>
    <div class="main">
      <img class="main-image" src="../assets/contact.png" />
    </div>
    <div class="contact">
      <iframe
        src="https://us1.list-manage.com/contact-form?u=0f9f0b1c4827784518269bdd5&form_id=5fb9b9c06d9bc8f17af53a14c28c1bbd"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "ContactForm",
  components: {
    Nav,
  },
};
</script>

<style scoped>
* {
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .main img {
    width: 300px;
    height: 300px;
  }
}

@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

.main-image {
  height: 650px;
  width: 650px;
  display: flex;
  margin-top: 2rem;
}

.contact {
  display: flex;
  align-items: center;
  height: 1000px;
  width: auto;
}

.pageContainer-nfp_a,
.wink .pageContainer-nfp_a {
  padding: 0;
}
</style>
