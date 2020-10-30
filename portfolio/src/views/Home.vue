<template>
  <div>
    <div class="welcome"><h1>Michaela Arratoon</h1></div>
    <div class="cubes">
      <div class="about">
        <div class="scene">
          <router-link class="about" to="/about">
            <div class="cube">
              <div class="cube-face cube-face-front">
                <img
                  src="../assets/about.png"
                  height="200px"
                  width="200px"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-back">
                <img
                  src="../assets/about.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-left">
                <img
                  src="../assets/about.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-right">
                <img
                  src="../assets/about.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-top">
                <img
                  src="../assets/about.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-bottom">
                <img
                  src="../assets/about.png"
                  height="200px"
                  width="200px;"
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
                  height="200px"
                  width="200px"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-back">
                <img
                  src="../assets/projects.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-left">
                <img
                  src="../assets/projects.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-right">
                <img
                  src="../assets/projects.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-top">
                <img
                  src="../assets/projects.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-bottom">
                <img
                  src="../assets/projects.png"
                  height="200px"
                  width="200px;"
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
                  height="200px"
                  width="200px"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-back">
                <img
                  src="../assets/contact.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-left">
                <img
                  src="../assets/contact.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-right">
                <img
                  src="../assets/contact.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-top">
                <img
                  src="../assets/contact.png"
                  height="200px"
                  width="200px;"
                  id="cube-image"
                />
              </div>
              <div class="cube-face cube-face-bottom">
                <img
                  src="../assets/contact.png"
                  height="200px"
                  width="200px;"
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
@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

h1 {
  font-family: "NaftaLight-Regular";
  font-size: 72px;
}

.welcome {
  display: flex;
  justify-content: center;
  margin-top: 7rem;
}

.cubes {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
  justify-content: space-evenly;
}

.inspiration {
  margin-top: 15rem;
}

.projects {
  margin-top: 8rem;
}

.cube {
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
  width: inherit;
  height: inherit;
  position: absolute;
  opacity: 0.7;
}

.cube-face-front {
  transform: translate3d(0, 0, 100px);
}

.cube-face-back {
  transform: rotateY(180deg) translate3d(0, 0, 100px);
}

.cube-face-left {
  transform: rotateY(-90deg) translate3d(0, 0, 100px);
}

.cube-face-right {
  transform: rotateY(90deg) translate3d(0, 0, 100px);
}

.cube-face-top {
  transform: rotateX(90deg) translate3d(0, 0, 100px);
}

.cube-face-bottom {
  transform: rotateX(-90deg) translate3d(0, 0, 100px);
}

.scene:hover {
  z-index: 0;
}
</style>
