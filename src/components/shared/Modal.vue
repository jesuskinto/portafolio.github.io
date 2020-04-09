<template>
  <div class="modal" :class="{'is-active': activate}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <slot name="image"></slot>
        <div class="wrapper-content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('close')"></button>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    activate: {
      required: true,
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="sass" scoped>
  .box
    padding: 0
    border-radius: 0
  .wrapper-content
    padding: 20px
  .modal-list
    margin-left: 35px
  progress
    width: 150px
    float: right
</style>
