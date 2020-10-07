<template>
  <div>
    <a :href="url">Google</a>
    <p>
      Name: <span v-text="username"></span>
    </p>
    <p>
      Username: <span  v-html="username"></span>
      </p>
    Category:
    <select v-model="cat">
      <option v-for="c in categories" v-bind:key="c">{{c}}</option>
    </select>
    <div v-if="cat=='Electronics'">
      Product:
      <select v-model="productName">
        <option v-for="ce in cat_ele" :key="ce">{{ce}}</option>
      </select>
    </div>
    <div v-else-if="cat=='Grocery'">
      Product:
      <select v-model="productName">
        <option v-for="cg in cat_gro" :key="cg">{{cg}}</option>
      </select>
    </div>
    <div v-else>Please select category</div>
    <p>
      Quantity:
      <input type="number" v-model="quantity" />
    </p>
    <p>
      Total Price:
      <input type="number" v-model="totalPrice" readonly />
    </p>
    <button @click="calculate()">Submit</button>
  </div>
</template>

<script>
export default {
  name: "ProductCategory",
  data() {
    return {
      categories: ["Electronics", "Grocery"],
      cat_ele: ["Television", "Laptop", "Phone"],
      cat_gro: ["Soap", "Powder"],
      cat: "",
      totalPrice: 0,
      quantity: 0,
      productName: "",
      username: '<b>Nagaraju Setti</b>',
      url: 'https://www.google.co.in'
    };
  },
  methods: {
    calculate() {
      if (this.productName == 'Television') {
        this.totalPrice = this.quantity * 20000
      } else if (this.productName == 'Laptop') {
        this.totalPrice = this.quantity * 30000
      } else if (this.productName == 'Phone') {
        this.totalPrice = this.quantity * 10000
      } else if (this.productName == 'Soap') {
        this.totalPrice = this.quantity * 40
      } else if (this.productName == 'Powder') {
        this.totalPrice = this.quantity * 90
      } else {
        this.totalPrice = 0;
      }
    }
  }
};
</script>

<style scoped>
</style>