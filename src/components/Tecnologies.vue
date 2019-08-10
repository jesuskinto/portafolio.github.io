<template>
  <section id="tecnologies" class="section">
    <div class="container">
      <h1 class="title">💡 {{ $t('tecnologies')}}</h1>
      <h2 class="subtitle">
        Tecnologias con las que he trabajado y el <strong>Skill</strong> obtenido.
      </h2>
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
      <p-tecnology  title="HTML" progress="70">
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
      <p-tecnology  title="Python" progress="60">
        <img slot="image" src="@/assets/tecnologies/python.jpeg">
      </p-tecnology>
      <p-tecnology  title="Django" progress="60">
        <img slot="image" src="@/assets/tecnologies/django.png">
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
      <p-tecnology  title="Linux" progress="60">
        <img slot="image" src="@/assets/tecnologies/linux.png">
      </p-tecnology>
    </div>
  </section>
</template>

<script>
import PTecnology from '@/components/Tecnology.vue'
export default {
  components: {
    PTecnology
  }
}
</script>
