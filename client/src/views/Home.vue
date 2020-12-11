<template>
  <div class="homePage">
    <img class="imgBackground1" src="https://lh3.googleusercontent.com/proxy/dgFu0Hmroy2uv_h7gGitdlphtCZFEcXAbUkODmbwFnIW2tCxt7BKylAvWmPXVvRIt2A0IC1JpBayiVNyUEYNIcZlPw9A6y0i3YS3NV-FjQh_CupAhvJd3Dfp3O82JNRaC3eZ3hDh">
    <div class="listPlayer  ">
      <h3>hallo {{ name }}</h3>
      <h1>list player :</h1>
      <p>andi,german,test</p>
      <h3>player: score</h3>
      <h2>timer</h2>
      <h3>{{ timer }}</h3>
    </div>

    <div class="loginBox">
      <img class="imgBackground2" src="https://i.redd.it/qat3c8w7mfi51.gif">
      <div class="questionBox">
        <h1>`benda ini kecil tapi tidak kelihatan`</h1>
        <br><br><br>
        <h3>kalimat</h3>
      </div>
      <div>
        <form class="answerForm" @submit.prevent="changePage">
          <input type="text" placeholder="your answer" name="username" class="answerForm">
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
      message: ''
    }
  },
  computed: {
    quiz () {
      return this.$store.state.quiz
    },
    players () {
      return this.$store.state.players
    },
    namaPlayer () {
      return this.$store.state.nama
    },
    timer () {
      return this.$store.state.timer
    },
    isStart () {
      if (this.$store.state.isStart) {
        this.start()
      }
      return this.$store.state.isStart
    }
  },
  methods: {
    start () {
      while (this.$store.state.timer > 0) {
        setInterval(() => {
          this.$store.commit('timerDecrement')
        }, 1000)
      }
    },
    startGame () {
      this.start()
      this.$socket.emit('startGame')
    },
    resetGame () {
      this.$socket.emit('resetGame')
    },
    changePage () {
      this.$router.push({ path: '/winner' })
    }
  },
  created () {
    if (!localStorage.getItem('username')) {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
  .imgBackground1 {
    width: 700px;
    margin-top: 100px;
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
