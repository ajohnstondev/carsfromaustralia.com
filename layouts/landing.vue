<template>
  <v-app>

    <Header/>

    <v-main>

      <nuxt></nuxt>

    </v-main>

  </v-app>
</template>

<script>
  import Header from '~/components/landing/Header'

  export default {
    data: () => ({

    }),

    components: {
      Header
    }
  }
</script>

<style>
  .v-application { font-family: Poppins, sans-serif !important; }
   .v-btn:focus { outline:0; }
</style>
