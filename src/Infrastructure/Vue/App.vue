<template>
  <template-store>
    <router-view />
  </template-store>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    TemplateStore: defineAsyncComponent(() =>
      import('Components/Templates/TemplateStore.vue')
    )
  }
})
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
