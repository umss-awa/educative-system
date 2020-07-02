import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout:'LoginLayout'
  },
  mutations: {
    SET_LAYOUT(state,newLayout){
      state.layout=newLayout
    }
  },
  actions: {
  },
  modules: {
  }
})
