<template>
  <div>
    <p-modal
      :activate="showModal == 'lang'"
      @close="closeModal">
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
      @close="closeModal">
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
    <p-modal
      :activate="showModal == 'portafolio'"
      @close="closeModal">
      <img slot="image" src="@/assets/projects/portafolio.png" alt="">
      <template slot="content">
        <h1 class="title">Portafolio</h1>
        <h2 class="subtitle">Portafolio personal</h2>
        <span>url: <a @click="closeModal" :href="currentUrl">{{ currentUrl }}</a></span>
        <br>
        <span>{{ $t('date')}}: Jul-2019 - Ago-2019</span>
        <hr>
        <p>
          Portafolio personal construido con Vuejs y BulmaCSS para
          presentar mis trabajos
        </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li>Vuejs</li>
              <li>BulmaCSS</li>
              <li>VueCarousel</li>
            </ol>
          </div>
          <div class="column is-6">
            <h3 class="subtitle">{{$t('job')}}:</h3>
            <ol class="modal-list">
              <li>Frontend Develop</li>
            </ol>
          </div>
        </div>
      </template>
    </p-modal>
    <p-modal
      :activate="showModal == 'mascotas'"
      @close="closeModal">
      <img slot="image" src="@/assets/projects/mascotas.png" alt="">
      <template slot="content">
        <h1 class="title">Mascotas</h1>
        <h2 class="subtitle">Portafolio personal</h2>
        <span>url: <a href="#">No disponible</a></span>
        <br>
        <span>{{ $t('date')}}: Apr-2019 - Jul-2019</span>
        <hr>
        <p>
          Aplicacion para la creación/edición/eliminacion de
          mascotas y la gestion de sus citas medias, historial
          clinico, control de Vacunas y otros servicios.
          <br>
          Ésta app fue diseñada para el <strong>curso de Base de Datos de la Universidad de los Andes Venezuela</strong>
          la base de datos se encuenta <strong>Normalizada a 3FN</strong>
          <br>
          En el proceso se utilizon las herramientas:
          <ol class="modal-list">
            <li>Modelado ERE</li>
            <li>Modelado Relacional</li>
            <li>Modelo UML de clases</li>
          </ol>
        </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li>Postgresql</li>
              <li>Django</li>
              <li>Django Rest framework</li>
              <li>JWT AUTH</li>
              <li>Vuejs</li>
              <li>BulmaCSS</li>
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
    <p-modal
      :activate="showModal == 'todolist'"
      @close="closeModal">
      <img slot="image" src="@/assets/projects/todolist.png" alt="">
      <template slot="content">
        <h1 class="title">Todo List</h1>
        <h2 class="subtitle">Pequeña app para adjuntar tareas</h2>
        <span>url: <a href="https://codepen.io/jesuskinto/full/BejGpr">https://codepen.io/jesuskinto/full/BejGpr</a></span>
        <br>
        <span>{{ $t('date')}}: May-2019 - Jun-2019</span>
        <hr>
        <p>
          Cree y elimine tareas de su lista con un interfas
          agradable y muy liviana construida con Vuejs
        </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li>Vuejs</li>
              <li>BulmaCSS</li>
            </ol>
          </div>
          <div class="column is-6">
            <h3 class="subtitle">{{$t('job')}}:</h3>
            <ol class="modal-list">
              <li>Fronted Developer</li>
            </ol>
          </div>
        </div>
      </template>
    </p-modal>
    <p-modal
      :activate="showModal == 'platzimusic'"
      @close="closeModal">
      <img slot="image" src="@/assets/projects/platzimusic.png" alt="">
      <template slot="content">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">App para busqueda y reproducción de musica</h2>
        <span>url: <a href="https://platzi-music.jesuskinto.now.sh/">https://platzi-music.jesuskinto.now.sh/</a></span>
        <br>
        <span>{{ $t('date')}}: May-2019 - Jun-2019</span>
        <hr>
        <p>
          Utilize el buscardor para encontrar musica y reproducirla facilmente,
          la app permite el cambio de idioma y una vista de detalla de las pistas,
          <br>
          ésta app fue desarrollada como parte del <strong>Curso Profesional de Vuejs en Platzi</strong>
        </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li>Vuejs</li>
              <li>VueI18n</li>
              <li>VueRouter</li>
              <li>TraeJs</li>
              <li>BulmaCSS</li>
            </ol>
          </div>
          <div class="column is-6">
            <h3 class="subtitle">{{$t('job')}}:</h3>
            <ol class="modal-list">
              <li>Frontend Developer</li>
            </ol>
          </div>
        </div>
      </template>
    </p-modal>
        <p-modal
      :activate="showModal == 'platzirooms'"
      @close="closeModal">
      <img slot="image" src="@/assets/projects/platzirooms.png" alt="">
      <template slot="content">
        <h1 class="title">Platzi Rooms</h1>
        <h2 class="subtitle">Buscador de Casas Vacacionales</h2>
        <span>url: <a href="https://platzirooms.herokuapp.com/">https://platzirooms.herokuapp.com/</a></span>
        <br>
        <span>{{ $t('date')}}: May-2019 - Jun-2019</span>
        <hr>
        <p>
          Platzi Rooms permite la busqueda de casas vacacionales, subidas al sistema por los mismos
          usuarios, el sistema hace uso de <strong>Firebase</strong> para autenticar los usuarios y
          para almacenar las casas disponibles.
          <br>
          El nuevo usuario podra registrarse y logearse para agregar y eliminar casas vacacionales
          <br>
          ésta app fue desarrollada como parte del <strong>Curso Avanzado de Vuejs en Platzi</strong>
        </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li>Vuejs</li>
              <li>VueI18n</li>
              <li>VueRouter</li>
              <li>VueStore</li>
              <li>Firebase database</li>
              <li>Firebase authenticate</li>
            </ol>
          </div>
          <div class="column is-6">
            <h3 class="subtitle">{{$t('job')}}:</h3>
            <ol class="modal-list">
              <li>Full Stack Developer</li>
            </ol>
          </div>
        </div>
      </template>
    </p-modal>
    <p-modal
      :activate="showModal == 'costahomespain'"
      @close="closeModal">
      <img slot="image" src="@/assets/projects/costahomespain.png" alt="">
      <template slot="content">
        <h1 class="title">CostaHomeSpain</h1>
        <h2 class="subtitle">Buscador de Casas Vacacionales en España</h2>
        <span>url: <a href="http://costahomespain.es/">http://costahomespain.es/</a></span>
        <br>
        <span>{{ $t('date')}}: May-2019 - Jun-2019</span>
        <hr>
        <p>
          Platzi Rooms permite la busqueda de casas vacacionales, subidas al sistema por los mismos
          usuarios, el sistema hace uso de <strong>Firebase</strong> para autenticar los usuarios y
          para almacenar las casas disponibles.
          <br>
          El nuevo usuario podra registrarse y logearse para agregar y eliminar casas vacacionales
          <br>
          ésta app fue desarrollada como parte del <strong>Curso Avanzado de Vuejs en Platzi</strong>
        </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li>Vuejs</li>
              <li>VueI18n</li>
              <li>VueRouter</li>
              <li>Google Maps Api</li>
            </ol>
          </div>
          <div class="column is-6">
            <h3 class="subtitle">{{$t('job')}}:</h3>
            <ol class="modal-list">
              <li>Frontend Developer</li>
            </ol>
          </div>
        </div>
      </template>
    </p-modal>
    <p-modal
      :activate="showModal == 'pollitoingles'"
      @close="closeModal">
      <img slot="image" src="@/assets/projects/pollitoingles.png" alt="">
      <template slot="content">
        <h1 class="title">PollitoIngles</h1>
        <h2 class="subtitle">E comerce c2c para objectos de bebes</h2>
        <span>url: <a href="https://pollitoingles.com.ve/">https://pollitoingles.com.ve/</a></span>
        <br>
        <span>{{ $t('date')}}: May-2016 - Nov-2016</span>
        <hr>
        <p>
          E comerce c2c para ropa y juguetes de bebes desarollado bajo un Backend en Django
          y un Frontend con AngularJs
        </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li>AngularJs</li>
              <li>Mysql</li>
              <li>Django</li>
              <li>Django rest Framework</li>
              <li>Vagrant</li>
            </ol>
          </div>
          <div class="column is-6">
            <h3 class="subtitle">{{$t('job')}}:</h3>
            <ol class="modal-list">
              <li>Frontend Developer</li>
            </ol>
          </div>
        </div>
      </template>
    </p-modal>
  </div>
</template>

<script>
import PModal from '@/components/shared/Modal.vue'
export default {
  props: ['showModal'],

  components: {
    PModal
  },

  computed: {
    currentUrl () {
      return window.location.href
    }
  },

  methods: {
    closeModal () {
      this.$emit('close')
    },
    changeLang (lang) {
      this.$i18n.locale = lang
      this.closeModal()
    }
  }

}
</script>
