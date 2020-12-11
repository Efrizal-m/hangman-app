import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: [],
    players: [],
    nama: '',
    score: 0,
    timer: 0,
    isStart: false,
    round: 0
  },
  mutations: {
    SOCKET_startGame (state, payload) {
      state.quiz = payload
      state.timer = 20
    },
    SOCKET_finishGame (state, payload) {
      router.push({
        path: `/winner/${payload.nama}`
      })
    },
    SOCKET_player (state, payload) {
      state.players = payload
    },
    SOCKET_resetGame (state, payload) {
      state.quiz = payload
      state.players = state.players.map(el => {
        el.score = 0
        return el
      })
      router.push('/')
      location.reload()
    },
    setName (state, payload) {
      state.nama = payload
      state.score = 0
    },
    timerDecrement (state) {
      state.timer--
    },
    jawabanBenar (state, payload) {
      state.score += payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    soalDanJawaban: (state) => (input) => {
      return state.quiz.filter((el, i) => el[i] === el[input])
    }
  }
})
