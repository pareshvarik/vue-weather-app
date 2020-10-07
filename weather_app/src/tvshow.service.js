import axios from 'axios'

// const url ="https://api.thecatapi.com/v1/categories"

// export function get() {
//     return axios.get(url) 
// }

// export function getSearch(){
//     return axios.get("https://api.thecatapi.com/v1/images/search?category_ids=15&limit=10")
// }

export default{
    // getAll(){
    //     return axios.get(url);
    // },
    getSearched(key){
        return axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${key}`);
    }

}