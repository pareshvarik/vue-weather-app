import axios from 'axios'

export function getSearched(value){
        return axios.get(`http://api.tvmaze.com/search/shows?q=${value}`);
    }
