<template>
  <div>
    <form>
      <input type="text" v-model="user" />
      <button @click.prevent="login()">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EventDemo",
  data() {
    return {
      user: ""
    };
  },
  methods: {
    login() {
      this.user = "nagaraju setti";
    }
  }
};
</script>

<style lang="stylus"></style>