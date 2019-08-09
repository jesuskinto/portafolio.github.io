<template>
  <div id="email-box">
    <h2 class="subtitle"> {{$t('sent a email to')}}:
      <span>
        <input @click="copyInCLickboard" class="button" id="gmail" type="text" value="jesuskinto@gmail.com" readonly>
      </span>
    </h2>
    <div class="box" :class="{'box-is-sent': isSent }">
      <div v-show="!isSent">
        <form @submit.prevent="send">
          <div class="field">
            <label class="label">{{$t('email')}}</label>
            <div class="control">
              <input
                v-model="form.email"
                class="input" type="email" :placeholder="$t('you_email.com')" required>
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('subject')}}</label>
            <div class="control">
              <input
                v-model="form.subject"
                class="input" type="text"
                :placeholder="$t('hi_cracy')">
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('message')}}</label>
            <div class="control">
              <textarea
                v-model="form.message"
                class="textarea" :placeholder="$t('message') + '....'" required></textarea>
            </div>
          </div>
          <button class="button" :class="{'is-loading is-warning': isSending}">
            <span class="icon"> 🛫 </span>
            <span>{{$t('send')}}</span>
          </button>
        </form>
      </div>
      <div class="sent-wrapper" v-show="isSent">
        <p><strong>{{$t('thanks')}}!</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'email-box',

  data () {
    return {
      form: {
        email: '',
        subject: '',
        message: ''
      },
      state: 'send'
    }
  },

  computed: {
    isSending () {
      return this.state === 'sending'
    },

    isSent () {
      return this.state === 'sent'
    },

    isSend () {
      return this.state === 'send'
    }
  },

  methods: {
    send () {
      if (this.isSent) { return }
      if (this.form.email == 'jesuskinto@gmail.com') { return }
      this.state = 'sending'
      setTimeout(() => {
        this.sent()
      }, 3000)
    },

    sent () {
      this.state = 'sent'
      this.form = {}
    },

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
  #email-box
    max-width: 700px
    margin: 0 auto
    transition: width 0.5s ease

    .sent-wrapper
      text-align: center

    &.box-is-sent
      border: "red"
</style>
