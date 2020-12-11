<template>
  <div class="homePage">
    <audio autoplay="true">
      <source src="audio/we-are.mp3" type="audio/mpeg">
    </audio>
    <img class="imgBackground1" src="https://lh3.googleusercontent.com/proxy/dgFu0Hmroy2uv_h7gGitdlphtCZFEcXAbUkODmbwFnIW2tCxt7BKylAvWmPXVvRIt2A0IC1JpBayiVNyUEYNIcZlPw9A6y0i3YS3NV-FjQh_CupAhvJd3Dfp3O82JNRaC3eZ3hDh">
    <div class="loginBox">
      <div class="listPlayer">
        <h3>hallo {{ name }}</h3>
        <h1>list player :</h1>
        <p>{{ players }}</p>
        <h3>player: score</h3>
        <h3 v-for="(el, i) in playerScore" :key="i">{{ el.nama }}: {{ el.score }}</h3>
        <p style="display:none;">{{ timer }}</p>
        <button @click="startGame">START GAME</button><br><br>
        <button @click="resetGame">RESET GAME</button>
      </div>
      <img class="imgBackground2" src="https://i.redd.it/qat3c8w7mfi51.gif">
      <div class="questionBox">
        <h1>`description: {{ quiz[0].desc }}`</h1>
        <br><br><br>
        <h3>WORDS:    {{ quiz[0].test }} </h3>
      </div>
      <div>
        <form class="answerForm" @submit.prevent="cekJawaban">
          <input type="text" placeholder="your answer" name="username" class="answerForm" v-model="message">
          <br><br>
          <input type="submit" class="answerBtn">
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      name: localStorage.getItem('username'),
      message: '',
      jawaban: '',
      hasil: ''
    }
  },
  created () {
    if (!localStorage.getItem('username')) {
      this.$router.push({ path: '/login' })
    } else {
      this.$socket.emit('register', localStorage.getItem('username'))
    }
    this.startGame()
  },
  computed: {
    quiz () {
      const out = this.$store.state.quiz
      console.log(out, '<<<<dari quiz')
      let a = ''
      for (let i = 0; i < out[0].word.length; i++) {
        // if (out[0].word[i] !== out[0].shown[0] || out[0].word[i] !== out[0].shown[1] || out[0].word[i] !== out[0].shown[2]) {
        //   a += '*'
        // } else {
        //   a += out[0].word[i]
        // }
        if (out[0].word[i] === out[0].shown[0] || out[0].word[i] === out[0].shown[1] || out[0].word[i] === out[0].shown[2]) {
          a += out[0].word[i]
        } else {
          a += '*'
        }
      }
      out[0].test = a
      console.log(out, '<<<<<< out setelah for')
      return out
    },
    players () {
      const out = this.$store.state.players.map(el => el.nama)
      return out.join(',')
    },
    playerScore () {
      return this.$store.state.players
    },
    namaPlayer () {
      return this.$store.state.nama
    },
    isStart () {
      if (this.$store.state.isStart) {
        this.start()
      }
      return this.$store.state.isStart
    },
    soalDanJawaban () {
      const out = this.$store.getters.soalDanJawaban(1)
      return out
    },
    timer () {
      return this.$store.state.timer
    }
  },
  methods: {
    startGame () {
      this.$socket.emit('startGame')
    },
    resetGame () {
      this.$socket.emit('resetGame')
    },
    changePage () {
      this.$router.push({ path: '/winner' })
    },
    cekJawaban () {
      const ans = this.message // 1 huruf
      const answer = this.$store.state.quiz[0].word // str
      const nama = localStorage.getItem('username')
      let score = this.$store.state.score
      if (ans === answer) {
        console.log('masuk jawaban benar')
        score += 10
        this.$store.commit('jawabanBenar', 10)
        this.$socket.emit('submitScore', {
          nama: nama,
          score: score
        })
        this.message = ''
      } else {
        this.message = ''
      }
    },
    berdering () {
      // aktifin suara
    }
  },
  sockets: {
    nyalainSuara () {
      this.berdering()
    }
  }
}
</script>

<style>
  .imgBackground1 {
    width: 700px;
    margin-top: 600px;
    margin-left: -800px;
    position: absolute;
  }
  .imgBackground2 {
    width: 500px;
    margin-top: -200px;
    margin-left: -250px;
    position: absolute;
  }
  .listPlayer {
     margin-left: -80%;
     z-index: 9999;
   }

  .answerForm input[type = "text"] {
    background: black;
    display: block;
    margin: 250px auto;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    color: white;
    outline: none;
    border-radius: 24px;
    transition: 0.25s;
  }

  .answerForm input[type = "text"]:focus {
    width: 280px;
    border-color: #2ecc71;
  }

  .answerForm input[type = "submit"] {
    border: 0;
    background: black;
    display: block;
    margin: -240px auto;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.5s;
    cursor: pointer;
  }

  .answerForm input[type = "submit"]:hover {
    background: #2ecc71;
  }
</style>
