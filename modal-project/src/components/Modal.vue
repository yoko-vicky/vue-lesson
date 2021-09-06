<template>
<!-- .self is one of the Click Event Modifiers that means separate one from another elements including parents and child. In this case, .self modifier separates parent backdrop from child modal element-->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale'}">
      <slot>default content</slot>
      <div class="actions">
        <slot name="modalLinks"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    closeModal(){
      // Emit(Fire) custom Event, '@closeToggle' that is passed from parent componenet as a prop is fired
      // when backdrop is clicked
      this.$emit('closeToggle')
    }
  }
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
  color: white!important;
}

.modal .actions{
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a{
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>
