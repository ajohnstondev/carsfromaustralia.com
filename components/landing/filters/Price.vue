<template>

  <v-card class="d-flex justify-start" flat tile>

    <!--<v-btn-toggle-->
            <!--v-model="text"-->
            <!--tile-->
            <!--color="primary"-->
            <!--group-->
    <!--&gt;-->
      <!--<template v-for="price in prices">-->
        <!--<v-btn :value="price.value">-->
          <!--{{price.title}}-->
        <!--</v-btn>-->
      <!--</template>-->


    <!--</v-btn-toggle>-->
    <v-card
            v-for="(price, i) in prices"
            :key="price.title"
            class="pa-2 ma-1 text-center"
            outlined hover ripple
            @click="filterCars(price.value)"
    >
      <!--<v-avatar tile> <v-img :src="car.img" contain> </v-img></v-avatar>-->

      <div class="text-center">{{price.title}}</div>
    </v-card>

  </v-card>


</template>

<script>
  import CarImage from '../CarImage'

  export default {
    name: 'PriceFilter',

    components: {
      CarImage,
    },

    data: () => ({
      text: null,
      prices: [
        { title: 'Under US $1,000', value:  1},
        { title: 'US $1,001 - $3000', value: 2 },
        { title: 'US $3,001 - $5000', value: 3 },
        { title: 'US $5,001 - $7,000', value: 4 },
        { title: 'US $7,001 - $10,000', value: 5},
        { title: 'US $10,001 - $15, 000', value: 6 },
        { title: 'Over US $15,000', value: 7 },
      ]
    }),

    methods: {
      filterCars(val) {
        this.$store.dispatch('cars/filterCars', { type: 'price', value: val })
      }
    }

  }
</script>
