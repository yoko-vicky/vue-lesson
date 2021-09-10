<template>
  <h1>Jobs Details Page</h1>
  <p>Jobs ID: {{ id }}</p>
</template>

<script>
export default {
  name: 'JobsDeails',
  props: ['id'],
  // data(){
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>

<style>

</style>
