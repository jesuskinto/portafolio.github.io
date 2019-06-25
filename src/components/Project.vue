<template>
  <div class="Proyect column is-6" data-aos="zoom-in">
    <div class="box">
      <figure image is-3by2>
        <slot name="image">
          <img src="../assets/vuejs.png">
        </slot>
      </figure>
      <slot name= "title">
        <h2>Titulo</h2>
      </slot>
      <slot name="parrafo">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          dolore magna aliqua. Ut enim ad minim...
        </p>
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
