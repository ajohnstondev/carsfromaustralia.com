<template>

  <v-container class="pa-0">
    <template v-if="loader" class="mt-4">
      <v-row class="my-4">
        <template v-for="i in 36">
          <v-skeleton-loader
                  class="mx-auto"
                  min-width="210"
                  max-width="280"
                  height="280"
                  type="card"
          ></v-skeleton-loader>
        </template>
      </v-row>
    </template>

    <template v-else>

      <v-row v-if="cars.length > 0">

        <template v-for="(car, index) in cars">

          <Product :carDetails="car" :key="`car-${index}`" />

        </template>

      </v-row>

      <v-row justify="center" align="center" v-else>

        <div class="my-8">
          No result found.
        </div>

      </v-row>

    </template>



    <v-row align="center" justify="center" v-if="cars.length > 0">
      <Pagination/>
    </v-row>

  </v-container>




</template>

<script>
    import {mapGetters} from 'vuex'
    // import Products from '~/components/landing/Products'
    import Product from '~/components/landing/Product'
    import Pagination from '~/components/landing/Pagination'

    export default {
        name: 'LandingPage',

        layout: 'landing',

        auth: false,

        components: {
            Product,
            Pagination
        },

        data: () => ({

        }),

        computed: {
            ...mapGetters({
                cars: 'cars/getPaginatedCars',
                loader: 'cars/getFilterLoader'
            })
        },

        async middleware({ store, redirect }) {
            // await store.commit('cars/SET_LOADER', true)
            // await store.commit('cars/SET_FILTER_ACTIVE', false)
            // await store.dispatch('cars/fetchCars')
        },

        mounted() {
            // this.$store.commit('cars/SET_LOADER', true)
            // this.$store.commit('cars/SET_FILTER_ACTIVE', false)
            // this.$store.dispatch('cars/fetchCars')
        },

        // async fetch({store, params, from}) {
        //     let isInitialPageLoad = !from
        //     if(isInitialPageLoad) {
        //         // await store.commit('cars/SET_LOADER', true)
        //         await store.commit('cars/SET_FILTER_ACTIVE', false)
        //         await store.dispatch('cars/fetchCars')
        //     }
        // }

    }
</script>

