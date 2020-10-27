<template>

  <v-card class="d-flex justify-start" flat tile>

    <v-card
            v-for="bodyType in bodyTypes"
            :key="bodyType.title"
            class="pa-2 ma-1 text-center"
            outlined hover ripple
            @click="filterCars('brand', bodyType.title)"
    >
      <!--<v-avatar tile> <v-img :src="car.img" contain> </v-img></v-avatar>-->

      <div class="text-center">{{bodyType.title}}</div>
    </v-card>

  </v-card>


</template>

<script>
  import {bodyTypes} from '../../../plugins/const'
  import CarImage from '../CarImage'

  export default {
    name: 'BodyFilter',

    components: {
      CarImage,
    },

    data: () => ({
      bodyTypes,
    }),

    methods: {
      filterCars(brand, title) {
        this.$store.dispatch('cars/filterCars', { type: 'body_type', value: title })
      }
    }

  }
</script>
