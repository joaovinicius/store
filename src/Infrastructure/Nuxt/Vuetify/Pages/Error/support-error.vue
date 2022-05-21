<template>
  <div class="container fill-height pa-0 container--fluid content-center">
    <container v-if="!isUnsupportedUserAgent">
      <div class="d-grid h-100">
        <h1 v-if="isCookieError" class="text--error align-self-center">
          {{ errorMessage }}
        </h1>

        <button-default
          label="label.clickAndLogin"
          @click="backToLogin"
        />
      </div>
    </container>
    <unsupported-user-agent v-if="isUnsupportedUserAgent" />
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import App from '../../Root/App.vue'
import Container from '../../Components/Shared/Authentication/Container.vue'
import ButtonDefault from '../../Components/Base/AForm/AFormButtonDefault.vue'
import UnsupportedUserAgent from './unsupported-user-agent.vue'

export default App.extend({
  name: 'SupportError',

  components: {
    UnsupportedUserAgent,
    ButtonDefault,
    Container
  },

  computed: {
    ...mapGetters(['supportError']),

    isCookieError () {
      return this.supportError === 'cookieDisabled'
    },

    isUnsupportedUserAgent () {
      return this.supportError === 'unsupportedUserAgent'
    },

    errorMessage ():string {
      return this.translate(`errors.${this.supportError}`)
    }
  },

  created () {
    if (!this.supportError) { return this.goTo('index') }
  },

  methods: {
    backToLogin (): void {
      this.goTo('index')
    }
  }
})
</script>
<style lang="scss" scoped>
.d-grid {
  display: grid;
}

.h-100 {
  height: 100%;
}

.content-center {
  place-content: center;
}
</style>
