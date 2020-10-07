<template>
  <div>
    <!-- <login /> -->
    <!-- <book-my-show /> -->
    <!-- <todo /> -->
    <!-- <ProductCategory /> -->
    <!-- <event-demo /> -->
    <!-- <watcher-demo /> -->
    <!-- <computed-demo /> -->
    <!-- <Person/> -->
    <!-- <product-list /> -->

    <!-- <NumberDisplay /> -->
    <!-- <NumberSubmit /> -->
    <crud-app />
  </div>
</template>

<script>
//import Login from "./login.vue";
//import BookMyShow from "./BookMyShow.vue";
//import Todo from "./Todo.vue";
//import ProductCategory from "./CategoryAndProduct.vue";
//import EventDemo from "./EventDemo.vue";
// import WatcherDemo from "./WacherDemo.vue";
// import ComputedDemo from "./ComputedDemo.vue";
// import Person from './Person.vue'
// import ProductList from "./ProductList.vue";
// import NumberSubmit from "./NumberSubmit.vue";
// import NumberDisplay from "./NumberDisplay.vue";
import CrudApp from "./CRUDApp.vue";
export default {
  name: "App",
  components: {
    //Login
    //BookMyShow
    //Todo
    //ProductCategory
    // EventDemo
    // WatcherDemo
    // ComputedDemo
    // Person
    // ProductList
    // NumberSubmit,
    // NumberDisplay
    CrudApp
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
