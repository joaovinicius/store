<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    pushAlert (alert: IAlert): void {
      this.$store.dispatch('pushAlert', alert)
    },

    pushAlertSuccess (message: string, title?: string, counter?: number): void {
      const messageText = this.translate(message, counter)
      const titleText = (title) ? this.translate(title, counter) : title
      this.pushAlert({
        message: messageText,
        title: titleText,
        type: 'success'
      })
    },

    pushAlertError (message: string, title?: string, counter?: number): void {
      const messageText = this.translate(message, counter)
      const titleText = (title) ? this.translate(title, counter) : title
      this.pushAlert({
        message: messageText,
        title: titleText,
        type: 'error'
      })
    },

    pushAlertWarning (message: string, title?: string, counter?: number): void {
      const messageText = this.translate(message, counter)
      const titleText = (title) ? this.translate(title, counter) : title
      this.pushAlert({
        message: messageText,
        title: titleText,
        type: 'warning'
      })
    },

    pushAlertInfo (message: string, title?: string, counter?: number): void {
      const messageText = this.translate(message, counter)
      const titleText = (title) ? this.translate(title, counter) : title
      this.pushAlert({
        message: messageText,
        title: titleText,
        type: 'info'
      })
    }
  }
})
</script>
