<template>
  <header class="hero is-info is-large is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <span>JesusKinto</span>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item">
                Lang
              </a>
              <span class="navbar-item">
                <a class="button is-info is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
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
        <p class="title">
          JesusKinto
        </p>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              <a>Tecnologies</a>
            </li>
            <li
              :class="{'is-active': isActive('proyects')}"
              v-scroll-to="'#proyects'"
              @click="activate('proyects')">
              <a>Proyects</a>
            </li>
            <li
              :class="{'is-active': isActive('certific')}"
              v-scroll-to="'#certific'"
              @click="activate('certific')">
              <a>Certific</a>
            </li>
            <li
              :class="{'is-active': isActive('contact')}"
              v-scroll-to="{ el: '#contact', offset: -50,}"
              @click="activate('contact')">
              <a>Contact</a>
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
      active: 'tecnologies'
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

<style scoped lang="sass">
.is-h100
  height: 100vh
</style>
