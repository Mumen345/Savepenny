<template>
  <div id="app">
    <NavComponent />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "App",
  components: {
    NavComponent,
  },
};
</script>
<style lang="scss">
#app {
   font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 2000px !important;
  margin: 0 auto;
  width: 100%;

}

.primary_color {
  background-color: #5856D6;
  color: #ffffff !important;
}
.primary_orange {
background: #FF7A00;
color: #ffffff;
}
.primary_green {
background: #00BFA6;
color: #ffffff;
}

.primary_btn {
  background-color: #5856D6;
  color: #ffffff !important;
  font-size: 16px;
  font-weight: medium;
  outline: none;
  border: none;
  padding: 15px 20px;
  border-radius: 14px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  
}

.secondary_btn {
  background-color: #ffffff;
  color: #5856D6;
  border: 1px solid 5856D6;
  padding: 15px 20px;
  text-align: center;
  font-weight: 700;
border-radius: 14px;
width: 100%;

}

nav {
  padding: 30px;

  a {
    font-weight: medium;
    text-decoration: none !important;
    font-size: 16px;
    // text-transform: capitalize !important;
    
    &.router-link-exact-active {
      color: #5856D6 !important;
      font-weight: bold;
      font-size: 17px;
      // text-decoration: underline !important;
      // border-bottom: 1px solid #5856D6;
    }
  }
}

.download_container {
    display: flex;
    gap: 10px;
}

@media screen and (max-width: 550px) {
  .primary_btn {
  font-size: 14px;
  font-weight: 500;
  
}

.secondary_btn {
  font-size: 14px;
  font-weight: 500;

}
}
.button_div {
    display: flex;
    width: 100%;
    gap: 12px;
}
a {
  text-decoration: none;
}

</style>
