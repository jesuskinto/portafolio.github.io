<template>
  <main>
    <section id="tecnologies" class="section">
      <p-tecnologies></p-tecnologies>
    </section>
    <section id="projects" class="section">
      <div class="line top"></div>
      <p-projects></p-projects>
      <div class="line bottom"></div>
    </section>
    <section id="certific" class="section">
      <p-certificates></p-certificates>
    </section>
    <section id="challenges" class="section">
      <div class="line top"></div>
      <p-challenges></p-challenges>
    </section>
    <section id="message" class="section">
      <div class="line top"></div>
      <div class="container">
        <span class="title">{{$t('the web is beautiful')}}, </span>
        <span class="subtitle">
          {{$t('let\'s build something')}}: <p-dinamic-text></p-dinamic-text>
        </span>
      </div>
      <div class="line bottom"></div>
    </section>
    <section id="contact" class="section">
      <p-contact></p-contact>
    </section>
  </main>
</template>

<script>
const PTecnologies = () => import('@/components/Tecnologies.vue')
const PProjects = () => import('@/components/Projects.vue')
const PCertificates = () => import('@/components/Certificates.vue')
const PChallenges = () => import('@/components/Challenges.vue')
const PDinamicText = () => import('@/components/DinamicText.vue')
const PContact = () => import('@/components/Contact.vue')

export default {
  components: {
    PTecnologies,
    PProjects,
    PCertificates,
    PChallenges,
    PDinamicText,
    PContact
  }
}
</script>
