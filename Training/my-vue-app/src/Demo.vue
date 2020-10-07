<template>
  <div>
    <h3>Rendering List</h3>
    <ul>
      <li v-for="c in courses" :key="c">{{c}}</li>
    </ul>
    <h3>Rendering dropdown</h3>
    <select>
      <option v-for="c in courses" :key="c">{{c}}</option>
    </select>
    <h3>Rendering table</h3>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tr v-for="p in products" :key="p.id">
        <td>{{p.id}}</td>
        <td>{{p.name}}</td>
        <td>{{p.price}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      courses: ["java", "vue", "angular", "react"],
      products: [
        { id: 1, name: "apple", price: 49 },
        { id: 2, name: "pen", price: 9 },
        { id: 3, name: "watch", price: 1999 }
      ]
    };
  }
};
</script>

<style scoped>
</style>