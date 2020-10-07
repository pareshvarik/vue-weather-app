<template>
  <div>
    Username:
    <input type="text" name="username" v-model="username" />
    <br />Password:
    <input type="password" name="password" v-model="password" />
    <br />
    <button v-on:click="showData()">Submit</button>
    <button v-on:click="sayHello()">Say Hello</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    showData() {
      alert(this.username + " " + this.password);
    },
    sayHello() {
      console.log("Hello, good afternoon");
    }
  }
};
</script>

<style scoped>
</style>