<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="booo"> -->
  <!-- <button @click="handleClick">Click Me</button> -->
  <Modal />
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return {
      title: 'My first view app :)'
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.booo.value)
      console.log(this.$refs.booo.classList)
      this.$refs.booo.classList.add('active')
      this.$refs.booo.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
