<template>
  <PageContent :title="title">
    <p class="mb-4 text-justify">
      Saisissez votre message, ces informations resteront confidentielles et ne seront transmises à personnes d'autres.
    </p>
    <ContactForm />
  </PageContent>
</template>

<script>
export default {
  data () {
    return {
      title: 'Contact'
    }
  },
  head () {
    return {
      titleTemplate: '%s - ' + this.title
    }
  }
}
</script>
