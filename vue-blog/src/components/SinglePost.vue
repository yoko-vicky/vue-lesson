<template>
  <h2>{{ post.title }}</h2>
  <p>{{ snippet }}</p>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
  name: 'SinglePost',
  props: ['post'],
  setup(props){
    const snippet = computed(()=>{
      return props.post.body.substring(0, 100) + '...'
    })

    return {
      snippet
    }
  }
}
</script>

<style>

</style>
