<template>
  <div class="d-grid justify-items-center h-100" :class="{'grid-mobile': isMobile }">
    <img
      class="m-auto"
      src="../../../../../Assets/images/abler-default.svg"
      alt="Abler Recrutamento"
    >

    <img
      class="not-found"
      src="../../../../../Assets/images/500.svg"
      alt="error"
    >

    <h1 class="primary--text">
      {{ $t('label.errorFoundTitle') }}
    </h1>

    <p class="text-center">
      {{ $t('label.errorFound') }}
    </p>

    <v-btn :to="localePath('dashboard')" outlined rounded class="bordered-primary">
      <span class="primary--text text-uppercase">
        {{ $t('label.backToHome') }}
      </span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InternalServerError'
})
</script>

<style lang="scss" scoped>
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

  .not-found {
    width: 400px;
    max-width: 80%;
  }

  h1 {
    font-size: 3em;
  }

  p,h1 {
    font-family: 'Roboto', sans-serif !important;
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
