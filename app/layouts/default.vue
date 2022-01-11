<template>
  <div class="flex-1 flex flex-col m-3">
    <Header class="bg-wood-500 text-wood-200 rounded-lg shadow-around p-3" />
    <Nav class="absolute top-0 left-0" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'text-default text-shadow bg-wood-600 font-serif text-xl' + (this.$store.state.overlayShown ? ' overflow-hidden' : '')
      }
    }
  }
}
</script>
