<template>
  <div>
    <Nav></Nav>
    <div>
      <img class="about" src="../assets/about.png" />
    </div>
    <section class="about-main">
      <div class="selfie">
        <img class="profile one" src="../assets/profile1.jpeg" />
        <img class="profile two" src="../assets/profile2.jpeg" />
        <img class="profile three" src="../assets/profile3.jpeg" />
        <img class="profile four" src="../assets/profile4.jpeg" />
      </div>
      <div class="description">
        <div class="text">
          <h1>Hey stranger,</h1>
          <h1>I am a UX obsessed design-driven Software Engineer.</h1>
          <p>
            My name is Michaela Pearson. I like to make websites. Let's make one
            together, shall we?
          </p>
          <div class="resume">
            <p>*Download my CV</p>
            <img class="finger" src="../assets/pointing-finger.png" alt="" />
            <a href="../map-resume.pdf" download="../map-resume.pdf"
              ><img class="icon" src="../assets/resume-icon.png" alt=""
            /></a>
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
}

@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

.about {
  height: 80vh;
  width: 80vw;
  margin-top: 2rem;
  display: flex;
}

.about-main {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  width: 100vw;
  margin-bottom: 3rem;
}

.description {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
}

.resume {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
}

.finger {
  height: 35px;
  width: auto;
  display: flex;
  margin-top: 2rem;
  margin-left: 0.5rem;
}

.icon {
  height: 50px;
  width: auto;
  margin-top: 1.5rem;
  margin-left: 1rem;
}

.text {
  font-family: "NaftaLight-Regular";
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

h1 {
  width: 50%;
}

p {
  margin-top: 2rem;
  line-height: 2rem;
  width: 50%;
}

.selfie {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 50%;
}

.profile {
  max-width: 30%;
  max-height: auto;
  margin: 1rem;
}

.four {
  -webkit-animation: flicker-in-1 1s linear 3s both;
  animation: flicker-in-1 1s linear 3s both;
}
.three {
  -webkit-animation: flicker-in-1 1s linear 2s both;
  animation: flicker-in-1 1s linear 2s both;
}

.two {
  -webkit-animation: flicker-in-1 1s linear 1s both;
  animation: flicker-in-1 1s linear 1s both;
}

.one {
  -webkit-animation: flicker-in-1 1s linear both;
  animation: flicker-in-1 1s linear both;
}
@-webkit-keyframes flicker-in-1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    opacity: 1;
  }
  30.5% {
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes flicker-in-1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    opacity: 1;
  }
  30.5% {
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
