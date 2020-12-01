<template>
  <div>
    <div @mouseover="hover = true" @mouseleave="hover = false" />
    <Nav></Nav>
    <div>
      <img class="projects" src="../assets/projects.png" />
    </div>
    <section class="project">
      <div class="image">
        <img class="zencal" src="../assets/zencal.png" alt="" />
      </div>
      <div class="text">
        <a href="https://zencal-b5217.web.app/"><h2>ZenCal</h2></a>
        <p>
          An event and task calendar app, that allows users to log in and create
          reminders for their important events and tasks. Built with Vue.js and
          Firebase.
        </p>
      </div>
    </section>
    <section class="project">
      <div class="image">
        <img class="celestial" src="../assets/celestial.png" alt="" />
      </div>
      <div class="text">
        <a href="https://celestial-weather.netlify.app/"
          ><h2>Celestial Weather</h2></a
        >
        <p>
          A project using pure vanilla javascript to create a basic frontend
          framework. Multiple API calls to create an interesting user experience
          including horoscopes, APOD, and the current local weather.
        </p>
      </div>
    </section>
    <section class="project">
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
    </section>
    <section class="project">
      <div class="image">
        <img class="makangani" src="../assets/makangani.png" alt="" />
      </div>
      <div class="text">
        <a href="https://makangani.netlify.app/"><h2>Makangani</h2></a>
        <p>
          Offical site for Leipzig, DE based rapper
          <a href="https://open.spotify.com/artist/0yC4F5v6MCGhYGUvY49DRm"
            >Makangani</a
          >. Built with pure vanilla javascript, html, and css3. Inspired by the
          designs from Dreamville Records artists such as JID, Mereba, and Ari
          Lennox.
        </p>
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

@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

.projects {
  height: 80vh;
  width: 80vw;
  display: flex;
  margin-top: 2rem;
}

.image {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.zencal,
.celestial,
.devhaus,
.makangani {
  max-width: 80vw;
  max-height: 80vh;
  border: 1px solid gray;
}

.project {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem;
  cursor: url("/assets/cursor.png");
}

.text {
  visibility: hidden;
  width: 50%;
  height: 60%;
  align-content: center;
  font-family: "NaftaLight-Regular";
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.2s, visibility 0.2s;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 4rem;
  color: white;
  text-align: left;
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
  width: 50%;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: pink;
}
</style>
