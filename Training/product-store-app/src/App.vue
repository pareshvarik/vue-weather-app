<template>
  <div>
    <!-- <button v-for="t in tabs" :key="t" @click="currentTab=t">{{t}}</button>

    <component :is="currentTabComponent"></component>-->
    <router-view />
  </div>
</template>


<script>
//import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import Contact from "./views/Contact.vue";

export default {
  name: "App",
  components: {
    // Home,
    // About,
    // Contact
  },
  data() {
    return {
      tabs: ["Home", "About", "Contact"],
      currentTab: "Home"
    };
  },
  computed: {
    currentTabComponent() {
      return this.currentTab;
    }
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
