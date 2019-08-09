<template>
  <main>
    <p-tecnologies></p-tecnologies>
    <hr>
    <p-projects @projectClicked="$emit('showModal', $event)"></p-projects>
    <hr>
    <p-certificates></p-certificates>
    <section id="message" class="section">
      <div class="container">
        <i class="title">{{$t('the web is beautiful')}}, </i>
        <i class="subtitle">
          {{$t('let\'s build something')}}: <p-dinamic-text></p-dinamic-text>
        </i>
      </div>
    </section>
    <p-contact></p-contact>
  </main>
</template>

<script>
import PTecnologies from '@/components/Tecnologies.vue'
import PProjects from '@/components/Projects.vue'
import PCertificates from '@/components/Certificates.vue'
import PDinamicText from '@/components/DinamicText.vue'
import PContact from '@/components/Contact.vue'

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
