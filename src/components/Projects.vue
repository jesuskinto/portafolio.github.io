<template>
  <div>
    <div class="container">
      <h1 class="title"># {{ $t('projects')}}</h1>
    </div>
    <div class="container pproyect">
      <carousel
        :navigationEnabled="true"
        :perPageCustom="[[768, 1], [1024, 3], [1216, 4]]">
        <slide v-for="(p, i) in projects" :key="i">
          <p-project @projectClicked="openModal(p)">
            <img slot="image" :src="p.src" :alt="p.title">
            <strong slot="title">{{ p.title }}</strong>
            <template slot="type">{{ p.type }}</template>
            <span slot="repos" v-for="(r, i) in p.repos" :key="i">
              <a :href="r" target="_blank" rel="noopener">{{ r | urlToName }}</a> <br>
            </span>
            <template slot="job">{{ p.job }}</template>
            <template slot="date">{{ p.date }}</template>
          </p-project>
        </slide>
      </carousel>
      <p>
        {{ $t('products-message')}}
        <strong>
          {{ $t('products-lema')}}
        </strong>
      </p>
    </div>
    <p-modal
      :activate="modal.show"
      @close="modal.show = false">
      <carousel
        slot="image"
        :perPage="1"
        :autoplayHoverPause="true"
        :autoplay="true">
        <slide v-for="(image, i) in modal.data.images" :key="i">
          <figure class="image">
            <img :src="image">
          </figure>
        </slide>
      </carousel>
      <template slot="content">
        <h1 class="title">{{ modal.data.title }}</h1>
        <h2 class="subtitle">{{ modal.data.subtitle }}</h2>
        <span>url: <a :href="modal.data.href">{{ modal.data.href }}</a></span>
        <br>
        <span>Repos:</span>
        <div v-for="(r, i) in modal.data.repos" :key="i" >
          <a :href="r">{{ r | urlToName }}</a>
        </div>
        <br>
        <span>{{ $t('date')}}: {{ modal.data.date }}</span>
        <hr>
        <p> {{ modal.data.bio }} </p>
        <hr>
        <div class="columns">
          <div class="column is-6">
            <h3 class="subtitle">{{$t('tecnologies')}}:</h3>
            <ol class="modal-list">
              <li v-for="(t,i) in modal.data.tecnologies" :key="i">{{ t }}</li>
            </ol>
          </div>
          <div class="column is-6">
            <h3 class="subtitle">{{$t('job')}}:</h3>
            <ol class="modal-list">
              <li v-for="(j,i) in modal.data.jobs" :key="i">{{ j }}</li>
            </ol>
          </div>
        </div>
        <template v-show="modal.data.metadata">
          <hr>
          <div v-for="(m, i) in modal.data.metadata" :key="i">
            <h3>{{ m.title }}</h3>
            <a :href="m.href" target="_blank" rel="noopener">
              <img v-if="m.type === 'image'" :src="m.value" :alt="m.title">
            </a>
            <p v-if="m.type === 'paragraph'" :alt="m.title">{{ m.value }}</p>
            <hr />
          </div>
        </template>
      </template>
    </p-modal>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import PProject from '@/components/Project.vue'
import PModal from '@/components/shared/Modal.vue'

