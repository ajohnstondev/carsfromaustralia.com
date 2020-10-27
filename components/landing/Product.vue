<template>

    <v-col cols="12" sm="6" md="3">

      <Ribbon />

      <v-card class="mx-auto" max-width="600" min-height="268px" nuxt :to="`/${carDetails.id}`" :ripple="false">

        <CarImage :imgSrc="carDetails.image" :ratio="16/9" />

        <v-card-text class="py-3" style="position: relative;">

          <Favorite />

          <div class="product-title blue--text">{{carDetails.year}} {{carDetails.make}}</div>
          <div class="product-subtitle blue--text">{{carDetails.model}}</div>
          <div class="product-price-odo">
            <span v-if="currency === 'EUR'">&euro;</span> <span v-else>$</span>{{carDetails.price[currency]}}* . {{carDetails.odometer | odometer}}K Km
          </div>
          <div class="product-engine" >{{carDetails.engine_size}} {{carDetails.engine_size_unit}}</div>

          <v-divider class="my-2"></v-divider>

          <div class="product-address">{{carDetails.location}}</div>
          <div class="black--text product-availability">In stock</div>

        </v-card-text>

      </v-card>

    </v-col>

</template>

<script>
  import { mapGetters } from 'vuex'
  import Ribbon from './Ribbon'
  import Favorite from './Favorite'
  import CarImage from './CarImage'
  // const CarImage = () => ({
  //   component: import('./CarImage'),
  //   loading: import('./img/Loading'),
  //   error: import('./img/Error')
  // })
  export default {

    name: 'Product',

    props: ['carDetails'],

    components: {
      Ribbon,
      Favorite,
      CarImage
    },

    data: () => ({
      isActive: false
    }),

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

    mounted() {
      console.log('product')
    }
  }
</script>

<style>
  .product-title { font-weight: bold;font-size: .85rem;line-height: .6rem; }
  .product-title { font-weight: bold;font-size: .85rem; }
  .product-price-odo { font-size: 1rem; }
  .product-engine { font-size: .7rem;line-height: 10px; }
  .product-availability { font-size: .7rem;line-height: .9rem; }
  .product-address { font-size: .7rem;line-height: .8rem; }

</style>

<style scoped>
  /*img[lazy='loading'] {*/
  /*filter: blur(15px);*/
  /*}*/
</style>