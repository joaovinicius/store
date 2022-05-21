<template>
  <div class="d-grid justify-items-center h-100 unsupported-content" :class="{'grid-mobile': isMobile }">
    <img
      class="m-auto"
      src="../../../../../Assets/images/abler-default.svg"
      alt="Abler Recrutamento"
    >

    <img
      class="unsupported"
      src="../../../../../Assets/images/old-browser.svg"
      alt="error"
    >

    <h1 class="primary--text">
      Hmm
    </h1>

    <p class="text-center">
      {{ $t('errors.unsupportedUserAgent') }}
    </p>

    <div class="d-flex w-100 justify-content-space-around">
      <a
        class="d-grid justify-items-center info--text text--darken-2"
        href="https://www.google.com/intl/pt-BR/chrome/"
        target="_blank"
      >
        <img src="../../../../../Assets/images/icon-chrome.svg" alt="chrome">

        <span>
          {{ translate('label.downloadNow') }}
          <v-icon class="ml-1 info--text text--darken-2" small>
            mdi-cloud-download
          </v-icon>
        </span>
      </a>
      <a
        class="d-grid justify-items-center info--text text--darken-2"
        href="https://www.mozilla.org/pt-BR/firefox/new/"
        target="_blank"
      >
        <img src="../../../../../Assets/images/icon-firefox.svg" alt="firefox">

        <span>
          {{ translate('label.downloadNow') }}
          <v-icon class="ml-1 info--text text--darken-2" small>
            mdi-cloud-download
          </v-icon>
        </span>
      </a>
      <a
        class="d-grid justify-items-center info--text text--darken-2"
        href="https://www.microsoft.com/pt-br/edge"
        target="_blank"
      >
        <img src="../../../../../Assets/images/icon-edge.svg" alt="edge">
        <span>
          {{ translate('label.downloadNow') }}
          <v-icon class="ml-1 info--text text--darken-2" small>
            mdi-cloud-download
          </v-icon>
        </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import App from '../../Root/App.vue'
export default App.extend({
  name: 'UnsupportedUserAgent'
})
</script>

<style lang="scss" scoped>
.justify-content-space-around {
  justify-content: space-around;
}
.w-100 {
  width: 100%;
}
.d-grid {
  display: grid;
  grid-template-rows: auto;

  img:first-of-type {
    max-width: 120px;
  }

  .m-auto {
    margin: auto;
  }

  .bordered-primary {
    border-color: var(--v-primary-base) !important;
  }

  .unsupported {
    width: 400px;
    max-width: 80%;
  }

  &.unsupported-content {
    grid-template-rows: .3fr .25fr .2fr .2fr .3fr;
  }

  h1 {
    font-size: 3em;
  }

  p,h1,a,span {
    font-family: 'Roboto', sans-serif !important;
    text-decoration: none;
  }
}

.grid-mobile {
  grid-template-rows: auto;
}

.justify-items-center {
  justify-items: center;
}

.h-100 {
  height: 100%;
}
</style>
