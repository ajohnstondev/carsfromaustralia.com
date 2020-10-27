<template>

  <v-card class="d-flex justify-start" flat tile>

    <v-card
            v-for="brand in brands"
            :key="brand.title"
            class="pa-2 ma-1 text-center"
            outlined hover ripple
            @click="filterCars('brand', brand.title)"
    >
      <v-avatar tile> <v-img :src="brand.img" contain> </v-img></v-avatar>

      <div class="text-center">{{brand.title}}</div>
    </v-card>

  </v-card>


</template>

<script>
  import CarImage from '../CarImage'
  import {brands} from "../../../plugins/const";

  export default {
    name: 'BrandFilter',

    components: {
      CarImage,
    },

    data: () => ({
      brands
    }),

    methods: {
      filterCars(brand, title) {
        this.$store.dispatch('cars/filterCars', { type: 'make', value: title })
      }
    }

  }
</script>
