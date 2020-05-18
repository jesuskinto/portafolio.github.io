<template>
  <div id="email-box">
    <h2 class="subtitle"> {{$t('sent a email to')}}:
      <span>
        <input @click="copyInCLickboard" class="button" id="gmail" type="text" value="jesuskinto@gmail.com" readonly>
        <label for="gmail" style="display: none">Copy email</label>
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'email-box',
  methods: {
    copyInCLickboard () {
      const copyText = document.getElementById('gmail')
      copyText.select()
      document.execCommand('copy')
      alert('Copied the text: ' + copyText.value)
    }
  }
}
</script>

<style lang="sass">
  #gmail
    font-size: 12px
  #email-box
    max-width: 700px
    margin: 0 auto
    transition: width 0.5s ease

    .sent-wrapper
      text-align: center

    &.box-is-sent
      border: "red"
</style>
