<script lang="ts">
import Vue from 'vue'
import { RawLocation } from 'vue-router'

export default Vue.extend({
  computed: {
    currentRouteBaseName (): string {
      return this.getRouteBaseName() || ''
    }
  },

  methods: {
    goTo (localePath: RawLocation): void {
      this.$router.push(this.localePath(localePath))
    }
  }
})
</script>
