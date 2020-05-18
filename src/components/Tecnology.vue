<template>
  <a :href="url" target="_blanck">
    <div class="tecnology">
        <figure>
          <slot name="image"></slot>
        </figure>
        <p>{{title}}</p>
      </div>
  </a>
</template>

<script>
export default {
  name: 'tecnology',
  props: {
    title: {
      required: true,
      type: String,
      default: 'Title'
    },
    url: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="sass">
@import '@/styles/main.sass'

.tecnology
  display: inline-block
  background-color: $grey-light
  overflow: hidden
  padding: 10px
  margin: 10px

  figure
    display: inline-block
    border-radius: 40px
    background-color: white
    padding: 5px
    width: 35px
    height: 35px
    overflow: hidden
  p
    display: inline
    padding: 10px
    color: white
    font-size: 15px
    font-weight: 600

  progress
    margin-top: 5px
    height: 0.3rem

</style>
