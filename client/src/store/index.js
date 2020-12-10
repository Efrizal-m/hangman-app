import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: [],
    players: []
  },
  mutations: {
    SOCKET_startGame (state, payload) {
      state.quiz = payload
    },
    SOCKET_player (state, payload) {
      state.players = payload
    },
    SOCKET_resetGame (state, payload) {
      state.quiz = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
