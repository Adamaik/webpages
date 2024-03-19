import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMessage:{
      name:null,
      account:null,
      permission:null,
    },
  },
  getters: {
  },
  mutations: {
    setName:(state,input)=>{
      state.userMessage.name=input;
    },
    setAccount:(state,input)=>{
      state.userMessage.account=input;
    },
    setPermission:(state,input)=>{
      state.userMessage.permission=input;
    },
  },
  actions: {
  },
  modules: {
  }
})
