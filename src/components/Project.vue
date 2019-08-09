<template>
  <div class="Proyect" data-aos="zoom-in">
    <div class="box" @click="$emit('projectClicked')">
      <figure class="image is-3by2">
        <slot name="image"></slot>
      </figure>
      <div class="wrapper">
        <slot name= "title">
          <h1>Titulo</h1>
        </slot>
        <div class="small">
          <slot name="type"><p><strong>Type:</strong></p></slot>
          <slot name="job"><p><strong>Cargo:</strong></p></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Proyect'
}
</script>

<style lang="sass" scoped>
.box
  padding: 0
  overflow: hidden
  cursor: pointer
  margin: 10px
.wrapper
  padding: 15px

.small
  color: gray
  font-size: 13px
  strong
    color: gray
</style>
