<template>
  <div class="post-list">
    <h1>This is PostList</h1>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'

import SinglePost from './SinglePost.vue'

export default {
  name: 'PostList',
  components: { SinglePost },
  props: ['posts'],
  setup(props){
    onMounted(()=>{
      console.log('component mounted')
    })
    onUpdated(()=>{
      console.log('component updated')
    });
    onUnmounted(()=>{
      console.log('component Unmounted')
    })
  }
}
</script>

<style>

</style>
