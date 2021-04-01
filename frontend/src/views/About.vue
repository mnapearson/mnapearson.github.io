<template>
  <div>
    <Nav></Nav>
    <div class="main">
      <img class="main-image" src="../assets/about.png" />
    </div>
    <section class="about-main">
      <div class="selfie">
        <img class="profile one" src="../assets/profile1.jpeg" />
      </div>
      <div class="about-content">
        <div class="text">
          <h1>Hi, thanks for being here.</h1>

          <p>
            My name is Michaela Pearson. <br />I am the founder of Paradies
            Studio. <br />I like to make websites. <br />Let's make one
            together, shall we?
          </p>
          <div class="contact-button">
            <router-link class="contact" to="/contact">
              <button class="glow-on-hover">Get In Touch!</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
* {
  margin: 0 auto;
  font-family: "NaftaLight-Regular";
  line-height: 2rem;
}

@media only screen and (max-width: 600px) {
  .main img {
    width: 300px;
    height: 300px;
  }
}

.main-image {
  height: 650px;
  width: 650px;
  display: flex;
  margin-top: 2rem;
}

.about-content {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.selfie {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.profile {
  max-width: 75%;
  margin: 1rem;
}

.text {
  display: flex;
  flex-direction: column;
  max-width: 75%;
  margin-top: 2rem;
}

p {
  margin-top: 1.5rem;
  font-size: 18px;
  text-align: center;
}

.contact-button {
  display: flex;
  align-items: center;
  margin: 2rem;
}

.glow-on-hover {
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
