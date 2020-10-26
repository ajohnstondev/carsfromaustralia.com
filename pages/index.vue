<template>

  <v-container class="pt-0">

    <v-row>

      <LeftPanel/>

      <v-col md="10" class="px-0">

        <v-container grey lighten-4 id="contentStart">

          <v-card>

            <v-row>

              <CenterLeft/>

              <CenterRight/>

            </v-row>

          </v-card>

          <Products/>

          <Pagination/>

        </v-container>

      </v-col>

    </v-row>

  </v-container>

</template>

<script>
  import LeftPanel from '~/components/landing/LeftFilterPanel'
  import CenterRight from '~/components/landing/CenterRight'
  import CenterLeft from '~/components/landing/CenterLeft'
  import Products from '~/components/landing/Products'
  import Pagination from '~/components/landing/Pagination'

  export default {
    name: 'LandingPage',

    layout: 'landing',

    auth: false,

    components: {
      LeftPanel,
      CenterLeft,
      CenterRight,
      Products,
      Pagination
    },

    data: () => ({

    }),

    async middleware({ store, redirect }) {
      await store.dispatch('cars/fetchCars')
    }


  }
</script>

