<template>
  <div>
    <ul>
      <li v-for="(t, index) in todolist" :key="t">
        {{t}}
        <button v-on:click="remove(index)">Remove</button>
      </li>
    </ul>
    <input type="text" v-model="task" />
    <button v-on:click="add()">Add Task</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      todolist: [],
      task: ""
    };
  },
  methods: {
    add() {
      this.todolist.push(this.task);
    },
    remove(ind) {
      this.todolist.splice(ind, 1);
    }
  }
};
</script>

<style scoped>
</style>