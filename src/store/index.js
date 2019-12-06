import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setList(state, payload) {
      state.list = payload
    }
  },
  actions: {
    getList({commit}) {
      axios.get('/list').then(res => {
        console.log(res)
        commit('setList', res.data)
      })
    }
  },
  modules: {
  }
})
