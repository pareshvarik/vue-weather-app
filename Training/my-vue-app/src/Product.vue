<template>
  <div class="main">
    <div class="image">
      <img :src="product.imgUrl" />
    </div>
    <div class="content">
      <div>Id: {{product.id}}</div>
      <div>Name: {{product.name}}</div>
      <div>Price: {{product.price}}</div>
      <div>
        <a href="#" @click="incrementLikes(product.id)">Likes: {{product.likes}}</a>
      </div>
      <div>
        <button @click="addToCart(product.id)">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
    incrementLikes: Function
  },
  methods: {
    addToCart(pid) {
      this.$emit("clickHandleEvents", pid);
    }
  }
};
</script>

<style scoped>
.main {
  width: 300px;
  height: 100px;
  border: 1px solid red;
  margin-left: 100px;
}
.image {
  width: 30%;
  height: 100%;
  float: left;
}
.content {
  width: 70%;
  height: 100%;
  float: right;
}
img {
  width: 100px;
  height: 100px;
}
</style>