<template>
  <div>
    <Nav></Nav>
    <div>
      <img src="../assets/about.png" />
    </div>
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

img {
  height: 80vh;
  width: 80vw;
  display: flex;
}
</style>
