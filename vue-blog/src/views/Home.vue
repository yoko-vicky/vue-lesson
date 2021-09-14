<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup(){
    const posts = ref([
      { title: 'welcome to the blog', body: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate autem quae, in blanditiis fuga totam ad dolore reprehenderit eum modi similique eos! Nulla aliquam est vero maiores voluptate hic dicta!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate autem quae, in blanditiis fuga totam ad dolore reprehenderit eum modi similique eos! Nulla aliquam est vero maiores voluptate hic dicta!', id: 1 },
      { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
    ])

    return { posts }
  }
}
</script>
