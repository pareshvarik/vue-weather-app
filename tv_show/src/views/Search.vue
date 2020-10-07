<template>
    <div>
        Search <input type="text" name="input">
        <button @click="search(input)">Search</button>
      
    </div>
   
</template>

<script>
import{getSearched} from "../tvshow.service.js"
    export default {
        name:"Search",
        data(){
            return{
                serchedvalue:[],
                loading: false
            };
        },
        // created(){
        //     this.loading=true;
        //     setTimeout(()=>{
        //         get()
        //         .then(res=>(this.catagory=res.data))
        //         .catch(err=>console.log(err))
        //         .finally(()=>(this.loading=false));
                
        //     },5000);

        // },
        methods:{
            search(name){
                console.log(name);
                getSearched(name)
                .then(res=>this.serchedvalue=res.data) 
            }
        
        }

    }
</script>

<style lang="scss" scoped>

</style>