<template>
  <v-app>
    <div class="d-flex align-center">
      <v-img
        src="https://media.publit.io/file/icon-N.png"
        height="64"
        max-width="125"
        contain
      ></v-img>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <div class="d-flex">
      <v-select class='mt-6 w-40' :items="regions" solo flat label="Apia/Samoa"></v-select>
      <a class='mt-9 mr-6'>HOW TO BUY</a>
      </div>
    </div>
    <v-container fill-height fluid>
      <nuxt></nuxt>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Cars from Australia',
      regions: [
        'Apia/Samoa',
        'Los Angles/Califonia'
      ]
    }
  },
}
</script>