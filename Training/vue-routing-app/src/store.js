import Vuex from "vuex"
import Vue from 'vue'
Vue.use(Vuex)

// initial state 
let state = {
    count: 0
}

// mutations 
const mutations = {
    increment(state) {

        state.count++;
    },
    decrement(state) {
        state.count--;
    }
}


export const store = new Vuex.Store({
    state,
    mutations
})