<template>
  <div class="home">
    <!-- <h1> My Weather App</h1> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Weather />
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from "@/components/Weather.vue";

export default {
  name: "Home",
  components: {
    Weather
  }
};
</script>
