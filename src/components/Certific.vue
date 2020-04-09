<template>
  <a class="Proyect column is-6-mobile is-3-desktop"
    :href="href"
    target="_blank">
    <div class="box">
      <figure image is-3by2>
        <slot name="image"></slot>
      </figure>
      <div class="wrapper">
        <slot name= "title">
          <h1>Titulo</h1>
        </slot>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['href']
}
</script>

<style lang="sass" scoped>
.box
  padding: 0
  overflow: hidden
  cursor: pointer
.wrapper
  padding: 15px
</style>
