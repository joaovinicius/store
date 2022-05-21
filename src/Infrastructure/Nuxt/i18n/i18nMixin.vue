<script lang="ts">
import Vue from 'vue'
import { RawLocation } from 'vue-router'

export default Vue.extend({
  methods: {
    translate (key: string, counter?: number): string {
      return (typeof counter !== 'undefined') ? this.$tc(key, counter) as string : this.$t(key) as string
    }
  }
})
</script>
