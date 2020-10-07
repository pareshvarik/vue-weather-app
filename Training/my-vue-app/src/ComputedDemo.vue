<template>
  <div>
    <p>Count: {{count}}</p>
    <div>{{"count is: " + nums.length * 2}}</div>
  </div>
</template>

<script>
export default {
  name: "ComputedDemo",
  data() {
    return {
      nums: [3, 1, 6, 4]
    };
  },
  computed: {
    count() {
      return "the count is " + this.nums.length;
    }
  }
};
</script>

<style scoped>
</style>