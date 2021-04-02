<template>
  <div>
    <div @mouseover="hover = true" @mouseleave="hover = false" />
    <Nav></Nav>
    <div class="main">
      <img class="main-image" src="../assets/projects.png" />
    </div>
    <section class="project-main">
      <carousel :per-page="1" :mouse-drag="true" :loop="true">
        <slide class="slide">
          <div class="project">
            <div class="image">
              <img class="antarkeith" src="../assets/antarkeith.png" alt="" />
            </div>
            <div class="mobile-text">
              <a href="https://www.antarkeith.com/"><h2>Antar Keith</h2></a>
              <p>
                A portfolio page for black rights activist, speaker, educator,
                and political figure, Antar Keith. Built with with the basics,
                in one-pager format. Embedding multiple media files and articles
                for easy access to diverse content.
              </p>
            </div>
            <div class="text">
              <a href="https://www.antarkeith.com/"><h2>Antar Keith</h2></a>
              <p>
                A portfolio page for black rights activist, speaker, educator,
                and political figure, Antar Keith. Built with with the basics,
                in one-pager format. Embedding multiple media files and articles
                for easy access to diverse content.
              </p>
            </div>
          </div>
        </slide>
        <slide class="slide">
          <div class="project">
            <div class="image">
              <img class="devhausweb" src="../assets/devhausweb.png" alt="" />
            </div>
            <div class="mobile-text">
              <a href="https://devhausleipzig.netlify.app"
                ><h2>Devhaus Leipzig</h2></a
              >
              <p>
                An informative page for the many projects of local studio and
                software education center, Devhaus Leipzig. Using React, SASS,
                and built under the mentorship of Code Camp Leipzig co-founder
                Gabriel Heinrich.
              </p>
            </div>
            <div class="text">
              <a href="https://devhausleipzig.netlify.app"
                ><h2>Devhaus Leipzig</h2></a
              >
              <p>
                An informative page for the many projects of local studio and
                software education center, Devhaus Leipzig. Using React, SASS,
                and built under the mentorship of Code Camp Leipzig co-founder
                Gabriel Heinrich.
              </p>
            </div>
          </div>
        </slide>
        <slide class="slide">
          <div class="project">
            <div class="image">
              <img class="hallocity" src="../assets/hallocity.png" alt="" />
            </div>
            <div class="mobile-text">
              <a href="https://hallocity.org"><h2>Hallo.City</h2></a>
              <p>
                A landing page built for collecting user emails and advertising
                the development of the new web app for Hallo.City. Built with
                the basics. Design created by the wonderful UX/UI Designer
                Bárbara Niño.
              </p>
            </div>
            <div class="text">
              <a href="https://hallocity.org"><h2>Hallo.City</h2></a>
              <p>
                A landing page built for collecting user emails and advertising
                the development of the new web app for Hallo.City. Built with
                the basics. Design created by the wonderful UX/UI Designer
                Bárbara Niño.
              </p>
            </div>
          </div>
        </slide>

        <slide class="slide">
          <div class="project">
            <div class="image">
              <img class="celestial" src="../assets/celestial.png" alt="" />
            </div>
            <div class="mobile-text">
              <a href="https://celestial-weather.netlify.app/"
                ><h2>Celestial Weather</h2></a
              >
              <p>
                A project using pure vanilla javascript to create a basic
                frontend framework. Multiple API calls to create a diverse user
                experience including horoscopes, APOD, and the users local
                weather.
              </p>
            </div>
            <div class="text">
              <a href="https://celestial-weather.netlify.app/"
                ><h2>Celestial Weather</h2></a
              >
              <p>
                A project using pure vanilla javascript to create a basic
                frontend framework. Multiple API calls to create a diverse user
                experience including horoscopes, APOD, and the users local
                weather.
              </p>
            </div>
          </div>
        </slide>
        <slide class="slide">
          <div class="project">
            <div class="image">
              <img class="devhaus" src="../assets/devhaus.png" alt="" />
            </div>
            <div class="mobile-text">
              <a href="https://devhaus-testing.web.app"
                ><h2>DevHaus Memebers</h2></a
              >
              <p>
                A site for members of
                <a href="https://codecampleipzig.de/">Code Camp Leipzig</a> to
                connect, contact eachother, and keep up to date with events and
                workshops that are being organized and offered. Built with
                Vue.js, Vuex, Firebase, and Tailwind-CSS.
              </p>
            </div>
            <div class="text">
              <a href="https://devhaus-testing.web.app"
                ><h2>DevHaus Memebers</h2></a
              >
              <p>
                A site for members of
                <a href="https://codecampleipzig.de/">Code Camp Leipzig</a> to
                connect, contact eachother, and keep up to date with events and
                workshops that are being organized and offered. Built with
                Vue.js, Vuex, Firebase, and Tailwind-CSS.
              </p>
            </div>
          </div>
        </slide>
        <slide class="slide">
          <div class="project">
            <div class="image">
              <img class="makangani" src="../assets/makangani.png" alt="" />
            </div>
            <div class="mobile-text">
              <a href="https://makangani.netlify.app/"><h2>Makangani</h2></a>
              <p>
                Offical site for Leipzig, DE based rapper
                <a href="https://open.spotify.com/artist/0yC4F5v6MCGhYGUvY49DRm"
                  >Makangani</a
                >. Built with pure vanilla javascript, html, and css3. Inspired
                by the designs from Dreamville Records artists such as JID,
                Mereba, and Ari Lennox.
              </p>
            </div>
            <div class="text">
              <a href="https://makangani.netlify.app/"><h2>Makangani</h2></a>
              <p>
                Offical site for Leipzig, DE based rapper
                <a href="https://open.spotify.com/artist/0yC4F5v6MCGhYGUvY49DRm"
                  >Makangani</a
                >. Built with pure vanilla javascript, html, and css3. Inspired
                by the designs from Dreamville Records artists such as JID,
                Mereba, and Ari Lennox.
              </p>
            </div>
          </div>
        </slide>
      </carousel>
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
  font-family: "NaftaLight-Regular";
}

@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

.mobile-text {
  display: none;
}

.main-image {
  height: 650px;
  width: 650px;
  display: flex;
  margin-top: 2rem;
}

.project-main {
  margin-top: 0;
  padding-bottom: 4rem;
}

.project {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide {
  display: flex;
  justify-content: center;
}

.project img {
  height: 410px;
  width: 650px;
  border: 1px solid gray;
}

.text {
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

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

@media only screen and (max-width: 600px) {
  .main img {
    width: 300px;
    height: 300px;
  }

  .image img {
    margin-top: 3rem;
    width: 300px;
    height: 170px;
  }

  .project .text {
    display: none;
  }

  .project {
    flex-direction: column;
  }

  .mobile-text {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }

  h2 {
    font-size: 24px;
    text-decoration: underline;
  }

  a {
    color: black;
  }
}
</style>
