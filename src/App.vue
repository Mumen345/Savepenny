<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1600px !important;
  margin: 0 auto;
  width: 100%;

}

.primary_color {
  background-color: #7750A1;
  color: #ffffff !important;
}

.primary_btn {
  background-color: #7750A1;
  color: #ffffff !important;
  font-size: 14px;
  font-weight: medium;
  outline: none;
  border: none;
  padding: 15px 20px;
  border-radius: 7px;

}

.secondary_btn {
  background-color: none;
  color: #7750A1;

}

nav {
  padding: 30px;

  a {
    font-weight: medium;
    text-decoration: none;
    font-size: 16px;
    text-transform: capitalize !important;

    &.router-link-exact-active {
      color: #7750A1;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}

h1 {
  font-family: Quentin;
  color: #7750A1;
  font-size: 70px;
  line-height: 139.75%;
  letter-spacing: 0.02em;
}

h2 {
  font-family: Quentin;
  color: #7750A1;
  font-size: 48px;
  line-height: 152.52%;
  color: #7750A1;

}

@font-face {
  font-family: "Quentin";
  src: url("./assets/fonts/QuentinPro.ttf");
}
</style>
