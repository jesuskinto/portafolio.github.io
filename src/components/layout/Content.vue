<template>
  <main>
    <!-- <section id="bio" class="section">
      <p-bio></p-bio>
    </section> -->
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
          {{$t('let\'s build something')}}:
        </span>
        <p-dinamic-text></p-dinamic-text>
      </div>
      <div class="line bottom"></div>
    </section>
    <section id="contact" class="section">
      <p-contact></p-contact>
    </section>
  </main>
</template>

<script>
// const PBio = () => import('@/components/Bio.vue')
const PTecnologies = () => import('@/components/Tecnologies.vue')
const PProjects = () => import('@/components/Projects.vue')
const PCertificates = () => import('@/components/Certificates.vue')
const PChallenges = () => import('@/components/Challenges.vue')
const PDinamicText = () => import('@/components/DinamicText.vue')
const PContact = () => import('@/components/Contact.vue')

export default {
  components: {
    // PBio,
    PTecnologies,
    PProjects,
    PCertificates,
    PChallenges,
    PDinamicText,
    PContact
  }
}
</script>
