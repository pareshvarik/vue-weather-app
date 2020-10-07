<template>
  <div>
    Search
    <input type="text" v-model="searched_value" />
    <button @click="search">Submit</button>
    <div>
      <ul v-for="s in searchedvalue" :key="s.id">
        <li>
          {{s.show.id}}
          {{s.show.name}}
          <img :src="s.show.image.medium" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSearched } from "../services/tv.app.service.js";
export default {
  name: "Search",
  data() {
    return {
      searched_value: "",
      searchedvalue: []
    };
  },
  methods: {
    search() {
      getSearched(this.searched_value).then(res => {
        this.searchedvalue = res.data;
        console.log(this.searchedvalue);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>