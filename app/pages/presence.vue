<template>
  <PageContent :title="title">
    <p class="mb-4 text-justify">
      Saisissez vos informations, elles resteront confidentielles et ne seront transmises à personnes d'autres.
    </p>
    <PresenceForm />
  </PageContent>
</template>

<script>
export default {
  data () {
    return {
      title: 'Je confirme ma présence'
    }
  },
  head () {
    return {
      titleTemplate: '%s - ' + this.title
    }
  }
}
</script>
