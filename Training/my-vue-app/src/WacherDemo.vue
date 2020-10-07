<template>
  <div>
    <p>My Name is {{user}}</p>
    <p>
      <input type="password" v-model="pass" />
    </p>
    <button @click="changeUserName()">Change</button>
  </div>
</template>

<script>
export default {
  name: "WatcherDemo",
  data() {
    return {
      user: "nagaraju",
      pass: "naga"
    };
  },
  methods: {
    changeUserName() {
      this.user = "nagaraju setti";
    }
  },
  watch: {
    user() {
      console.log(this.user);
    },
    pass(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
};
</script>

<style scoped>
</style>