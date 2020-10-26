<template>

  <v-container class="pt-0">

    <v-row>

      <LeftPanel/>

      <v-col md="10" class="px-0">

        <v-container grey lighten-4>

          <v-card>

            <v-row>

              <CenterLeft/>

              <CenterRight/>

            </v-row>

          </v-card>

          <Products/>

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

  export default {
    layout: 'landing',
    auth: false,
    components: {
      LeftPanel,
      CenterLeft,
      CenterRight,
      Products,
    },
    data: () => ({
      active:false,
      model: ['Carrots'],
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
      locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],


    })
  }
</script>

<style>

  .filter-tabs .v-slide-group__next { display: none !important; }
  .filter-tabs .v-slide-group__prev { display: none !important; }
  .filter-tabs .v-tab {
    padding-left: 10px !important;
    padding-right: 10px !important;
    font-size: 1.1rem !important;
    text-transform: none !important;
    letter-spacing: 0 !important;
    min-width: 50px;max-width: 220px;
    font-weight: 400; height: 20px;
  }
</style>
