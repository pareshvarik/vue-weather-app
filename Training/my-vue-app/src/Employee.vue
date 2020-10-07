<template>
  <div>
    <p>Name: {{empName}}</p>
    <p>City: {{empCity}}</p>
    <p>ID: {{empId}}</p>
    <p>Age: {{empAge}}</p>
  </div>
</template>

<script>
export default {
  name: "Employee",
  props: {
    empCity: String,
    empId: Number,
    empName: {
      type: String,
      required: true
    },
    empAge: {
      type: Number,
      default: 25
    },
    empSkill: String
  },
  data() {
    return {
      age: 29
    };
  }
};
</script>

<style scoped>
</style>