<template>
  <div class="homePage">
    <img class="imgBackground1" src="https://lh3.googleusercontent.com/proxy/dgFu0Hmroy2uv_h7gGitdlphtCZFEcXAbUkODmbwFnIW2tCxt7BKylAvWmPXVvRIt2A0IC1JpBayiVNyUEYNIcZlPw9A6y0i3YS3NV-FjQh_CupAhvJd3Dfp3O82JNRaC3eZ3hDh">
    <div class="listPlayer  ">
      <h1>list player :</h1>
      <h3>player: score</h3>
      <h2>timer</h2>
    </div>

    <div class="loginBox">
      <img class="imgBackground2" src="https://i.redd.it/qat3c8w7mfi51.gif">
      <div class="questionBox">
        <h1>`benda ini kecil tapi tidak kelihatan`</h1>
        <br><br><br>
        <h3>kalimat</h3>
      </div>
      <div>
        <form class="answerForm">
          <input type="text" placeholder="your answer" name="username" class="answerForm">
          <br><br>
          <input type="submit" class="answerBtn">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      message: ''
    }
  },
  // methods: {

  // },
  sockets: {
    SendMsg (payload) {
      console.log(payload)
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
