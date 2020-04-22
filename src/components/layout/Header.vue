<template>
  <header class="hero is-info is-small">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <span>JesusKinto</span>
            </a>
            <span class="navbar-burger burger"
              data-target="navbarMenuHeroB"
              @click="showMenu = !showMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu" :class="{'is-active': showMenu }">
            <div class="navbar-end">
              <div class="dropdown" :class="{'is-active': showLanguage}">
                <a class="navbar-item" aria-haspopup="true"
                  aria-controls="dropdown-menu" @click="showLanguage = !showLanguage">
                  {{ $t('lang') }}
                </a>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a @click="changeLang('es')" class="dropdown-item"
                      :class="{'is-active': this.$i18n.locale == 'es'}">
                      {{ $t('spanish') }}
                    </a>
                    <a @click="changeLang('en')" class="dropdown-item"
                      :class="{'is-active': this.$i18n.locale == 'en'}">
                      {{ $t('english') }}
                    </a>
                  </div>
                </div>
              </div>
              <span class="navbar-item">
                <a href="https://github.com/jesuskinto" target="_blanck" class="button is-info is-inverted">
                  <span>Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="wrapper-image">
          <figure class="image is-1by1">
            <img src="@/assets/avatar.jpeg">
          </figure>
        </div>
        <p class="title">
          JesusKinto
        </p>
        <p class="subtitle">
          <strong>potterFilia | Javacript FullStack | Python FullStack | codeFilia</strong>
          <br>
          Full Stack Developer | Ingenieria de Sistemas ULA VE | Estudiante de Platzi
          <br>
          {{ $t('experience-message') }}
          <br>
          <br>
          <strong>😎</strong> = <strong>🐍</strong>Python + <strong>🤖</strong>Javascript
          <br>
          <br>
        </p>
      </div>
    </div>

    <div id="tabs" class="hero-foot hero is-info">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li v-scroll-to="{ el: '#tecnologies'}">
              <a>{{$t('tecnologies')}}</a>
            </li>
            <li v-scroll-to="'#projects'">
              <a>{{$t('projects')}}</a>
            </li>
            <li v-scroll-to="'#certific'">
              <a>{{$t('certific')}}</a>
            </li>
            <li v-scroll-to="'#challenges'">
              <a>{{$t('challenges')}}</a>
            </li>
            <li v-scroll-to="{ el: '#contact'}">
              <a>{{$t('contact')}}</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="line hero is-info"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showMenu: false,
      showLanguage: false
    }
  },
  methods: {
    changeLang (lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
      this.showLanguage = false
    }
  }
}
</script>

<style lang="sass" scoped>
header
  margin-bottom: 90px
  position: relative

.tabs
  bottom: -10px
  position: relative
  margin-bottom: 0 !important

.wrapper-image
  display: inline-block
  width: 200px
  border-radius: 150px
  overflow: hidden
.title
  margin-bottom: 35px
.container a
  font-weight: 600

.line
  height: 80px
  width: 110%
  transform: rotate(-1deg)
  position: absolute
  z-index: -1
  left: -2px
  bottom: -12px
</style>
