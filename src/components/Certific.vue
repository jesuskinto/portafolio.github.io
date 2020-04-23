<template>
  <a class="Proyect column is-6-mobile is-3-desktop"
    :href="href"
    target="_blank" rel="noopener">
    <div class="box">
      <figure image is-3by2>
        <slot name="image"></slot>
      </figure>
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
  z-index: 3
.wrapper
  padding: 15px
</style>
