<template>
  <div class="home">
    <h1>home</h1>

    <div>
      
      <!-- <ol v-for="bread in breadList" :key="bread">
        <li @click="getImg(bread)">{{bread}}</li>
      </ol>
      <div v-for="b in breadImg" :key="b">
        <img :src="b" />
      </div>-->
      <div v-for="(b, index) in breadImg" :key="index">
        <b-card
          :title="breadList[index]"
          :img-src="b"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</b-card-text
          >

          <b-button variant="primary">get more image</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllBread, getRandomImg } from "../services/dog.service.js";
export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      breadList: [],
      breadImg: [],
      img: []
    };
  },

  created: function() {
    getAllBread().then(res => {
      this.breadList = Object.keys(res.data.message);
      // this.breadList.forEach(element => {
      //   // console.log(element);
      //   getRandomImg(element).then(res=>{
      //     console.log(element);
      //     this.breadImg[]=res.data.message;
      //     console.log(this.breadImg);
      //   })

      // });
      for (let index = 0; index < this.breadList.length; index++) {
        getRandomImg(this.breadList[index]).then(res => {
          this.breadImg[index] = res.data.message;
        });
      }
    });
  },
  methods: {
    getImg(name) {
      getRandomImg(name).then(res => {
        this.img = res.data.message;
        console.log(this.img);
      });
    },
    getAllImg(name) {
      console.log(name);
      // getBreadImg(name).then(res=>{
      //   this.img=res.data.message;
      //   console.log(this.img);
      // })
    }
  }
};
</script>
<style scoped>
/* .paresh{
  width: 300px;
 border-radius: 10px;
 border:1px solid #f1f1f1;
 margin:50px;
 float: left;
 height: 350px;
} */
</style>
