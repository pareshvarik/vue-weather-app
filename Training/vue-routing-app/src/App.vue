<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>-->

  <div>
    <employee />
    <!-- <counter /> -->
  </div>
</template>

<script>
import Employee from "./components/Employee.vue";
// import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Employee
    // Counter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
