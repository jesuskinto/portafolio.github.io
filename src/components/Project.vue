<template>
  <div class="Proyect">
    <div class="box" @click="$emit('projectClicked')">
      <figure class="image is-3by2">
        <slot name="image"></slot>
      </figure>
      <div class="wrapper">
        <slot name= "title">
          <h1>Titulo</h1>
        </slot>
        <div class="small">
          <p>
            <strong>{{$t('type')}}:</strong>
            <slot name="type"></slot>
          </p>
          <p>
            <strong>{{$t('job')}}:</strong>
            <slot name="job"></slot>
          </p>
          <p>
            <strong>{{$t('date')}}:</strong>
            <slot name="date"></slot>
          </p>
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
    margin-right: 5px
</style>
