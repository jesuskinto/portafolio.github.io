<template>
  <div id="app">
    <p-header :activated="activated"></p-header>
    <p-content @showModal="showModal = $event"></p-content>
    <p-footer></p-footer>

    <!-- Modales -->
    <p-modal
      :activate="showModal == 'crediuno'"
      @close="showModal = null">
      <img slot="image" src="@/assets/projects/crediuno.png" alt="">
      <template slot="content">
        <h1 class="title">Crediuno</h1>
        <h2 class="subtitle">Plataforma de solicitud de creditos</h2>
        <span>url: <a href="https://app.crediuno.com.ar/">https://app.crediuno.com.ar/</a></span>
        <hr>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Velit veniam dolore nisi error dolor maxime accusantium,
          sed expedita, quo vero laboriosam eius consectetur animi
          ad! Ad iusto a minus corrupti!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Velit veniam dolore nisi error dolor maxime accusantium,
          sed expedita, quo vero laboriosam eius consectetur animi
          ad! Ad iusto a minus corrupti!
        </p>
        <hr>
        <h3 class="subtitle">Tecnologias usadas:</h3>
        <ol class="modal-list">
          <li>Django <progress class="progress is-success" value="60" max="100"></progress></li>
          <li>Django Rest Framework <progress class="progress is-success" value="10" max="100"></progress></li>
          <li>Mysql <progress class="progress is-success" value="30" max="100"></progress></li>
          <li>Celery <progress class="progress is-success" value="30" max="100"></progress></li>
          <li>Rabbitmq <progress class="progress is-success" value="30" max="100"></progress></li>
          <li>Vuejs <progress class="progress is-success" value="60" max="100"></progress></li>
          <li>Vue-Router <progress class="progress is-success" value="30" max="100"></progress></li>
          <li>VeeValidate <progress class="progress is-success" value="10" max="100"></progress></li>
        </ol>
      </template>
    </p-modal>

  </div>
</template>

<script>
import PHeader from '@/components/layout/Header.vue'
import PContent from '@/components/layout/Content.vue'
import PFooter from '@/components/layout/Footer.vue'
import PModal from '@/components/shared/Modal.vue'

export default {
  name: 'app',

  data () {
    return {
      $sticky: null,
      $proyects: null,
      $contact: null,
      $certific: null,
      activated: 'tecnoligies',
      showModal: null
    }
  },

  components: {
    PHeader,
    PModal,
    PFooter,
    PContent
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    const tabs = document.getElementById('tabs')
    const tecnologies = document.getElementById('tecnologies')
    const proyects = document.getElementById('proyects')
    const certific = document.getElementById('certific')
    const contact = document.getElementById('contact')
    this.$sticky = tabs.offsetTop
    this.$tecnologies = tecnologies.offsetTop
    this.$proyects = proyects.offsetTop
    this.$certific = certific.offsetTop
    this.$contact = contact.offsetTop
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

      if (this.inRange(this.$tecnologies, this.$proyects)) {
        this.activated = 'tecnologies'
      } else if (this.inRange(this.$proyects, this.$certific)) {
        this.activated = 'proyects'
      } else if (this.inRange(this.$certific, this.$contact)) {
        this.activated = 'certific'
      } else if (this.inRange(this.$contact)) {
        this.activated = 'contact'
      }
    },
    inRange (sectionStart, sectionEnd = null) {
      const offter = 126
      const position = window.pageYOffset + offter
      if (sectionEnd) {
        return (position >= sectionStart && position < sectionEnd)
      }
      return (position >= sectionStart)
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
  padding-top: 20px
  z-index: 1

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
</style>
