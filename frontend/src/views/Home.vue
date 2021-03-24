<template>
  <div>
    <div class="welcome">
      <h1>Paradies Studio</h1>
      <h2>Web Design & Development</h2>
    </div>
    <div class="cubes">
      <div class="about">
        <div class="scene">
          <router-link class="about" to="/about">
            <div class="cube">
              <div class="cube-face cube-face-front">
                <img
                  src="../assets/about.png"
                  height="150px"
                  width="150px"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-back">
                <img
                  src="../assets/about.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-left">
                <img
                  src="../assets/about.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-right">
                <img
                  src="../assets/about.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-top">
                <img
                  src="../assets/about.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-bottom">
                <img
                  src="../assets/about.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="projects">
        <div class="scene">
          <router-link class="projects" to="/projects">
            <div class="cube">
              <div class="cube-face cube-face-front">
                <img
                  src="../assets/projects.png"
                  height="150px"
                  width="150px"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-back">
                <img
                  src="../assets/projects.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-left">
                <img
                  src="../assets/projects.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-right">
                <img
                  src="../assets/projects.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-top">
                <img
                  src="../assets/projects.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-bottom">
                <img
                  src="../assets/projects.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="contact">
        <div class="scene">
          <router-link class="contact" to="/contact">
            <div class="cube">
              <div class="cube-face cube-face-front">
                <img
                  src="../assets/contact.png"
                  height="150px"
                  width="150px"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-back">
                <img
                  src="../assets/contact.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-left">
                <img
                  src="../assets/contact.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-right">
                <img
                  src="../assets/contact.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-top">
                <img
                  src="../assets/contact.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-bottom">
                <img
                  src="../assets/contact.png"
                  height="150px"
                  width="150px;"
                  id="cube-image"
                />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .cubes {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  .about .scene {
    margin: 0;
    padding: 0;
  }

  .contact .scene {
    margin: 0;
    padding: 0;
  }

  .welcome h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 0;
  }

  .welcome h2 {
    font-size: 24px;
  }
}
@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

h1 {
  font-family: "NaftaLight-Regular";
  font-size: 72px;
  -webkit-animation: text-pop-up-top 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: text-pop-up-top 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

h2 {
  font-family: "NaftaLight-Regular";
  font-size: 52px;
  margin: 0;
  -webkit-animation: text-pop-up-top 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: text-pop-up-top 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}

.cubes {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 5rem;
  justify-content: space-evenly;
}

.scene {
  padding: 3rem;
}

.about {
  -webkit-animation: roll-in-blurred-left 4s cubic-bezier(0.23, 1, 0.32, 1) 1s
    both;
  animation: roll-in-blurred-left 4s cubic-bezier(0.23, 1, 0.32, 1) 1s both;
}

@-webkit-keyframes roll-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
    transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes roll-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
    transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

.projects {
  -webkit-animation: roll-in-blurred-bottom 4s cubic-bezier(0.23, 1, 0.32, 1) 1s
    both;
  animation: roll-in-blurred-bottom 4s cubic-bezier(0.23, 1, 0.32, 1) 1s both;
}

@-webkit-keyframes roll-in-blurred-bottom {
  0% {
    -webkit-transform: translateY(800px) rotate(720deg);
    transform: translateY(800px) rotate(720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotate(0deg);
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}
@keyframes roll-in-blurred-bottom {
  0% {
    -webkit-transform: translateY(800px) rotate(720deg);
    transform: translateY(800px) rotate(720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotate(0deg);
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}

.contact {
  -webkit-animation: roll-in-blurred-right 4s cubic-bezier(0.23, 1, 0.32, 1) 1s
    both;
  animation: roll-in-blurred-right 4s cubic-bezier(0.23, 1, 0.32, 1) 1s both;
}

@-webkit-keyframes roll-in-blurred-right {
  0% {
    -webkit-transform: translateX(1000px) rotate(720deg);
    transform: translateX(1000px) rotate(720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes roll-in-blurred-right {
  0% {
    -webkit-transform: translateX(1000px) rotate(720deg);
    transform: translateX(1000px) rotate(720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

.cube {
  margin: 1 rem;
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(30deg) rotateY(30deg);
  -webkit-transform-style: preserve-3d;
  -webkit-animation: rotatecube 40s infinite;

  -moz-transform-style: preserve-3d;
  -moz-animation: rotatecube 40s infinite;
}

@-webkit-keyframes rotatecube {
  0% {
    -webkit-transform: rotateX(0deg) rotateY(360deg) rotateZ(90deg);
  }
  25% {
    -webkit-transform: rotateX(90deg) rotateY(270deg) rotateZ(180deg);
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg);
  }
  75% {
    -webkit-transform: rotateX(270deg) rotateY(90deg) rotateZ(360deg);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(0deg) rotateZ(270deg);
  }
}

@-moz-keyframes rotatecube {
  0% {
    -moz-transform: rotateX(0deg) rotateY(360deg) rotateZ(90deg);
  }
  25% {
    -moz-transform: rotateX(90deg) rotateY(270deg) rotateZ(180deg);
  }
  50% {
    -moz-transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg);
  }
  75% {
    -moz-transform: rotateX(270deg) rotateY(90deg) rotateZ(360deg);
  }
  100% {
    -moz-transform: rotateX(360deg) rotateY(0deg) rotateZ(270deg);
  }
}

.cube-face {
  width: 150px;
  height: 150px;
  position: absolute;
  opacity: 0.7;
}

.cube-face-front {
  transform: translate3d(0, 0, 75px);
}

.cube-face-back {
  transform: rotateY(180deg) translate3d(0, 0, 75px);
}

.cube-face-left {
  transform: rotateY(-90deg) translate3d(0, 0, 75px);
}

.cube-face-right {
  transform: rotateY(90deg) translate3d(0, 0, 75px);
}

.cube-face-top {
  transform: rotateX(90deg) translate3d(0, 0, 75px);
}

.cube-face-bottom {
  transform: rotateX(-90deg) translate3d(0, 0, 75px);
}

.scene:hover {
  z-index: 0;
}
</style>
