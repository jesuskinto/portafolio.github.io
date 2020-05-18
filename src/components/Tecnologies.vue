<template>
  <div class="container">
    <h1 class="title"># {{ $t('tecnologies')}}</h1>
    <div class="sid">
      <p-tecnology v-for="(t, i) in tecnologies" :key="i" :title="t.title">
        <img slot="image" :src="t.src" :alt="t.title">
      </p-tecnology>
    </div>
  </div>
</template>

<script>
import PTecnology from '@/components/Tecnology.vue'
export default {
  components: {
    PTecnology
  },
  data () {
    return {
      tecnologies: [
        {
          title: 'Vuejs',
          src: require('@/assets/tecnologies/vuejs.png')
        },
        {
          title: 'Angular',
          src: require('@/assets/tecnologies/angular.png')
        },
        {
          title: 'Ionic',
          src: require('@/assets/tecnologies/ionic.png')
        },
        {
          title: 'Javascript',
          src: require('@/assets/tecnologies/js.png')
        },
        {
          title: 'Typecript',
          src: require('@/assets/tecnologies/ts.png')
        },
        {
          title: 'BulmaCSS',
          src: require('@/assets/tecnologies/bulma.png')
        },
        {
          title: 'Buefy',
          src: require('@/assets/tecnologies/buefy.png')
        },
        {
          title: 'Bootstrap',
          src: require('@/assets/tecnologies/bootstrap.png')
        },
        {
          title: 'CSS',
          src: require('@/assets/tecnologies/css.png')
        },
        {
          title: 'SASS',
          src: require('@/assets/tecnologies/sass.png')
        },
        {
          title: 'HTML',
          src: require('@/assets/tecnologies/html.png')
        },
        {
          title: 'PUG',
          src: require('@/assets/tecnologies/pug.png')
        },
        {
          title: 'Google Maps',
          src: require('@/assets/tecnologies/googleMapApi.png')
        },
        {
          title: 'WebPack',
          src: require('@/assets/tecnologies/webpack.png')
        },
        {
          title: 'Docker',
          src: require('@/assets/tecnologies/docker.png')
        },
        {
          title: 'Vagrant',
          src: require('@/assets/tecnologies/vagrant.png')
        },
        {
          title: 'Git',
          src: require('@/assets/tecnologies/git.png')
        },
        {
          title: 'Python',
          src: require('@/assets/tecnologies/python.jpeg')
        },
        {
          title: 'Django',
          src: require('@/assets/tecnologies/django.png')
        },
        {
          title: 'Django Rest Framework',
          src: require('@/assets/tecnologies/drf.png')
        },
        {
          title: 'Rabbitmq',
          src: require('@/assets/tecnologies/rabbitmq.png')
        },
        {
          title: 'Celery',
          src: require('@/assets/tecnologies/celery.png')
        },
        {
          title: 'Firebase',
          src: require('@/assets/tecnologies/firebase.png')
        },
        {
          title: 'Mysql',
          src: require('@/assets/tecnologies/mysql.png')
        },
        {
          title: 'Postgresql',
          src: require('@/assets/tecnologies/postgresql.png')
        },
        {
          title: 'Linux',
          src: require('@/assets/tecnologies/linux.png')
        },
        {
          title: 'React',
          src: require('@/assets/tecnologies/react.png')
        },
        {
          title: 'React Native',
          src: require('@/assets/tecnologies/react.png')
        },
        {
          title: 'Npm',
          src: require('@/assets/tecnologies/npm.png')
        },
        {
          title: 'Express',
          src: require('@/assets/tecnologies/express.png')
        },
        {
          title: 'Nodejs',
          src: require('@/assets/tecnologies/node.png')
        },
        {
          title: 'Yarn',
          src: require('@/assets/tecnologies/yarn.png')
        },
        {
          title: 'Laravel',
          src: require('@/assets/tecnologies/laravel.png')
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.sid
  margin-left: -10%
  margin-right: -22%
  margin-top: 60px
  margin-bottom: 60px
</style>
