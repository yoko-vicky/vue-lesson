<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term: {{ search }}</p>
    <div v-for="name in macthingNames" key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'Home',
  setup(){
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    const macthingNames = computed(()=>{
      return names.value.filter((name)=> name.includes(search.value))
    })

    return { names, search, macthingNames }
  }
}
</script>
