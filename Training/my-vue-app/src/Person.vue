<template>
  <div>
    <Employee :empName="name" :empCity="city" :empId="id" :empAge="age" />
  </div>
</template>

<script>
import Employee from "./Employee.vue";

export default {
  name: "Person",
  components: {
    Employee
  },
  data() {
    return {
      name: "nagaraju setti",
      city: "hyderabad",
      id: 123,
      age: 29
    };
  }
};
</script>

<style scoped>
</style>