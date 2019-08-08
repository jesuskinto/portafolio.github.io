<template>
  <span>{{ seletedWord }}</span>
</template>

<script>
const WORDS = [
  'Alocado',
  'Interesante',
  'Interactivo',
  'Poderoso',
  'Increible',
  'Hermoso',
  'Ligero',
  'Abstracto',
  'Optimo',
  'Rapido',
  'Extraño',
  'Elegante',
  'Freeke',
  'Eficiente',
  ';)',
  '🤓',
  'Nerd',
  '💙'
]
export default {
  data () {
    return {
      seletedWord: ''
    }
  },
  mounted () {
    this.refreshWord()
  },
  methods: {
    wordGererator: () => `${WORDS[Math.floor(Math.random() * WORDS.length)]}!`,
    refreshWord () {
      this.seletedWord = this.wordGererator()
      setTimeout(() => this.refreshWord(), 2000)
    }
  }
}
</script>

<style lang="sass" scoped>
  span
    margin: 0 10px
    font-size: 80px
    animation-duration: 3s
    animation-name: slidein
    animation-iteration-count: infinite
    font-style: normal

  @keyframes slidein
    0%
      color: gray

    50%
      color: white

    100%
      color: gray

</style>
