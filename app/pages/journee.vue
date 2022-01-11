<template>
  <PageContent :title="title">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.544616440965!2d-0.9191443640843678!3d44.211247351652624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5468373c888dfd%3A0x50119bd2f591749d!2sMairie%20de%20Labouheyre!5e0!3m2!1sfr!2sfr!4v1599390223088!5m2!1sfr!2sfr"
      width="100%"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
      class="h-84 rounded shadow-around"
    />
  </PageContent>
</template>

<script>
export default {
  data () {
    return {
      title: 'Le déroulé de la journée'
    }
  }
}
</script>
