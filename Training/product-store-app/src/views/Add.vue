<template>
  <div>
    Product Name:
    <input type="text" v-model="product.name" class="form-control" />
    Price:
    <input type="number" v-model="product.price" class="form-control" />
    <button class="btn btn-success" @click="add()">Add Product</button>
  </div>
</template>

<script>
import { addProduct } from "../product.service.js";

export default {
  name: "Add",
  data() {
    return {
      product: { name: "", price: 0 }
    };
  },
  methods: {
    add() {
      addProduct(this.product).then(() => {
        alert("added");
        this.$router.push("/");
      });
    }
  }
};
</script>

