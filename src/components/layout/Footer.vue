<template>
  <footer class="footer">
    <div class="content has-text-centered" data-aos="fade-up">
      <p>
        {{$t('made with')}} <strong class="heart">💙</strong> {{ $t('to the world') }}!
      </p>
      <span>;)</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="sass">
span
  font-size: 90px
.heart
  color: orange
</style>
