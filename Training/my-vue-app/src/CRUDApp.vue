<template>
  <div>
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
    <button @click="add()">Add</button>
    <button @click="updateProduct()">Update</button>
    <button @click="removeProduct()">Delete</button>
  </div>
</template>

<script>
import { getAll, addProduct, update, remove } from "./product.service.js";
export default {
  name: "CrudApp",
  data() {
    return {
      products: []
    };
  },
  methods: {
    add() {
      let p = { name: "watch", price: 999 };
      addProduct(p).then(() => {
        alert("added...");
      });
    },
    updateProduct() {
      let p = { id: 2, name: "earphones" };
      update(p).then(() => {
        alert("updated...");
      });
    },
    removeProduct() {
      remove(4).then(() => {
        alert("deleted...");
      });
    }
  },
  created() {
    getAll().then(res => (this.products = res.data));
  }
};
</script>

<style scoped>
</style>