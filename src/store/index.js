import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: '',
        userId: ''
    },
    getters: {

    },
    mutations:{
        setToken(state,token){
            state.token = token
        },
        setUserId(state,userId){
            state.userId = userId
        }
    }
})

export default store