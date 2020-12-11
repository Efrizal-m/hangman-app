import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: [],
    players: [],
    nama: '',
    score: null,
    timer: 0,
    isStart: false
  },
  mutations: {
    SOCKET_startGame (state, payload) {
      state.quiz = payload
      state.timer = 20
    },
    SOCKET_player (state, payload) {
      state.players = payload
    },
    SOCKET_resetGame (state, payload) {
      state.quiz = payload
    },
    setName (state, payload) {
      state.nama = payload
      state.score = 0
    },
    timerDecrement (state) {
      state.timer--
    }
  },
  actions: {
  },
  modules: {
  }
})
