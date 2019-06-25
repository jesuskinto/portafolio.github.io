<template>
  <div id="email-box">
    <h2 class="subtitle"> Sent a email </h2>
    <div class="box" :class="{'box-is-sent': isSent }">
      <div v-show="!isSent">
        <form @submit.prevent="send">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="form.email"
                class="input" type="email" placeholder="email" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <input
                v-model="form.subject"
                class="input" type="text"
                placeholder="Hi!, let's build something beautiful" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                v-model="form.message"
                class="textarea" placeholder="Message...." required></textarea>
            </div>
          </div>
          <button class="button" :class="{'is-loading is-warning': isSending}">
            <span class="icon"> 🛫 </span>
            <span>Send</span>
          </button>
        </form>
      </div>
      <div class="sent-wrapper" v-show="isSent">
        <p><strong>Gracias!</strong></p>
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

      this.state = 'sending'
      setTimeout(() => {
        this.sent()
      }, 3000)
    },

    sent () {
      this.state = 'sent'
      this.form = {}
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
