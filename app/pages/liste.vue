<template>
  <PageContent :title="title" />
</template>

<script>
export default {
  data () {
    return {
      title: 'List de mariage'
    }
  },
  head () {
    return {
      titleTemplate: '%s - ' + this.title
    }
  }
}
</script>
