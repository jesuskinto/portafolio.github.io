<template>
  <main>
    <section id="tecnologies" class="section">
      <p-tecnologies></p-tecnologies>
    </section>
    <hr>
    <section id="projects" class="section">
      <p-projects @projectClicked="$emit('showModal', $event)"></p-projects>
    </section>
    <hr>
    <section id="certific" class="section">
      <p-certificates></p-certificates>
    </section>
    <section id="message" class="section">
      <div class="container">
        <i class="title">{{$t('the web is beautiful')}}, </i>
        <i class="subtitle">
          {{$t('let\'s build something')}}: <p-dinamic-text></p-dinamic-text>
        </i>
      </div>
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
const PDinamicText = () => import('@/components/DinamicText.vue')
const PContact = () => import('@/components/Contact.vue')

export default {
  components: {
    PTecnologies,
    PProjects,
    PCertificates,
    PDinamicText,
    PContact
  }
}
</script>

<style lang="sass">
.social a
  color: white !important
  margin-bottom: 15px

.twitter
  background: #4486F7 !important

.facebook
  background: #5545B6 !important

.linkedin
  background: #293B4B !important

.instagram
  background: #FBCC48 !important

.github
  background: #24282E !important

.platzi
  background: #82DE32 !important

#gmail
  background: #E43426 !important
  color: white !important
</style>
