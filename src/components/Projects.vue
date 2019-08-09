<template>
  <section id="projects" class="section">
    <div class="container">
      <h1 class="title">📚 {{ $t('projects')}}</h1>
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
      <carousel
        :navigationEnabled="true"
        :perPageCustom="[[768, 1], [1024, 3], [1216, 4]]">
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'crediuno')">
            <img slot="image" src="@/assets/projects/crediuno.png">
            <strong slot="title">Crediuno</strong>
            <p slot="type"><strong>Type: </strong>Plataforma de creditos</p>
            <p slot="job"><strong> Cargo: </strong>Full Stack Developer</p>
          </p-project>
        </slide>
        <slide>
          <p-project>
            <img slot="image" src="@/assets/projects/portafolio.png">
            <strong slot="title">Portafolio</strong>
            <p slot="type"><strong>Type: </strong>Portafolio personal</p>
            <p slot="job"><strong> Cargo: </strong>Full Stack Developer</p>
          </p-project>
        </slide>
        <slide>
          <p-project>
            <img slot="image" src="@/assets/projects/mascotas.png">
            <strong slot="title">Mascotas</strong>
            <p slot="type"><strong>Type: </strong>CRUD de mascotas y dueños</p>
            <p slot="job"><strong> Cargo: </strong>Full Stack Developer</p>
          </p-project>
        </slide>
        <slide>
          <p-project>
            <img slot="image" src="@/assets/projects/platziMusic.png">
            <strong slot="title">Platzi Music</strong>
            <p slot="type"><strong>Type: </strong>Reproducto de musica</p>
            <p slot="job"><strong> Cargo: </strong>Frontend Developer</p>
          </p-project>
        </slide>
        <slide>
          <p-project>
            <img slot="image" src="@/assets/projects/pollitoIngles.png">
            <strong slot="title">Pollito Ingles</strong>
            <p slot="type"><strong>Type: </strong>E commerce c2c</p>
            <p slot="job"><strong> Cargo: </strong>Frontend Developer</p>
          </p-project>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import PProject from '@/components/Project.vue'
export default {
  components: {
    PProject
  }
}
</script>
