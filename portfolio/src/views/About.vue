<template>
  <div>
    <div class="nav">
      <div class="home">
        <router-link class="link" to="/">Michaela Arratoon</router-link>
      </div>
      <div class="menu">
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
        <router-link class="link" to="/projects">Projects</router-link>
      </div>
    </div>
    <div>
      <img src="../assets/about.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0 auto;
}

@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

.nav {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  font-family: "NaftaLight-Regular";
  font-size: 32px;
}

.link {
  text-decoration-line: none;
  color: black;
  padding: 0 2rem;
}

.link:hover {
  color: white;
  background-color: black;
  border-radius: 50px;
}

img {
  margin-top: 5rem;
  height: 80vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
