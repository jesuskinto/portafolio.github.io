<template>
  <header class="hero is-info is-medium is-bold">
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
            <img src="@/assets/avatar.jpg">
          </figure>
        </div>
        <p class="title">
          JesusKinto
        </p>
        <p class="subtitle">
          <strong>potterFilia | platziFilia | codeFilia</strong>
          <br>
          Full Stack Developer | Ingenieria de Sistemas ULA VE | Estudiante de Platzi
          <br>
          Cuatro años de experiencia en la industria  TI, amante del sofware lejible y escalable
          <br>
          aprendiendo todos los dias
          <br>
          <br>
          <strong>😎</strong> = <strong>🐍</strong>Python + <strong>🤖</strong>Javascript
        </p>
      </div>
    </div>

    <div id="tabs" class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li
              :class="{'is-active': isActive('tecnologies')}"
              v-scroll-to="{ el: '#tecnologies', offset: -50,}"
              @click="activate('tecnologies')">
              <a>{{$t('tecnologies')}}</a>
            </li>
            <li
              :class="{'is-active': isActive('projects')}"
              v-scroll-to="'#projects'"
              @click="activate('projects')">
              <a>{{$t('projects')}}</a>
            </li>
            <li
              :class="{'is-active': isActive('certific')}"
              v-scroll-to="'#certific'"
              @click="activate('certific')">
              <a>{{$t('certific')}}</a>
            </li>
            <li
              :class="{'is-active': isActive('contact')}"
              v-scroll-to="{ el: '#contact', offset: -50,}"
              @click="activate('contact')">
                <a>{{$t('contact')}}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      active: 'tecnologies',
      showMenu: false,
      showLanguage: false
    }
  },
  props: {
    activated: {
      type: String,
      default: 'tecnologies',
      required: true
    }
  },
  methods: {
    isActive (nameSection) {
      return this.active === nameSection
    },
    activate (nameSection) {
      this.active = nameSection
    },
    changeLang (lang) {
      this.$i18n.locale = lang
      this.showLanguage = false
    }
  },
  watch: {
    activated: function (newValue, oldValue) {
      if (newValue === oldValue) return

      this.active = newValue
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper-image
  display: inline-block
  width: 200px
  border: solid 5px white
  border-radius: 150px
  overflow: hidden
.title
  margin-bottom: 35px
.container a
  font-weight: 600
</style>
