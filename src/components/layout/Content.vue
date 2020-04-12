<template>
  <main>
    <section id="tecnologies" class="section">
      <p-tecnologies></p-tecnologies>
    </section>
    <section id="projects" class="section">
      <div class="line top"></div>
      <p-projects @projectClicked="$emit('showModal', $event)"></p-projects>
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

<style lang="sass">
.social a
  color: white !important
  margin-bottom: 15px

.twitter
  background: #1da1f2 !important

.facebook
  background: #3578E5 !important

.linkedin
  background: #293B4B !important

.instagram
  background: #FBCC48 !important

.github
  background: #24282E !important

.platzi
  background: #82DE32 !important

.whatsapp
  background: #1ebea5 !important

.codepen
  background: #24282E !important

#gmail
  background: #E43426 !important
  color: white !important

#tecnologies
  padding-bottom: 150px

#projects
  position: relative
  background: #f0f0f0
  .line
    height: 80px
    width: 130%
    background: #f0f0f0
    -webkit-transform: rotate(-2deg)
    transform: rotate(-2deg)
    position: absolute
    z-index: -1
    left: -14px

  .top
    top: -59px

#certific
  padding-top: 150px

#challenges
  background-color: #7c7c7c
  position: relative
  .line
    height: 80px
    width: 130%
    background: #7c7c7c
    position: absolute
    z-index: -1
    left: -14px

  .top
    top: -78px
    height: 180px
    transform: rotate(2deg)

#message
  position: relative
  .line
    height: 80px
    width: 130%
    background: #363636
    position: absolute
    z-index: -1
    left: -14px

  .top
    top: -78px
    height: 180px
    -webkit-transform: rotate(-4deg)
    transform: rotate(-3deg)
    z-index: 1

  .top
    bottom: 85px

#contact
  padding-top: 150px
  padding-bottom: 150px

</style>
