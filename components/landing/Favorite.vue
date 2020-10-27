<template>
  <v-btn absolute fab x-small right top @click.self="active = !active">
    <v-icon v-if="!active">mdi-heart-outline</v-icon>
    <v-icon color="red" v-else>mdi-heart</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'FavoriteBtn',

    data: () => ({
      active: false
    })
  }
</script>