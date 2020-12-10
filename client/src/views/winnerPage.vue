<template>
  <div class="winnerPage">
      <div class="winnerBox">
        <h2>WE HAVE A WINNER!!!</h2>
        <h1>CONGRATULATIONS!!!</h1>
        <p>name winner</p>
        <button @click="changePage" class="backBtn">HOME</button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    changePage () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
    .winnerBox {
        width: 300px;
        padding: 150px;
        margin-top: 10%;
        margin-left: 20%;
        background: black;
        text-align: center;
        border-radius: 25px;
        color: white;
        box-shadow: 10px 10px GREY;
    }

    .backBtn {
        border: 0;
        background: black;
        display: block;
        margin: auto;
        border: 2px solid #2ecc71;
        padding: 14px 40px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.5s;
        cursor: pointer;
    }

    .backBtn:hover {
        background: #2ecc71;
    }

</style>
