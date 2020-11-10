<template>
  <div>
    <nav>
      <div class="home">
        <router-link class="link" to="/">Michaela Arratoon</router-link>
      </div>
      <div class="menu">
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
        <router-link class="link" to="/projects">Projects</router-link>
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
@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

nav {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  font-family: "NaftaLight-Regular";
  font-size: 32px;
  background-color: black;
  margin: 0;
  padding: 2rem;
  align-items: center;
}

.home {
  display: flex;
  align-items: left;
  width: 50vw;
}

.menu {
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
}

.link {
  text-decoration-line: none;
  color: black;
  padding: 0 2rem;
  color: white;
}

.link:hover {
  color: pink;
  background-color: black;
  border-radius: 50px;
}
</style>
