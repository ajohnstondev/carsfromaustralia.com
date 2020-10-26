<template>
  <v-row id="productStart" :key="`page-${currentPage}`">
    <template v-for="(car, index) in cars">

      <v-col cols="12" sm="6" md="3">

        <Ribbon :key="`ribbon-${index}`" />

        <v-card :key="`product-item-${index}`" class="mx-auto content-box" max-width="600" min-height="268px" hover>

          <CarImage :imgSrc="car.image" :ratio="16/9"></CarImage>

          <v-card-text class="py-3" style="position: relative;">

            <Favorite :key="`fab-btn-${index}`" />

            <div class="product-title blue--text">{{car.year}} {{car.make}}</div>
            <div class="product-subtitle blue--text">{{car.model}}</div>
            <div class="product-price-odo">
              <span v-if="currency === 'EUR'">&euro;</span> <span v-else>$</span>{{car.price[currency]}}* . {{car.odometer | odometer}}K miles
            </div>
            <div class="product-engine" >{{car.engine_size}} {{car.engine_size_unit}}</div>

            <v-divider class="my-2"></v-divider>

            <div class="product-address">{{car.location}}</div>
            <div class="black--text product-availability">In stock</div>

          </v-card-text>

        </v-card>

      </v-col>

    </template>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Ribbon from './Ribbon'
  import Favorite from './Favorite'
  import CarImage from './CarImage'

  export default {

    name: 'Products',

    components: {
      Ribbon,
      Favorite,
      CarImage
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

