<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RootApp',

  computed: {
    vuetifyIsReady (): boolean {
      return !!this.$vuetify.breakpoint.width
    },

    isDesktop (): boolean {
      return this.$vuetify.breakpoint.mdAndUp
    },

    isMobile (): boolean {
      return !this.$vuetify.breakpoint.mdAndUp
    }
  }
})
</script>
