<template>
  <div class="Proyect column is-4" data-aos="zoom-in">
    <div class="box">
      <figure image is-3by2>
        <slot name="image">
          <img src="../assets/vuejs.png">
        </slot>
      </figure>
      <slot name= "title">
        <h2>Titulo</h2>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Proyect'
}
</script>

<style lang="sass">
</style>
