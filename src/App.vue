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

.vendor_hero_btn {
  outline: none;
  box-shadow: none;
  text-transform: capitalize;
  font-size: 16px;
  border: 1px solid #7750A1;
  width: 100%;
  padding: 15px 0;
  background-color: #F7EEFF;
  color: #7750A1;
  font-weight: 500;
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

@media screen and (max-width: 550px) {
  h1 {
    font-family: Quentin;
    color: #7750A1;
    font-size: 40px !important;
    line-height: 139.75%;
    letter-spacing: 0.02em;
  }

  h2 {
    font-family: Quentin;
    color: #7750A1;
    font-size: 30px !important;
    color: #7750A1;

  }
}

@media screen and (max-width: 700px) {
  h1 {
    font-family: Quentin;
    color: #7750A1;
    font-size: 70px;
    line-height: 139.75%;
    letter-spacing: 0.02em;
    width: 100%;
  }

  h2 {
    font-family: Quentin;
    color: #7750A1;
    font-size: 48px;
    line-height: 152.52%;
    color: #7750A1;
    width: 100%;

  }
}
</style>
