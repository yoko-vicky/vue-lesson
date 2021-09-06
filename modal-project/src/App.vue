<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <!-- <input type="text" ref="booo"> -->
  <!-- <button @click="handleClick">Click Me</button> -->
  <div v-if="showModal">
    <!-- @closeToggle => customEvent -->
    <Modal theme="sale" @closeToggle="toggleModal">
      <template v-slot:modalLinks>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>
  <button @click.alt="toggleModal">Open Modal (alt)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return {
      title: 'My first view app :)',
      header: 'Signup for the Gateway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.booo.value)
      console.log(this.$refs.booo.classList)
      this.$refs.booo.classList.add('active')
      this.$refs.booo.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
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
