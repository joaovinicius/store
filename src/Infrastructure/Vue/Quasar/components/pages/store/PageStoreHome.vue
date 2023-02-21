<template>
  <div>
    <h1>PageStoreHome</h1>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    console.log(
      this.$axios.get('api/store/home'),
      this.$store,
      this.$router,
      this.$route,
      this.$q
    )
  }
}
</script>

<style scoped>

</style>