<template>
  <div id="app">
    <p-header :activated="activated"></p-header>
    <div id="wrapper-sections">
      <section id="tecnologies" class="section">
        <div class="container" >
          <h1 class="title">💡 Tecnologies</h1>
          <h2 class="subtitle">
            A simple container to divide your page into
            <strong>sections</strong>, like the one you're currently reading
          </h2>
          <!-- Frontend -->
          <p-tecnology title="Vuejs" progress="80">
            <img slot="image" src="@/assets/vuejs.png">
          </p-tecnology>
          <p-tecnology title="Angular" progress="40">
            <img slot="image" src="@/assets/angular.png">
          </p-tecnology>
          <p-tecnology  title="Ionic" progress="70">
            <img slot="image" src="@/assets/ionic.png">
          </p-tecnology>
          <p-tecnology  title="Javascript" progress="80">
            <img slot="image" src="@/assets/js.png">
          </p-tecnology>
          <p-tecnology  title="Typecript" progress="40">
            <img slot="image" src="@/assets/ts.png">
          </p-tecnology>
          <p-tecnology  title="BulmaCSS" progress="80">
            <img slot="image" src="@/assets/bulma.png">
          </p-tecnology>
          <p-tecnology  title="Buefy" progress="80">
            <img slot="image" src="@/assets/buefy.png">
          </p-tecnology>
          <p-tecnology  title="Bootstrap" progress="80">
            <img slot="image" src="@/assets/bootstrap.png">
          </p-tecnology>
          <p-tecnology  title="CSS" progress="80">
            <img slot="image" src="@/assets/css.png">
          </p-tecnology>
          <p-tecnology  title="SASS" progress="40">
            <img slot="image" src="@/assets/sass.png">
          </p-tecnology>
          <p-tecnology  title="HTML" progress="100">
            <img slot="image" src="@/assets/html.png">
          </p-tecnology>
          <p-tecnology  title="PUG" progress="100">
            <img slot="image" src="@/assets/pug.png">
          </p-tecnology>
          <p-tecnology  title="Google Maps" progress="50">
            <img slot="image" src="@/assets/googleMapApi.png">
          </p-tecnology>
          <p-tecnology  title="WebPack" progress="60">
            <img slot="image" src="@/assets/webpack.png">
          </p-tecnology>
          <p-tecnology  title="Docker" progress="50">
            <img slot="image" src="@/assets/docker.png">
          </p-tecnology>
          <p-tecnology  title="Vagrant" progress="50">
            <img slot="image" src="@/assets/vagrant.png">
          </p-tecnology>
          <p-tecnology  title="Git" progress="40">
            <img slot="image" src="@/assets/git.png">
          </p-tecnology>
          <!-- Backend -->
          <p-tecnology  title="Python" progress="60">
            <img slot="image" src="@/assets/python.png">
          </p-tecnology>
          <p-tecnology  title="Django" progress="60">
            <img slot="image" src="@/assets/django.jpg">
          </p-tecnology>
          <p-tecnology  title="Django Rest Framework" progress="40">
            <img slot="image" src="@/assets/drf.png">
          </p-tecnology>
          <p-tecnology  title="Rabbitmq" progress="30">
            <img slot="image" src="@/assets/rabbitmq.png">
          </p-tecnology><p-tecnology  title="Celery" progress="60">
            <img slot="image" src="@/assets/celery.png">
          </p-tecnology>
          <p-tecnology  title="Firebase" progress="40">
            <img slot="image" src="@/assets/firebase.png">
          </p-tecnology><p-tecnology  title="Mysql" progress="50">
            <img slot="image" src="@/assets/mysql.png">
          </p-tecnology>
          <p-tecnology  title="Postgresql" progress="50">
            <img slot="image" src="@/assets/postgresql.png">
          </p-tecnology>
          <!-- Generals -->
          <p-tecnology  title="Linux" progress="60">
            <img slot="image" src="@/assets/linux.png">
          </p-tecnology>
        </div>
      </section>
      <hr>
      <section id="proyects" class="section">
        <div class="container">
          <h1 class="title">📚 Proyects</h1>
          <h2 class="subtitle">
            A simple container to divide your page into
            <strong>sections</strong>, like the one you're currently reading
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="container pproyect">
          <div class="columns is-multiline">
            <p-project @projectClicked="modalProject = 'crediuno'">
              <img slot="image" src="@/assets/projects/crediuno.png">
              <h2 slot="title">Crediuno</h2>
            </p-project>
            <p-project>
              <img slot="image" src="@/assets/projects/pollitoIngles.png">
              <h2 slot="title">Pollito Ingles</h2>
            </p-project>
            <p-project>
              <img slot="image" src="@/assets/projects/portafolio.png">
              <h2 slot="title">Portafolio</h2>
            </p-project>
            <p-project>
              <img slot="image" src="@/assets/projects/platziMusic.png">
              <h2 slot="title">Platzi Music</h2>
            </p-project>
          </div>
          <button class="button is-large is-info is-rounded"> + </button>
        </div>
      </section>
      <hr>
      <section id="certific" class="section">
        <div class="container">
          <h1 class="title">📁 Certific</h1>
          <h2 class="subtitle">
            A simple container to divide your page into
            <strong>sections</strong>, like the one you're currently reading
          </h2>
          <div class="container pproyect">
            <div class="columns is-multiline">
              <p-certific>
                <img slot="image" src="@/assets/certifics/cursoProgramacionBasica.png">
                <h2 slot="title">Curso de Programación Basica</h2>
              </p-certific>
              <p-certific>
                <img slot="image" src="@/assets/certifics/cursoMarcaPersonal.png">
                <h2 slot="title">Curso de Marca Personal</h2>
              </p-certific>
              <p-certific>
                <img slot="image" src="@/assets/certifics/cursoDesarrolloWebOnline.png">
                <h2 slot="title">Curso de Desarrollo Web Online</h2>
              </p-certific>
              <p-certific>
                <img slot="image" src="@/assets/certifics/cursoFundamentosDeJavascript.png">
                <h2 slot="title">Curso de Fundamentos de Javascript</h2>
              </p-certific>
              <p-certific>
                <img slot="image" src="@/assets/certifics/cursoBasicoVuejs.png">
                <h2 slot="title">Curso Basico Vuejs</h2>
              </p-certific>
              <p-certific>
                <img slot="image" src="@/assets/certifics/cursoProfesionalVuejs.png">
                <h2 slot="title">Curso Profesional de Vuejs</h2>
              </p-certific>
            </div>
            <button class="button is-large is-info is-rounded"> + </button>
          </div>
        </div>
      </section>
      <section id="message" class="section">
        <div class="container">
          <h1 class="title">La web es hermosa</h1>
        </div>
      </section>
      <section id="contact" class="section">
        <div class="container">
          <h1 class="title">🛫 Contact</h1>
          <div class="social">
            <h2 class="subtitle"> Searching in social red </h2>
            <a class="button is-primary"
              href="https://www.w3schools.com" target="_blank">
              <span>Twitter</span>
            </a>
            <a class="button is-info"
              href="https://www.w3schools.com" target="_blank">
              <span>Facebook</span>
            </a>
            <a class="button"
              href="https://www.w3schools.com" target="_blank">
              <span>Instragan</span>
            </a>
            <a class="button is-info"
              href="https://www.w3schools.com" target="_blank">
              <span>Linkting</span>
            </a>
            <a class="button"
              href="https://www.w3schools.com" target="_blank">
              <span>Github</span>
            </a>
            <div class="or-line">
              <div><span>or</span></div>
              <hr>
            </div>
          </div>
          <p-email-box></p-email-box>
        </div>
      </section>
    </div>
    <p-modal-project
      :activate="showModalCrediuno"
      @close="modalProject = null">
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
    </p-modal-project>
    <p-footer></p-footer>
  </div>
</template>

<script>
import PHeader from '@/components/layout/Header.vue'
import PTecnology from '@/components/Tecnology.vue'
import PProject from '@/components/Project.vue'
import PCertific from '@/components/Certific.vue'
import PEmailBox from '@/components/EmailBox.vue'
import PModalProject from '@/components/ModalProject.vue'
import PFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',

  data () {
    return {
      $sticky: null,
      $proyects: null,
      $contact: null,
      $certific: null,
      activated: 'tecnoligies',
      modalProject: null
    }
  },

  components: {
    PHeader,
    PTecnology,
    PProject,
    PCertific,
    PEmailBox,
    PModalProject,
    PFooter
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

  computed: {
    showModalCrediuno () {
      return this.modalProject === 'crediuno'
    }
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
  height: 60vh
  .title
    color: white

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
