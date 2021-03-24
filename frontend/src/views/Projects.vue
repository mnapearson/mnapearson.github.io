<template>
  <div>
    <div @mouseover="hover = true" @mouseleave="hover = false" />
    <Nav></Nav>
    <div class="main">
      <img class="projects" src="../assets/projects.png" />
    </div>
    <section class="project-main">
      <div class="project">
        <div class="image">
          <img class="zencal" src="../assets/zencal.png" alt="" />
        </div>
        <div class="text">
          <a href="https://zencal-b5217.web.app/"><h2>ZenCal</h2></a>
          <p>
            An event and task calendar app, that allows users to log in and
            create reminders for their important events and tasks. Built with
            Vue.js and Firebase.
          </p>
        </div>
      </div>

      <div class="project">
        <div class="image">
          <img class="celestial" src="../assets/celestial.png" alt="" />
        </div>
        <div class="text">
          <a href="https://celestial-weather.netlify.app/"
            ><h2>Celestial Weather</h2></a
          >
          <p>
            A project using pure vanilla javascript to create a basic frontend
            framework. Multiple API calls to create an interesting user
            experience including horoscopes, APOD, and the current local
            weather.
          </p>
        </div>
      </div>

      <div class="project">
        <div class="image">
          <img class="devhaus" src="../assets/devhaus.png" alt="" />
        </div>
        <div class="text">
          <a href="https://devhaus-testing.web.app"><h2>DevHaus</h2></a>
          <p>
            A site for members of
            <a href="https://codecampleipzig.de/">Code Camp Leipzig</a> to
            connect, contact eachother, and keep up to date with events and
            workshops that are being organized and offered. Built with Vue.js,
            Vuex, Firebase, and Tailwind-CSS.
          </p>
        </div>
      </div>

      <div class="project">
        <div class="image">
          <img class="makangani" src="../assets/makangani.png" alt="" />
        </div>
        <div class="text">
          <a href="https://makangani.netlify.app/"><h2>Makangani</h2></a>
          <p>
            Offical site for Leipzig, DE based rapper
            <a href="https://open.spotify.com/artist/0yC4F5v6MCGhYGUvY49DRm"
              >Makangani</a
            >. Built with pure vanilla javascript, html, and css3. Inspired by
            the designs from Dreamville Records artists such as JID, Mereba, and
            Ari Lennox.
          </p>
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
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0 auto;
  cursor: url();
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

.projects {
  height: 650px;
  width: 650px;
  display: flex;
  margin-top: 2rem;
}

.project-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 410px;
  margin: 2rem;
  border: 1px solid gray;
}

.project img {
  height: 410px;
  width: 650px;
}

.text {
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-family: "NaftaLight-Regular";
  transition: opacity 0.2s, visibility 0.2s;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  color: white;
  padding: 4rem 2rem;
  width: 500px;
  height: 250px;
}

h2 {
  margin-bottom: 1rem;
  font-size: 40px;
}

h2:hover {
  color: pink;
}

.project:hover .text {
  visibility: visible;
  opacity: 1;
}

p {
  font-size: 16px;
  line-height: 3rem;
  width: 80%;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: pink;
}
</style>
