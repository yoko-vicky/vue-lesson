<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term: {{ search }}</p>
    <div v-for="name in macthingNames" key="name">{{ name }}</div>
    <button @click="handleStopWatch">Stop Watching</button>
    <button @click="handleStopWatchEffect">Stop Watch Effect</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup(){
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    const stopWatchForSearch = watch(search, ()=>{
      // Everytime search changes, do something
      console.log('watch running')
    })

    const stopWatchEffect = watchEffect(()=>{
      // Eny updates/changes on variables inside this useEffect function will be detected
      console.log('watchEffect Function running', search.value)
    })

    const macthingNames = computed(()=>{
      return names.value.filter((name)=> name.includes(search.value))
    })

    const handleStopWatch = () => {
      stopWatchForSearch()
    }

    const handleStopWatchEffect = () => {
      stopWatchEffect()
    }

    return { names, search, macthingNames, handleStopWatch, handleStopWatchEffect }
  }
}
</script>
