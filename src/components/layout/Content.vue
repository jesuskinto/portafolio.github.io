<template>
  <main>
    <section id="tecnologies" class="section">
      <div class="container" >
        <h1 class="title">💡 Tecnologies</h1>
        <h2 class="subtitle">
          A simple container to divide your page into
          <strong>sections</strong>, like the one you're currently reading
        </h2>
        <!-- Frontend -->
        <p-tecnology title="Vuejs" progress="80">
          <img slot="image" src="@/assets/tecnologies/vuejs.png">
        </p-tecnology>
        <p-tecnology title="Angular" progress="40">
          <img slot="image" src="@/assets/tecnologies/angular.png">
        </p-tecnology>
        <p-tecnology  title="Ionic" progress="70">
          <img slot="image" src="@/assets/tecnologies/ionic.png">
        </p-tecnology>
        <p-tecnology  title="Javascript" progress="80">
          <img slot="image" src="@/assets/tecnologies/js.png">
        </p-tecnology>
        <p-tecnology  title="Typecript" progress="40">
          <img slot="image" src="@/assets/tecnologies/ts.png">
        </p-tecnology>
        <p-tecnology  title="BulmaCSS" progress="80">
          <img slot="image" src="@/assets/tecnologies/bulma.png">
        </p-tecnology>
        <p-tecnology  title="Buefy" progress="80">
          <img slot="image" src="@/assets/tecnologies/buefy.png">
        </p-tecnology>
        <p-tecnology  title="Bootstrap" progress="80">
          <img slot="image" src="@/assets/tecnologies/bootstrap.png">
        </p-tecnology>
        <p-tecnology  title="CSS" progress="80">
          <img slot="image" src="@/assets/tecnologies/css.png">
        </p-tecnology>
        <p-tecnology  title="SASS" progress="40">
          <img slot="image" src="@/assets/tecnologies/sass.png">
        </p-tecnology>
        <p-tecnology  title="HTML" progress="100">
          <img slot="image" src="@/assets/tecnologies/html.png">
        </p-tecnology>
        <p-tecnology  title="PUG" progress="100">
          <img slot="image" src="@/assets/tecnologies/pug.png">
        </p-tecnology>
        <p-tecnology  title="Google Maps" progress="50">
          <img slot="image" src="@/assets/tecnologies/googleMapApi.png">
        </p-tecnology>
        <p-tecnology  title="WebPack" progress="60">
          <img slot="image" src="@/assets/tecnologies/webpack.png">
        </p-tecnology>
        <p-tecnology  title="Docker" progress="50">
          <img slot="image" src="@/assets/tecnologies/docker.png">
        </p-tecnology>
        <p-tecnology  title="Vagrant" progress="50">
          <img slot="image" src="@/assets/tecnologies/vagrant.png">
        </p-tecnology>
        <p-tecnology  title="Git" progress="40">
          <img slot="image" src="@/assets/tecnologies/git.png">
        </p-tecnology>
        <!-- Backend -->
        <p-tecnology  title="Python" progress="60">
          <img slot="image" src="@/assets/tecnologies/python.png">
        </p-tecnology>
        <p-tecnology  title="Django" progress="60">
          <img slot="image" src="@/assets/tecnologies/django.jpg">
        </p-tecnology>
        <p-tecnology  title="Django Rest Framework" progress="40">
          <img slot="image" src="@/assets/tecnologies/drf.png">
        </p-tecnology>
        <p-tecnology  title="Rabbitmq" progress="30">
          <img slot="image" src="@/assets/tecnologies/rabbitmq.png">
        </p-tecnology><p-tecnology  title="Celery" progress="60">
          <img slot="image" src="@/assets/tecnologies/celery.png">
        </p-tecnology>
        <p-tecnology  title="Firebase" progress="40">
          <img slot="image" src="@/assets/tecnologies/firebase.png">
        </p-tecnology><p-tecnology  title="Mysql" progress="50">
          <img slot="image" src="@/assets/tecnologies/mysql.png">
        </p-tecnology>
        <p-tecnology  title="Postgresql" progress="50">
          <img slot="image" src="@/assets/tecnologies/postgresql.png">
        </p-tecnology>
        <!-- Generals -->
        <p-tecnology  title="Linux" progress="60">
          <img slot="image" src="@/assets/tecnologies/linux.png">
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
          <p-project @projectClicked="$emit('showModal', 'crediuno')">
            <img slot="image" src="@/assets/projects/crediuno.png">
            <strong slot="title">Crediuno</strong>
          </p-project>
          <p-project>
            <img slot="image" src="@/assets/projects/pollitoIngles.png">
            <strong slot="title">Pollito Ingles</strong>
          </p-project>
          <p-project>
            <img slot="image" src="@/assets/projects/portafolio.png">
            <strong slot="title">Portafolio</strong>
          </p-project>
          <p-project>
            <img slot="image" src="@/assets/projects/platziMusic.png">
            <strong slot="title">Platzi Music</strong>
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
            <p-certific href="https://platzi.com/@Jesuskinto/curso/1050-programacion-basica/diploma/detalle/">
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
            <p-certific>
              <img slot="image" src="@/assets/certifics/carreraVuejs.png">
              <h2 slot="title">Carrera de Vuejs</h2>
            </p-certific>
            <p-certific>
              <img slot="image" src="@/assets/certifics/cursoPython.png">
              <h2 slot="title">Curso basico de Python</h2>
            </p-certific>
            <p-certific>
              <img slot="image" src="@/assets/certifics/cursoPython2.png">
              <h2 slot="title">Curso de Python</h2>
            </p-certific>
            <p-certific>
              <img slot="image" src="@/assets/certifics/cursoAprenderEnLineaEfectivamente.png">
              <h2 slot="title">Curso aprender en linea efectivamente</h2>
            </p-certific>
          </div>
          <button class="button is-large is-info is-rounded"> + </button>
        </div>
      </div>
    </section>
    <section id="message" class="section">
      <div class="container">
        <i class="title">La web es hermosa, </i>
        <i class="subtitle">
          Construyamos algo: <p-aleatory-text></p-aleatory-text>
        </i>
      </div>
    </section>
    <section id="contact" class="section">
      <div class="container">
        <h1 class="title">🛫 Contact</h1>
        <div class="social">
          <h2 class="subtitle"> Searching in social red </h2>
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
          <!--Es necesario crear un input para utilizar el clickboard-->
          <input @click="copyInCLickboard" class="button" id="gmail" type="text" value="jesuskinto@gmail.com" readonly>
          <div class="or-line">
            <div><span>or</span></div>
            <hr>
          </div>
        </div>
        <p-email-box></p-email-box>
      </div>
    </section>
  </main>
</template>

<script>
import PTecnology from '@/components/Tecnology.vue'
import PProject from '@/components/Project.vue'
import PCertific from '@/components/Certific.vue'
import PEmailBox from '@/components/EmailBox.vue'
import PAleatoryText from '@/components/AleatoryText.vue'

export default {
  components: {
    PTecnology,
    PProject,
    PCertific,
    PEmailBox,
    PAleatoryText
  },
  methods: {
    copyInCLickboard () {
      const copyText = document.getElementById('gmail')
      copyText.select()
      document.execCommand('copy')
      alert('Copied the text: ' + copyText.value)
    }
  }
}
</script>

<style lang="sass">
.social a
  color: white !important
  margin-bottom: 15px

.twitter
  background: #4486F7 !important

.facebook
  background: #5545B6 !important

.linkedin
  background: #293B4B !important

.instagram
  background: #FBCC48 !important

.github
  background: #24282E !important

.platzi
  background: #82DE32 !important

#gmail
  background: #E43426 !important
  color: white !important
</style>