export default {
  components: {
    PProject,
    PModal,
    Carousel,
    Slide
  },
  filters: {
    urlToName: function (value) {
      if (!value) return ''
      const chucks = value.split('/')
      return chucks[chucks.length - 1]
    }
  },
  data () {
    return {
      modal: {
        show: false,
        data: {}
      },
      projects: [
        {
          slug: 'registromedico',
          src: require('@/assets/projects/registromedico.png'),
          images: [
            require('@/assets/projects/registromedico.png'),
            require('@/assets/projects/registromedico2.png'),
            require('@/assets/projects/registromedico3.png'),
            require('@/assets/projects/registromedico4.png'),
            require('@/assets/projects/registromedico5.png')
          ],
          type: 'Registro y seguimiento de pacientes cardiovasculares',
          job: 'Full Stack Developer',
          date: 'Jan-2018 Feb-2018',
          title: 'Registro Medico Cardiovascular',
          subtitle: 'Plataforma de solicitud de creditos',
          href: 'https://registro-cardiovascular-app-97s2gj706.now.sh/',
          repos: [
            'https://github.com/jesuskinto/registrocardivascular-api',
            'https://github.com/jesuskinto/registrocardiovascular-ui'
          ],
          bio: 'Creación, Edición y Eliminación pacientes cardiovasculares, se permiten las busquedas de pacientes por DNI, Nombre y filtrado avanzado por diagnostico o rango de fechas.',
          tecnologies: [
            'MongoDB',
            'Nodejs',
            'Express',
            'JWT',
            'Hapy.js',
            'Vuejs',
            'Vue-Router',
            'VeeValidate'
          ],
          jobs: [
            'Full Stack Develop'
          ]
        },
        {
          slug: 'crediuno',
          src: require('@/assets/projects/crediuno.png'),
          images: [
            require('@/assets/projects/crediuno.png')
          ],
          title: 'Crediuno',
          type: 'Plataforma de creditos',
          job: 'Full Stack Developer',
          date: 'Oct-2018 - present',
          subtitle: 'Plataforma de solicitud de creditos',
          href: 'https://app.crediuno.com.ar/',
          bio: 'Plataforma de solicitud y gestion creditos que permite a clientes de la empresa solicitar creditos con diferentes niveles de financiamiento; una vez la solicitud es aprobada; el sistema permite gestionar los pagos hasta la finalización del mismo.',
          tecnologies: [
            'Django',
            'Django Rest Framework',
            'Mysql',
            'Celery',
            'Rabbitmq',
            'Vuejs',
            'Vue-Router',
            'VeeValidate'
          ],
          jobs: [
            'Full Stack Develop'
          ]
        },
        {
          slug: 'portafolio',
          src: require('@/assets/projects/portafolio.png'),
          images: [
            require('@/assets/projects/portafolio.png')
          ],
          type: 'Portafolio personal',
          job: 'Full Stack Developer',
          date: 'Jul-2019 - Agost-2019',
          title: 'Portafolio',
          subtitle: 'Portafolio personal',
          href: window.location.href,
          repos: [
            'https://github.com/jesuskinto/portafolio.github.io'
          ],
          bio: 'Portafolio personal construido con Vuejs y BulmaCSS para presentar mis trabajos.',
          tecnologies: [
            'Vuejs',
            'BulmaCSS',
            'VueCarousel'
          ],
          jobs: [
            'Frontend Develop'
          ]
        },
        {
          slug: 'mascotas',
          src: require('@/assets/projects/mascotas.png'),
          images: [
            require('@/assets/projects/mascotas.png'),
            require('@/assets/projects/mascotas0.png'),
            require('@/assets/projects/mascotas1.png'),
            require('@/assets/projects/mascotas4.png'),
            require('@/assets/projects/mascotas6.png')
          ],
          title: 'Mascotas',
          job: 'Full Stack Developer',
          date: 'Apr-2019 - Jul-2019',
          type: 'CRUD de mascotas y dueños',
          subtitle: 'Plataforma para el registro y control de mascotas',
          href: null,
          bio: 'Aplicacion para la creación/edición/eliminacion de mascotas y la gestion de sus citas medias, historial clinico, control de Vacunas y otros servicios. Ésta app fue diseñada para el <strong>curso de Base de Datos de la Universidad de los Andes Venezuela. La base de datos se encuenta Normalizada a 3FN',
          tecnologies: [
            'Modelado ERE',
            'Modelado Relacional',
            'Modelo UML de clases',
            'Postgresql',
            'Django',
            'Django Rest framework',
            'JWT AUTH',
            'Vuejs',
            'BulmaCSS'
          ],
          jobs: [
            'Full Stack Develop'
          ],
          metadata: [
            {
              type: 'image',
              title: 'ERE',
              value: require('@/assets/projects/mascotas-ere.png'),
              href: require('@/assets/projects/mascotas-ere.png')
            },
            {
              type: 'image',
              title: 'Diagrams of class',
              value: require('@/assets/projects/mascotas-diagramsofclass.png'),
              href: require('@/assets/projects/mascotas-diagramsofclass.png')
            },
            {
              type: 'image',
              title: 'Wireframe',
              value: require('@/assets/projects/mascotas-wireframe.png'),
              href: 'https://projects.invisionapp.com/freehand/document/8jL8wCgCb'
            }
          ]
        },
        {
          slug: 'platzirooms',
          src: require('@/assets/projects/platzirooms.png'),
          images: [
            require('@/assets/projects/platzirooms.png')
          ],
          type: 'Buscador de Hoteles',
          job: 'Frontend Developer',
          date: 'Jun-2019 - Jun-2019',
          title: 'Platzi Rooms',
          subtitle: 'Buscador de Casas Vacacionales',
          href: 'https://platzirooms.herokuapp.com/',
          bio: 'Platzi Rooms permite la busqueda de casas vacacionales, subidas al sistema por los mismos usuarios, el sistema hace uso de  Firebase para autenticar los usuarios y para almacenar las casas disponibles. El nuevo usuario podra registrarse y logearse para agregar y eliminar casas vacacionales ésta app fue desarrollada como parte del Curso Avanzado de Vuejs en Platzi.',
          tecnologies: [
            'Vuejs',
            'VueI18n',
            'VueRouter',
            'VueStore',
            'Firebase database',
            'Firebase authenticate'
          ],
          jobs: [
            'Full Stack Develop'
          ]
        },
        {
          slug: 'platzimusic',
          src: require('@/assets/projects/platzimusic.png'),
          images: [
            require('@/assets/projects/platzimusic.png')
          ],
          type: 'Reproducto de musica',
          job: 'Frontend Developer',
          date: 'May-2019 - Jun-2019',
          title: 'Platzi Music',
          subtitle: 'App para busqueda y reproducción de musica',
          href: 'https://platzi-music.jesuskinto.now.sh/',
          bio: 'Utilize el buscardor para encontrar musica y reproducirla facilmente, la app permite el cambio de idioma y una vista de detalla de las pistas, ésta app fue desarrollada como parte del Curso Profesional de Vuejs en Platzi.',
          tecnologies: [
            'Vuejs',
            'VueI18n',
            'VueRouter',
            'TraeJs',
            'BulmaCSS'
          ],
          jobs: [
            'Frontend Develop'
          ]
        },
        {
          slug: 'todolist',
          src: require('@/assets/projects/todolist.png'),
          images: [
            require('@/assets/projects/todolist.png')
          ],
          type: 'TodoList con conteo de tiempo',
          job: 'Frontend Developer',
          date: 'May-2019 - Jun-2019',
          title: 'Todo List',
          subtitle: 'Pequeña app para adjuntar tareas',
          href: 'https://codepen.io/jesuskinto/full/BejGpr',
          bio: 'Cree y elimine tareas de su lista con un interfas agradable y muy liviana construida con Vuejs.',
          tecnologies: [
            'Vuejs',
            'BulmaCSS'
          ],
          jobs: [
            'Fronted Developer'
          ]
        },
        {
          slug: 'costahomespain',
          src: require('@/assets/projects/costahomespain.png'),
          images: [
            require('@/assets/projects/costahomespain.png')
          ],
          type: 'Buscador de casas vacacionales',
          job: 'Frontend Developer',
          date: 'May-2019 - Jun-2019',
          title: 'CostaHomeSpain',
          subtitle: 'Buscador de Casas Vacacionales en España',
          href: 'http://costahomespain.es/',
          bio: null,
          tecnologies: [
            'Vuejs',
            'VueI18n',
            'VueRouter',
            'Google Maps Api'
          ],
          jobs: [
            'Full Stack Develop'
          ]
        },
        {
          slug: 'pollitoingles',
          src: require('@/assets/projects/pollitoingles.png'),
          images: [
            require('@/assets/projects/pollitoingles.png')
          ],
          type: 'E commerce c2c',
          job: 'Frontend Developer',
          date: 'May-2019 - Jun-2019',
          title: 'PollitoIngles',
          subtitle: 'E comerce c2c para productos de bebes',
          href: 'https://pollitoingles.com.ve/',
          bio: 'E comerce c2c para ropa y juguetes de bebes desarollado bajo un Backend en Django y un Frontend con AngularJs.',
          tecnologies: [
            'AngularJs',
            'Mysql',
            'Django',
            'Django rest Framework',
            'Vagrant'
          ],
          jobs: [
            'Full Stack Develop'
          ]
        }
      ]
    }
  },
  methods: {
    openModal (data) {
      this.modal.data = data
      this.modal.show = true
    }
  }
}
</script>
