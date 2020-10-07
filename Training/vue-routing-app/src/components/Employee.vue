<template>
  <div>
    <p>Name: {{$data.name}}</p>
    <button @click="sayHello()">Say</button>
  </div>
</template>

<script>
import Person from "./Person.vue";
export default {
  name: "Employee",
  data() {
    return {
      name: "naga"
    };
  },
  mixins: [Person],
  created() {
    console.log(this.$data);
  }
};
</script>