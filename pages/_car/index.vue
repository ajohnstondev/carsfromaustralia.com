<template>

  <v-container class="mt-8" grey lighten-4>

    <v-btn
      class="mt-8 ml-4"
      fab
      depressed
      small
      absolute
      top
      left
      @click="hasHistory ? $router.go(-1) : $router.push('/')"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-overlay :value="loader">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-row class="ma-0 pa-0">
      <v-col>

      </v-col>
    </v-row>

    <v-row class="mb-4">

        <v-col cols="12" md="8">
          <v-carousel hide-delimiters progress dark class="px-2">
            <v-carousel-item
              v-for="(item,i) in carDetails.images"
              :key="i"
              :src="item"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="4">

          <v-toolbar dense flat style="background: none;">

            <v-spacer></v-spacer>

            <v-btn icon><v-icon>mdi-bookmark</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-share</v-icon></v-btn>

          </v-toolbar>


          <v-card flat style="background: none;">

            <v-card-text class="py-3" style="position: relative;">

              <div class="car-details-title blue--text">{{carDetails.name}}</div>
              <div class="car-details-price">
                ${{carDetails.price[currency]}}
              </div>
              <div class="car-details-shipping">
                Shipping Price $$$$
              </div>

              <h4 class="mt-4">About This Vehicle</h4>
              <div class="mb-2"><span class="pr-2"><v-icon>mdi-speedometer</v-icon></span> Driven {{carDetails.odometer}}km</div>
              <div class="mb-2"><span class="pr-2"><v-icon>mdi-engine</v-icon></span> Automatic Transmission</div>
              <div class="mb-2"><span class="pr-2"><v-icon>mdi-palette</v-icon></span> Exterior color: Whire . Interior color: Beige</div>
              <div class="mb-2"><span class="pr-2 primary-color"><v-icon>mdi-car</v-icon></span> Very good condition</div>

              <v-divider></v-divider>

              <div class="mb-1">Send me detailed car report</div>

              <v-text-field
                flat
                solo
                hide-details
                dense
                label="Your email address"
                class="car-details-email mb-3"
                background-color="grey lighten-1"
              ></v-text-field>

              <v-btn block color="primary" dark>Submit</v-btn>

            </v-card-text>

          </v-card>
        </v-col>

    </v-row>

  </v-container>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    name: 'CarDetails',

    auth: false,

    layout: 'carDetails',

    computed: {

      ...mapGetters({
        currency: 'cars/getCurrency'
      }),

      hasHistory () { return window.history.length > 2 }
    },

    data: () => ({
      carDetails: {},
      loader: false
    }),

    async fetch() {
      // await this.$store.commit('cars/SET_LOADER', true)
      // await this.$store.commit('cars/SET_FILTER_ACTIVE', false)
      // await this.$store.dispatch('cars/fetchCar', this.$route.params.car)
    },

    async asyncData({ $axios, params }) {
      const { data } = await $axios.get(`https://api.carsfromaustralia.com/api/cars/${params.car}`)
      return { carDetails: data }
    }

  }
</script>

<style>

  .car-details-title { font-size: 1.3rem; }
  .car-details-price { font-size: 1rem;font-weight: 600; }
  .car-details-shipping { font-size: 1rem; }

  .filter-panel-search .v-input__control { min-height: 24px !important; }
  .car-details-email label { font-size: .8rem !important; }

</style>
