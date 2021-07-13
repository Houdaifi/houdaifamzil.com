import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      isTranslated: true
    },
    getters:{
      isTranslated(state){
        return state.isTranslated
      }
    },
    mutations: {
      ToggleIsTranslated(state){
        state.isTranslated = false
      }
    }
  })

export default store