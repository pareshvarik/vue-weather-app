<template>
  <div>
    No Of Tickets:
    <input type="number" v-model="noOfTickets" />
    <button v-on:click="calculatePrice()">Book</button>
    <p>Total Price: {{totalPrice}}</p>
  </div>
</template>


<script>
export default {
  name: "Bookmyshow",
  data() {
    return {
      ticketPrice: 150,
      totalPrice: 0,
      noOfTickets: 0
    };
  },
  methods: {
    calculatePrice() {
      this.totalPrice = this.noOfTickets * this.ticketPrice;
    }
  }
};
</script>

<style scoped>
</style>