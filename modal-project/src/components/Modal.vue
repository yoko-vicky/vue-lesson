<template>
  <div class="backdrop">
    <div class="modal" :class="{ sale: theme === 'sale'}">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
}
</script>



<style>
/* <style scoped> */
.modal{
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop{
  top: 0;
  position: fixed;
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 100%;
}

.modal h1{
  color: green;
  border-bottom: none;
  padding: 0;
}

.modal p {
  font-style: normal;
}

.modal.sale{
  background: tomato;
  color: white;
}

.modal.sale * {
  color: white;
}
</style>
