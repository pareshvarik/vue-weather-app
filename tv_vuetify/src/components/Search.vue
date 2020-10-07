<template>
  <!-- <div>
        Search <input type="text" v-model="searched_value"> 
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
  </div>-->
  <div class="search">
    <nav>
      <v-toolbar>
        Search
        <input type="text" v-model="searched_value" />
        <button @click="search">Submit</button>
      </v-toolbar>
    </nav>

    <v-card :loading="loading" class="mx-auto my-12" max-width="374" v-for="s in searchedvalue" :key="s.id">
      

      <v-img height="250" src="`${s.show.img}`"></v-img>

      <v-card-title>{{s.show.name}}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>
<!-- 
        <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div> -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { getSearched } from "../services/tv.app.service.js";
export default {
  name: "Search",
 
  data: () => ({
    searched_value: "",
    searchedvalue: [],
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
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