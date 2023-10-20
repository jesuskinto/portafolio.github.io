<template>
  <div id="app">
    <p-header></p-header>
    <p-content></p-content>
    <p-footer></p-footer>
  </div>
</template>

<script>
import PHeader from '@/components/layout/Header.vue'
const PContent = () => import('@/components/layout/Content.vue')
const PFooter = () => import('@/components/layout/Footer.vue')

export default {
  name: 'app',

  data () {
    return {
      $sticky: null,
      $projects: null,
      $contact: null,
      $certific: null
    }
  },

  components: {
    PHeader,
    PFooter,
    PContent
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    const tabs = document.getElementById('tabs')
    this.$sticky = tabs.offsetTop
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      if (window.pageYOffset >= this.$sticky) {
        document.getElementById('tabs')
          .classList.add('sticky')
      } else {
        document.getElementById('tabs')
          .classList.remove('sticky')
      }
    }
  }
}
</script>

<style lang="sass">
@import '@/styles/main.sass'

#tabs
  transition: all .3s ease
.sticky
  position: fixed
  width: 100%
  background-color: $info
  z-index: 10

.pproyect
  margin-top: 30px

#message
  background-color: $grey-darker
  text-align: center
  .title, .subtitle
    color: white
  .container
    padding: 100px 0

#contact
  .social
    max-width: 700px
    margin: 0 auto 20px
    .button
      margin-right: 15px

.or-line
  position: relative
  div
    position: absolute
    left: 47%
    right: 47%
    bottom: -10px
    span
      padding: 0 15px
      background: white

.button-langs
  text-align: center
</style>
