<template>
  <div class="home">
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
