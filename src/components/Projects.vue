<template>
  <section id="projects" class="section">
    <div class="container">
      <h1 class="title">📚 {{ $t('projects')}}</h1>
      <h2 class="subtitle">
        Sientete libre de recorrerlos. <strong>Toda sugerencia es bienvenida</strong>:
      </h2>
    </div>
    <div class="container pproyect">
      <carousel
        :navigationEnabled="true"
        :perPageCustom="[[768, 1], [1024, 3], [1216, 4]]">
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'crediuno')">
            <img slot="image" src="@/assets/projects/crediuno.png">
            <strong slot="title">Crediuno</strong>
            <template slot="type">Plataforma de creditos</template>
            <template slot="job">Full Stack Developer</template>
            <template slot="date">oct-2018 - {{$t('present')}}</template>
          </p-project>
        </slide>
        <slide>
          <p-project>
            <img slot="image" src="@/assets/projects/portafolio.png">
            <strong slot="title">Portafolio</strong>
            <template slot="type">Portafolio personal</template>
            <template slot="job">Full Stack Developer</template>
            <template slot="date">jul-2019 - agost-2019</template>
          </p-project>
        </slide>
        <slide>
          <p-project>
            <img slot="image" src="@/assets/projects/mascotas.png">
            <strong slot="title">Mascotas</strong>
            <template slot="type">CRUD de mascotas y dueños</template>
            <template slot="job">Full Stack Developer</template>
          </p-project>
        </slide>
        <slide>
          <p-project>
            <img slot="image" src="@/assets/projects/platziMusic.png">
            <strong slot="title">Platzi Music</strong>
            <template slot="type">Reproducto de musica</template>
            <template slot="job">Frontend Developer</template>
          </p-project>
        </slide>
        <slide>
          <p-project>
            <img slot="image" src="@/assets/projects/pollitoIngles.png">
            <strong slot="title">Pollito Ingles</strong>
            <template slot="type">E commerce c2c</template>
            <template slot="job">Frontend Developer</template>
          </p-project>
        </slide>
      </carousel>
      <p>
        Creo fielmente que un buen desarrollador debe
        dedicar tiempo a proyectos personales,
        a crecer cada dia con desafios,
        a refactorizar su codigo,
        a dejar volar su imaginacion.
        <i>
          "Un buen programador no nace;
          se construye dia a dia con su propio codigo".
        </i>
      </p>
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
