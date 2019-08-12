<template>
  <div id="app">
    <p-header :activated="activated"></p-header>
    <p-content @showModal="showModal = $event"></p-content>
    <p-footer></p-footer>

    <!-- Modales -->
    <p-modal
      :activate="showModal == 'lang'"
      @close="showModal = null">
      <template slot="content">
        <h1 class="title">Choose a language:</h1>
        <h2 class="subtitle">Elige un idioma:</h2>
        <br>
        <div class="columns button-langs">
          <div class="column">
            <button class="button is-info large"
              @click="changeLang('en')">
              English/Ingles
            </button>
          </div>
          <div class="column">
            <button class="button is-info large"
              @click="changeLang('es')">
              Spanish/Español
            </button>
          </div>
        </div>
      </template>
    </p-modal>
    <p-modal
      :activate="showModal == 'crediuno'"
      @close="showModal = null">
      <img slot="image" src="@/assets/projects/crediuno.png" alt="">
      <template slot="content">
        <h1 class="title">Crediuno</h1>
        <h2 class="subtitle">Plataforma de solicitud de creditos</h2>
        <span>url: <a href="https://app.crediuno.com.ar/">https://app.crediuno.com.ar/</a></span>
        <br>
        <span>{{ $t('date')}}: oct-2018 - {{$t('present')}}</span>
        <hr>
        <p>
          Plataforma de solicitud y gestion creditos que permite a clientes de la empresa
          solicitar creditos con diferentes niveles de financiamiento; una vez la solicitud
          es aprobada; el sistema permite gestionar los pagos hasta la finalización
          del mismo.
        </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li>Django</li>
              <li>Django Rest Framework</li>
              <li>Mysql</li>
              <li>Celery</li>
              <li>Rabbitmq</li>
              <li>Vuejs</li>
              <li>Vue-Router</li>
              <li>VeeValidate</li>
            </ol>
          </div>
          <div class="column is-6">
            <h3 class="subtitle">{{$t('job')}}:</h3>
            <ol class="modal-list">
              <li>Full Stack Develop</li>
            </ol>
          </div>
        </div>
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
      $projects: null,
      $contact: null,
      $certific: null,
      activated: 'tecnoligies',
      showModal: 'lang'
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
    const projects = document.getElementById('projects')
    const certific = document.getElementById('certific')
    const contact = document.getElementById('contact')
    this.$sticky = tabs.offsetTop
    this.$tecnologies = tecnologies.offsetTop
    this.$projects = projects.offsetTop
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

      if (this.inRange(this.$tecnologies, this.$projects)) {
        this.activated = 'tecnologies'
      } else if (this.inRange(this.$projects, this.$certific)) {
        this.activated = 'projects'
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
    },
    changeLang (lang) {
      this.$i18n.locale = lang
      this.showModal = null
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

.button-langs
  text-align: center
</style>
