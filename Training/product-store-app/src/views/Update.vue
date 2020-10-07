<template>
  <div>
    ID:
    <input type="number" v-model="product.id" readonly class="form-control" />
    Name:
    <input type="text" v-model="product.name" class="form-control" />
    Price:
    <input type="number" v-model="product.price" class="form-control" />
    <button class="btn btn-success" @click="update()">Save</button>
  </div>
</template>

<script>
import { updateProduct } from "../product.service.js";

export default {
  name: "Update",
  data() {
    return {
      product: this.$route.params.product
    };
  },
  methods: {
    update() {
      updateProduct(this.product).then(() => {
        alert("updated...");
        this.$router.push("/");
      });
    }
  },
  created() {
    if (this.product == null) {
      this.$router.push("/");
    }
  }
};
</script>