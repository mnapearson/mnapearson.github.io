<template>
  <div>
    <nav class="nav">
      <div class="home">
        <router-link class="link" to="/">Paradies Studio</router-link>
      </div>
      <div class="menu">
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/projects">Projects</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .nav {
    padding: 1rem;
    font-size: 18px;
  }
}

@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  font-family: "NaftaLight-Regular";
  font-size: 32px;
  background-color: black;
  margin: 0;
  border-radius: 5px;
  padding: 2rem;
  align-items: center;
  -webkit-animation: shadow-drop-center 0.4s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}

.home {
  display: flex;
  text-align: center;
}

.menu {
  display: flex;
}

.link {
  text-decoration-line: none;
  color: black;
  color: white;
  padding: 0 0.75rem;
}

.link:hover {
  color: pink;
  background-color: black;
  border-radius: 50px;
}
</style>
