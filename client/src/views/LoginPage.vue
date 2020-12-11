<template>
  <div class="loginPage">
    <div class="loginForm">
      <form align="center" class="box" @submit.prevent="changePage">
        <img src="https://lh3.googleusercontent.com/proxy/EmS_ZcMxk5kkZQsYL3QbEopjbj6bvl3vq0b5gk8KBFM2tGnYnoMSB_brVnzEoBuYnpgVXWOR0W_RG2XstyBKy_NaELWiAmxV5Oe97ZIC8SbrfHS-rj0faes" alt="">
        <h1>HELLO</h1>
        <input v-model="userName" type="text" placeholder="USERNAME" class="usernameForm" required>
        <br><br>
        <input type="submit" class="loginBtn">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    changePage () {
      localStorage.setItem('username', this.userName)
      this.$router.push({ path: '/' })
    }
  },
  created () {
    if (localStorage.getItem('username')) {
      this.$router.push({ path: '/' })

    }
  }
}
</script>


<style>
  .box {
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #191919;
    text-align: center;
    transform: translate(-50%,-50%);
    border-radius: 20px;
    box-shadow: 10px 10px;
  }

  img {
    width: 130px;
    margin-top: -80px;
    border-radius: 50%;
  }

  .box h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }

  .box input[type = "text"] {
    border: 0;
    background: none;
    display: block;
    margin: 10px auto;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }

  .box input[type = "text"]:focus {
    width: 280px;
    border-color: #2ecc71;
  }

  .box input[type = "submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 10px auto;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.5s;
    cursor: pointer;
  }

  .box input[type = "submit"]:hover {
    background: #2ecc71;
  }
</style>
