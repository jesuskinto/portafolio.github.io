<template>
  <div class="tecnology" data-aos="zoom-in-left">
    <figure>
      <slot name="image"></slot>
    </figure>
    <p>{{title}}</p>
    <progress class="progress is-success" :value="progress" max="100"></progress>
  </div>
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
    progress: {
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
  cursor: pointer
  background-color: $grey-light
  border-radius: 15px 15px 8px 8px
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
