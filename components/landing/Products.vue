<template>

    <v-container class="pa-0">

      <v-row>

        <template v-for="(car, index) in cars">

          <v-item>

            <Product :carDetails="car" :key="`car-${index}`" />

          </v-item>

        </template>

      </v-row>

    </v-container>

</template>

<script>

  import { mapGetters } from 'vuex'
  // import Product from './Product'
  const Product = () => ({
    component: import('./Product'),
  })
  export default {

    name: 'Products',

    components: {
      Product
    },

    computed: {
      ...mapGetters({
        cars: 'cars/getPaginatedCars',
        currency: 'cars/getCurrency',
        currentPage: 'cars/getCurrentPage',
      })
    },

    filters: {
      odometer: function (value) {
        return parseInt(value / 1000)
      }
    },

    async middleware ({ store, redirect }) {

    },

    mounted() {
      console.log('products')
    }
  }
</script>

