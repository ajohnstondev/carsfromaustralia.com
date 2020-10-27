<template>

  <v-card class="d-flex justify-start" flat tile>

    <v-card
            v-for="car in milages"
            :key="car.title"
            class="pa-2 ma-1 text-center"
            outlined hover ripple
            @click="filterCars(car.value, car.operator)"
    >
      <div class="text-center">{{car.title}}</div>
    </v-card>

  </v-card>


</template>

<script>
  import CarImage from '../CarImage'

  export default {
    name: 'MilageFilter',

    components: {
      CarImage,
    },

    data: () => ({
      text: null,
      milages: [
        { title: 'Less than 10,000', value: 10000, operator: '<' },
        { title: 'Less than 50,000', value: 50000, operator: '<' },
        { title: 'Less than 80,000', value: 80000, operator: '<' },
        { title: 'Less than 100,000', value: 100000, operator: '<' },
        { title: 'Less than 150,000', value: 150000, operator: '<' },
        { title: 'Less than 200,000', value: 200000, operator: '<' },
        { title: 'Less than 300,000', value: 300000, operator: '<' },

      ]
    }),

    methods: {
      filterCars(value, op) {
        this.$store.dispatch('cars/filterCars', { type: 'odometer', value: value, op: op })
      }
    }

  }
</script>
