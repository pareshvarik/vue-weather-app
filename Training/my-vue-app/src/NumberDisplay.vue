<template>
  <div>
    <h3>Numbers:</h3>
    <ul>
      <li v-for="n in nums" :key="n">{{n}}</li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from "./EventBus.js";

export default {
  name: "NumberDisplay",
  data() {
    return {
      nums: []
    };
  },
  created() {
    EventBus.$on("number-added", n => {
      this.nums.push(n);
    });
  }
};
</script>

<style scoped>
</style>