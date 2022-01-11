<template>
  <PageContent :title="title">
    <img class="m-auto rounded shadow-around mb-3" src="/nous.webp" alt="C'est nous">
    <p class="text-2xl text-center">
      Le mariage aura lieu le :<br>
      {{ date.toLocaleString() }}<br>
      C'est dans
    </p>
    <FlipCountdown :end="date" />
    <p class="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </PageContent>
</template>

<script>
export default {
  data () {
    return {
      title: 'Accueil',
      date: new Date('2021-07-11T15:00:00+02:00')
    }
  },
  head () {
    return {
      titleTemplate: '%s - ' + this.title
    }
  }
}
</script>
