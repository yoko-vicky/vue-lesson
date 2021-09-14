<template>
  <div class="post-list">
    <h1>This is PostList</h1>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
  name: 'PostList',
  components: { SinglePost },
  props: ['posts'],
  setup(props){
    console.log(props.posts)
  }
}
</script>

<style>

</style>
