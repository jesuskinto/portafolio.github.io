<template>
  <div class="container">
    <h1 class="title">💡 {{ $t('tecnologies')}}</h1>
    <h2 class="subtitle">
      Tecnologias con las que he trabajado.
    </h2>
    <div class="sid">
      <p-tecnology title="Vuejs">
        <img slot="image" src="@/assets/tecnologies/vuejs.png">
      </p-tecnology>
      <p-tecnology title="Angular" progress="40">
        <img slot="image" src="@/assets/tecnologies/angular.png">
      </p-tecnology>
      <p-tecnology  title="Ionic" progress="70">
        <img slot="image" src="@/assets/tecnologies/ionic.png">
      </p-tecnology>
      <p-tecnology  title="Javascript">
        <img slot="image" src="@/assets/tecnologies/js.png">
      </p-tecnology>
      <p-tecnology  title="Typecript" progress="40">
        <img slot="image" src="@/assets/tecnologies/ts.png">
      </p-tecnology>
      <p-tecnology  title="BulmaCSS">
        <img slot="image" src="@/assets/tecnologies/bulma.png">
      </p-tecnology>
      <p-tecnology  title="Buefy">
        <img slot="image" src="@/assets/tecnologies/buefy.png">
      </p-tecnology>
      <p-tecnology  title="Bootstrap">
        <img slot="image" src="@/assets/tecnologies/bootstrap.png">
      </p-tecnology>
      <p-tecnology  title="CSS">
        <img slot="image" src="@/assets/tecnologies/css.png">
      </p-tecnology>
      <p-tecnology  title="SASS">
        <img slot="image" src="@/assets/tecnologies/sass.png">
      </p-tecnology>
      <p-tecnology  title="HTML">
        <img slot="image" src="@/assets/tecnologies/html.png">
      </p-tecnology>
      <p-tecnology  title="PUG">
        <img slot="image" src="@/assets/tecnologies/pug.png">
      </p-tecnology>
      <p-tecnology  title="Google Maps">
        <img slot="image" src="@/assets/tecnologies/googleMapApi.png">
      </p-tecnology>
      <p-tecnology  title="WebPack">
        <img slot="image" src="@/assets/tecnologies/webpack.png">
      </p-tecnology>
      <p-tecnology  title="Docker">
        <img slot="image" src="@/assets/tecnologies/docker.png">
      </p-tecnology>
      <p-tecnology  title="Vagrant">
        <img slot="image" src="@/assets/tecnologies/vagrant.png">
      </p-tecnology>
      <p-tecnology  title="Git">
        <img slot="image" src="@/assets/tecnologies/git.png">
      </p-tecnology>
      <p-tecnology  title="Python">
        <img slot="image" src="@/assets/tecnologies/python.jpeg">
      </p-tecnology>
      <p-tecnology  title="Django">
        <img slot="image" src="@/assets/tecnologies/django.png">
      </p-tecnology>
      <p-tecnology  title="Django Rest Framework">
        <img slot="image" src="@/assets/tecnologies/drf.png">
      </p-tecnology>
      <p-tecnology  title="Rabbitmq">
        <img slot="image" src="@/assets/tecnologies/rabbitmq.png">
      </p-tecnology><p-tecnology  title="Celery">
        <img slot="image" src="@/assets/tecnologies/celery.png">
      </p-tecnology>
      <p-tecnology  title="Firebase">
        <img slot="image" src="@/assets/tecnologies/firebase.png">
      </p-tecnology><p-tecnology  title="Mysql">
        <img slot="image" src="@/assets/tecnologies/mysql.png">
      </p-tecnology>
      <p-tecnology  title="Postgresql">
        <img slot="image" src="@/assets/tecnologies/postgresql.png">
      </p-tecnology>
      <p-tecnology  title="Linux">
        <img slot="image" src="@/assets/tecnologies/linux.png">
      </p-tecnology>
      <p-tecnology  title="React">
        <img slot="image" src="@/assets/tecnologies/react.png">
      </p-tecnology>
      <p-tecnology  title="Npm">
        <img slot="image" src="@/assets/tecnologies/npm.png">
      </p-tecnology>
      <p-tecnology  title="Express">
        <img slot="image" src="@/assets/tecnologies/express.png">
      </p-tecnology>
      <p-tecnology  title="Nodejs">
        <img slot="image" src="@/assets/tecnologies/node.png">
      </p-tecnology>
      <p-tecnology  title="Yarn">
        <img slot="image" src="@/assets/tecnologies/yarn.png">
      </p-tecnology>
      <p-tecnology  title="Laravel">
        <img slot="image" src="@/assets/tecnologies/laravel.png">
      </p-tecnology>
    </div>
  </div>
</template>

<script>
import PTecnology from '@/components/Tecnology.vue'
export default {
  components: {
    PTecnology
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
