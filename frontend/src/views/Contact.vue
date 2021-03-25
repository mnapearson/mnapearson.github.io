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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

#mc-embedded-subscribe-form {
  margin: 2rem;
  font-family: "NaftaLight-Regular";
}

#mce-MMERGE2 {
  width: 200px;
  height: 200px;
}

input {
  font-family: "NaftaLight-Regular";
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 200px;
}

h1 {
  font-family: "NaftaLight-Regular";
  text-align: center;
  margin: 2rem 0 1rem;
}

.btn {
  cursor: pointer;
  padding: 8px 10px;
  outline: none;
  border: none;
  background: black;
  font-size: 16px;
  font-weight: bold;
  font-family: "NaftaLight-Regular";
  color: white;
  width: 20%;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  text-align: center;
}

.btn:hover {
  background-color: pink;
  color: black;
}

@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}
</style>
