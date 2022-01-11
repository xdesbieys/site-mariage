<template>
  <PageContent :title="title">
    <LoginForm />
  </PageContent>
</template>

<script>
export default {
  data () {
    return {
      title: 'Galerie photos'
    }
  },
  head () {
    return {
      titleTemplate: '%s - ' + this.title
    }
  }
}
</script>
