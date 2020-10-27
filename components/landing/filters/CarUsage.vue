<template>

  <v-card class="d-flex justify-start" flat tile>

    <v-card
            v-for="car in usages"
            :key="car.title"
            class="pa-2 ma-1 text-center"
            outlined hover ripple
            @click="filterCars(car.value)"
    >
      <!--<v-avatar tile> <v-img :src="car.img" contain> </v-img></v-avatar>-->

      <div class="text-center">{{car.title}}</div>
    </v-card>

  </v-card>


</template>

<script>
  import CarImage from '../CarImage'

  export default {
    name: 'UsageFilter',

    components: {
      CarImage,
    },

    data: () => ({
      text: null,
      usages: [
        { title: 'Less than 1 Year', value: 1 },
        { title: '1 to 3 Years Old', value: 2 },
        { title: '4 - 5 Years Old', value: 3 },
        { title: '6 - 8 Years Old', value: 4 },
        { title: '9 - 12 Years Old', value: 5 },
        { title: '13+ Years Old', value: 6 },
        { title: '25+ Years Old', value: 7 },
      ]
    }),

    methods: {
      filterCars(val) {
        this.$store.dispatch('cars/filterCars', { type: 'year', value: val })
      }
    }

  }
</script>
