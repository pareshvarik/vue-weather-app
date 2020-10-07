<template>
  <div>
    <p v-for="p in products" :key="p.id">
      <Product :product="p" :incrementLikes="updateLikes" @clickHandleEvents="handleEvents" />
    </p>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "ProductList",
  components: {
    Product
  },
  data() {
    return {
      products: [
        {
          likes: 1,
          id: 1,
          name: "apple",
          price: 59,
          imgUrl: "images/iphone_6s.jpg"
        },
        {
          likes: 1,
          id: 2,
          name: "pen",
          price: 9,
          imgUrl: "images/iphone_6s.jpg"
        },
        {
          likes: 1,
          id: 3,
          name: "watch",
          price: 999,
          imgUrl: "images/iphone_6s.jpg"
        }
      ]
    };
  },
  methods: {
    updateLikes(id) {
      this.products.map(p => {
        if (p.id == id) {
          p.likes = p.likes + 1;
        }
      });
    },
    handleEvents(id) {
      //alert("creating events to communicate from child to parent");
      alert(id + " is added");
    }
  }
};
</script>

<style scoped>
</style>