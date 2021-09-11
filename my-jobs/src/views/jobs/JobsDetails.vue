<template>
<div v-if="job">
  <h1>{{ job.title }}</h1>
  <p>Jobs ID: {{ id }}</p>
  <p>Jobs Details: {{ job.details }}</p>
</div>
<div v-else>
  Loading job details...
</div>
</template>

<script>
export default {
  name: 'JobsDeails',
  props: ['id'],
  data(){
    return {
      job: null
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs/' + this.id)
    .then(res => res.json())
    .then(data => this.job = data)
    .catch(error => console.log(error))
  }
  // data(){
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>

<style>

</style>
