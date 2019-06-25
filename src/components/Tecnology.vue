<template>
  <div class="tecnology">
    <figure>
      <slot name="image">
        <img src="../assets/vuejs.png">
      </slot>
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
    padding: 10px
    width: 40px
    height: 40px

  p
    display: inline
    padding: 10px
    color: white
    font-size: 20px

  progress
    margin-top: 5px
    height: 0.4rem
    border-radius: 0 0 15px 15px

</style>
