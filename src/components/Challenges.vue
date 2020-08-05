<template>
  <div class="container">
    <h1 class="title"># {{ $t('challenges')}}</h1>
    <h2 class="subtitle">{{ $t('challenges-message')}}</h2>
    <div class="columns is-multiline">
      <div v-for="r in results" :key="r" class="column is-6">
        <iframe data-aos="fade"
          scrolling="no"
          title="Clock"
          :src="`https://codepen.io/jesuskinto/embed/preview/${r}?height=265&theme-id=light`"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen
          <a :href="`https://codepen.io/jesuskinto/pen/${r}`">Clock</a> by Quinto Jesús
          (
          <a href="https://codepen.io/jesuskinto">@jesuskinto</a>) on
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
    </div>
    <div class="button-wrapper">
      <a class="button more" href="https://codepen.io/jesuskinto/" target="_blank" rel="noopener">
        <span>Ver Mas</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      results: [
        'LYGwMyd',
        'xxwPzqO',
        'eYpVZpb',
        'qBOXXWE',
        'LYpYYXO',
        'gOapmMj',
        'wvKGrwE',
        'eYpBZvX',
        'ZEbVWaz'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  z-index: 3

.title, .subtitle
  color: white

.column
  height: 350px
  margin-bottom: 25px

iframe
  width: 100%
  height: 350px !important

.button-wrapper
  height: 0
  text-align: center
  position: relative
  top: 20px
</style>

