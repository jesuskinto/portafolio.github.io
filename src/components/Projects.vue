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
            <template slot="date">Oct-2018 - {{$t('present')}}</template>
          </p-project>
        </slide>
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'portafolio')">
            <img slot="image" src="@/assets/projects/portafolio.png">
            <strong slot="title">Portafolio</strong>
            <template slot="type">Portafolio personal</template>
            <template slot="job">Full Stack Developer</template>
            <template slot="date">Jul-2019 - Agost-2019</template>
          </p-project>
        </slide>
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'mascotas')">
            <img slot="image" src="@/assets/projects/mascotas.png">
            <strong slot="title">Mascotas</strong>
            <template slot="type">CRUD de mascotas y dueños</template>
            <template slot="job">Full Stack Developer</template>
            <template slot="date">Apr-2019 - Jul-2019</template>
          </p-project>
        </slide>
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'platzirooms')">
            <img slot="image" src="@/assets/projects/platziMusic.png">
            <strong slot="title">Platzi Rooms</strong>
            <template slot="type">Buscador de Hoteles</template>
            <template slot="job">Frontend Developer</template>
            <template slot="date">Jun-2019 - Jun-2019</template>
          </p-project>
        </slide>
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'platzimusic')">
            <img slot="image" src="@/assets/projects/platziMusic.png">
            <strong slot="title">Platzi Music</strong>
            <template slot="type">Reproducto de musica</template>
            <template slot="job">Frontend Developer</template>
            <template slot="date">May-2019 - Jun-2019</template>
          </p-project>
        </slide>
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'vuetask')">
            <img slot="image" src="@/assets/projects/platziMusic.png">
            <strong slot="title">Vue task</strong>
            <template slot="type">TodoList con conteo de tiempo</template>
            <template slot="job">Frontend Developer</template>
            <template slot="date">May-2019 - Jun-2019</template>
          </p-project>
        </slide>
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'costahomespain')">
            <img slot="image" src="@/assets/projects/costahomespain.png">
            <strong slot="title">CostaHomeSpain</strong>
            <template slot="type">Buscador de casas vacacionales</template>
            <template slot="job">Frontend Developer</template>
            <template slot="date">Sep-2017 - Apr-2018</template>
          </p-project>
        </slide>
        <slide>
          <p-project @projectClicked="$emit('projectClicked', 'pollitoingles')">
            <img slot="image" src="@/assets/projects/pollitoingles.png">
            <strong slot="title">Pollito Ingles</strong>
            <template slot="type">E commerce c2c</template>
            <template slot="job">Frontend Developer</template>
            <template slot="date">Sep-2017 - Apr-2018</template>
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
