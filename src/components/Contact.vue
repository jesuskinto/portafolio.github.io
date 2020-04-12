<template>
  <div class="container">
    <h1 class="title">☏ {{ $t('contact')}}</h1>
    <div class="social">
      <h2 class="subtitle"> {{$t('see you on')}}: </h2>
      <a class="button twitter"
        href="https://twitter.com/jesuskintoT" target="_blank">
        <span>Twitter: @jesuskintoT</span>
      </a>
      <a class="button facebook"
        href="https://www.facebook.com/jesuskintoT" target="_blank">
        <span>Facebook: jesuskintoT</span>
      </a>
      <a class="button instagram"
        href="https://www.instagram.com/jesuskintoT/" target="_blank">
        <span>Instragam: jesuskintoT</span>
      </a>
      <a class="button linkedin"
        href="https://www.linkedin.com/in/jesuskinto/" target="_blank">
        <span>Linkedin: jesuskinto</span>
      </a>
      <a class="button github"
        href="https://github.com/jesuskinto" target="_blank">
        <span>Github: jesuskinto</span>
      </a>
      <a class="button platzi"
        href="https://platzi.com/@Jesuskinto" target="_blank">
        <span>Platzi: @jesuskinto</span>
      </a>
      <a class="button whatsapp"
        href="https://api.whatsapp.com/send?phone=584263758831" target="_blank">
        <span>Whastapp</span>
      </a>
      <a class="button codepen"
        href="https://codepen.io/jesuskinto/" target="_blank">
        <span>CodePen</span>
      </a>
      <div class="or-line">
        <div><span>{{ $t('or')}}</span></div>
          <hr>
        </div>
      </div>
      <p-email-box></p-email-box>
  </div>
</template>

<script>
import PEmailBox from '@/components/EmailBox.vue'
export default {
  components: {
    PEmailBox
  }
}
</script>

<style lang="sass">
.button
  font-weight: 600
</style>
