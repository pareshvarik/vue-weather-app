<template>
  <div>
    <input type="number" v-model="num" />
    <button @click="addNumber()">Add Number</button>
  </div>
</template>

<script>
import { EventBus } from "./EventBus.js";
export default {
  name: "NumberSubmit",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    addNumber() {
      EventBus.$emit("number-added", this.num);
    }
  }
};
</script>

<style scoped>
</style>