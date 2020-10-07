<template>
  <div>
    <div v-if="loading">Please Wait</div>
    <div v-else>
      <table class="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr v-for="p in products" :key="p.id">
          <td>{{p.id}}</td>
          <td>{{p.name}}</td>
          <td>{{p.price}}</td>
          <td>
            <router-link :to="{name: 'up', params: {product: p}}" class="btn btn-info">Update</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click="remove(p.id)">Delete</button>
          </td>
        </tr>
      </table>
      <router-link to="/add" class="btn btn-primary">Add</router-link>
    </div>
  </div>
</template>

<script>
import { getAll, deleteProduct } from "../product.service.js";

export default {
  name: "Home",
  data() {
    return {
      products: [],
      loading: false
    };
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      getAll()
        .then(res => (this.products = res.data))
        .catch(err => console.error(err))
        .finally(() => (this.loading = false));
    }, 5000);
  },
  methods: {
    remove(id) {
      deleteProduct(id).then(() => {
        alert("deleted...");
        this.$router.go();
      });
    }
  }
};
</script>

<style scoped>
</style>
