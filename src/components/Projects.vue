<template>
  <div>
    <div class="container">
      <h1 class="title">📚 {{ $t('projects')}}</h1>
    </div>
    <div class="container pproyect">
      <carousel
        :navigationEnabled="true"
        :perPageCustom="[[768, 1], [1024, 3], [1216, 4]]">
        <slide v-for="(p, i) in projects" :key="i">
          <p-project @projectClicked="$emit('projectClicked', p.slug)">
            <img slot="image" :src="p.src">
            <strong slot="title">{{ p.title }}</strong>
            <template slot="type">{{ p.type }}</template>
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
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import PProject from '@/components/Project.vue'
export default {
  components: {
    PProject,
    Carousel,
    Slide
  },
  data () {
    return {
      projects: [
        {
          slug: 'crediuno',
          src: require('@/assets/projects/crediuno.png'),
          title: 'Crediuno',
          type: 'Plataforma de creditos',
          job: 'Full Stack Developer',
          date: 'Oct-2018 - present'
        },
        {
          slug: 'portafolio',
          src: require('@/assets/projects/portafolio.png'),
          title: 'Portafolio',
          type: 'Portafolio personal',
          job: 'Full Stack Developer',
          date: 'Jul-2019 - Agost-2019'
        },
        {
          slug: 'mascotas',
          src: require('@/assets/projects/mascotas.png'),
          title: 'Mascotas',
          type: 'CRUD de mascotas y dueños',
          job: 'Full Stack Developer',
          date: 'Apr-2019 - Jul-2019'
        },
        {
          slug: 'platzirooms',
          src: require('@/assets/projects/platzirooms.png'),
          title: 'Platzi Rooms',
          type: 'Buscador de Hoteles',
          job: 'Frontend Developer',
          date: 'Jun-2019 - Jun-2019'
        },
        {
          slug: 'platzimusic',
          src: require('@/assets/projects/platzimusic.png'),
          title: 'Platzi Music',
          type: 'Reproducto de musica',
          job: 'Frontend Developer',
          date: 'May-2019 - Jun-2019'
        },
        {
          slug: 'todolist',
          src: require('@/assets/projects/todolist.png'),
          title: 'Todo List',
          type: 'TodoList con conteo de tiempo',
          job: 'Frontend Developer',
          date: 'May-2019 - Jun-2019'
        },
        {
          slug: 'costahomespain',
          src: require('@/assets/projects/costahomespain.png'),
          title: 'CostaHomeSpain',
          type: 'Buscador de casas vacacionales',
          job: 'Frontend Developer',
          date: 'Sep-2017 - Apr-2018'
        },
        {
          slug: 'pollitoingles',
          src: require('@/assets/projects/pollitoingles.png'),
          title: 'Pollito Ingles',
          type: 'E commerce c2c',
          job: 'Frontend Developer',
          date: 'Mar-2016 - Nov-2016'
        }
      ]
    }
  }
}
</script>
