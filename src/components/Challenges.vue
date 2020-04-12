<template>
  <div class="container">
    <h1 class="title">📚 {{ $t('challenges')}}</h1>
    <h2 class="subtitle">
      {{ $t('challenges-message')}}
    </h2>
    <div class="columns">
      <div class="column">
        <iframe
          scrolling="no"
          title="Clock"
          src="https://codepen.io/jesuskinto/embed/LYpYYXO?height=265&theme-id=light"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/jesuskinto/pen/LYpYYXO">Clock</a> by Quinto Jesús
          (
          <a href="https://codepen.io/jesuskinto">@jesuskinto</a>) on
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
      <div class="column">
        <iframe
          scrolling="no"
          title="Sliders"
          src="https://codepen.io/jesuskinto/embed/gOapmMj?height=265&theme-id=light"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          loading="lazy"
        >
          See the Pen
          <a href="https://codepen.io/jesuskinto/pen/gOapmMj">Sliders</a> by Quinto Jesús
          (
          <a href="https://codepen.io/jesuskinto">@jesuskinto</a>) on
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
    </div>
    <div class="button-wrapper">
      <a class="button more" href="https://codepen.io/jesuskinto/" target="_blank">
        <span>Ver Mas</span>
      </a>
    </div>
  </div>
</template>

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
  text-align: center
  position: absolute
  botton: -20px
  left: 46.5%
</style>
