<template>
  <span>{{ $t(seletedWord) }}!</span>
</template>

<script>
const WORDS = [
  'crazy',
  'interesting',
  'interactive',
  'powerful',
  'amazing',
  'beautiful',
  'light',
  'abstract',
  'optimum',
  'quick',
  'strange',
  'elegant',
  'geek',
  'efficient',
  'nerd'
]
export default {
  data () {
    return {
      seletedWord: '',
      counter: Math.floor(Math.random() * WORDS.length)
    }
  },
  mounted () {
    this.refreshWord()
  },
  methods: {
    refreshCounter () {
      if (this.counter === WORDS.length - 1) {
        this.counter = 0
      } else {
        this.counter += 1
      }
    },
    wordGererator () {
      const counter = this.counter
      this.refreshCounter()
      return WORDS[counter]
    },
    refreshWord () {
      this.seletedWord = this.wordGererator()
      setTimeout(() => this.refreshWord(), 2500)
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
