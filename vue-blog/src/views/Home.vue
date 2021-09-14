<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ personOne.name }} - {{personOne.age }}</p>
    <button @click="updatePersonOne">Update person one</button>
    <p>-----------------------------------------</p>
    <h2>Reactive</h2>
    <p>{{ personTwo.name }} - {{personTwo.age }}</p>
    <button @click="updatePersonTwo">Update person Two</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup(){
    const personOne = ref({ name : 'vicky', age: 37 })
    const personTwo = reactive({ name: 'mario', age: 35 })

    const updatePersonOne = () => {
      personOne.value.age = 20
    }

    const updatePersonTwo = () => {
      personTwo.age = 5
      
    }

    return {
      personOne, updatePersonOne, personTwo, updatePersonTwo
    }
  }
}
</script>
