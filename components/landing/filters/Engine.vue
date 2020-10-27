<template>

  <v-card class="d-flex justify-start" flat tile>

    <v-card
            v-for="car in engines"
            :key="car.title"
            class="pa-2 ma-1 text-center"
            outlined hover ripple
            @click="filterCars(car.value)"
    >

      <div class="text-center">{{car.title}}</div>
    </v-card>

  </v-card>


</template>

<script>
  import CarImage from '../CarImage'

  export default {
    name: 'EngineFilter',

    components: {
      CarImage,
    },

    data: () => ({
      text: null,
      engines: [
        { title: 'Under 1600cc', value: 1 },
        { title: 'Under 1800cc', value: 2 },
        { title: 'Under 2000cc', value: 3 },
        { title: 'Under 2500cc', value: 4 },
        { title: 'Under 3000cc', value: 5 },
        { title: 'Under 4500cc', value: 6 },
        { title: 'All', value: 7 },
      ]
    }),

    methods: {
      filterCars(val) {
        this.$store.dispatch('cars/filterCars', { type: 'engine_size', value: val })
      }
    }

  }
</script>
