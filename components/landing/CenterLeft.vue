<template>
  <v-col md="9" style="min-height: 150px;">

    <v-tabs background-color="white" hide-slider class="filter-tabs" v-model="tab" height="30">

      <template v-for="(tab, i) in tabs">

          <v-tab :ripple="false" :ref="tab.title" :href="`#tab-${i}`">{{tab.title}}</v-tab>

          <v-tab-item :key="i" :value="'tab-' + i" style="overflow: auto;min-height: 95px;">

            <keep-alive>
              <component v-bind:is="tab.value"></component>
            </keep-alive>

          </v-tab-item>

      </template>

    </v-tabs>

  </v-col>
</template>

<script>

  const Brand = () => ({ component: import('./filters/Brand') })
  const BodyType = () => ({ component: import('./filters/BodyType') })
  const CarUsage = () => ({ component: import('./filters/CarUsage') })
  const Engine = () => ({ component: import('./filters/Engine') })
  const Milage = () => ({ component: import('./filters/Milage') })
  const Price = () => ({ component: import('./filters/Price') })

  // import BodyType from './filters/BodyType'
  // import CarUsage from './filters/CarUsage'
  // import Engine from './filters/Engine'
  // import Milage from './filters/Milage'
  // import Price from './filters/Price'

  export default {
    name: 'CenterLeftPanel',

    components: {
      Brand,
      BodyType,
      CarUsage,
      Engine,
      Milage,
      Price
    },

    data: () => ({
      tab: null,
      tabs: [
        {title: 'Shops by popular brands', value: 'Brand' },
        {title: 'Body Types', value: 'BodyType' },
        {title: 'Milage', value: 'Milage' },
        {title: 'Prices', value: 'Price' },
        {title: 'Car Usage', value: 'CarUsage' },
        {title: 'Engine', value: 'Engine' },
      ],
    }),

    methods: {
      filterCars(brand, title) {
        this.$store.dispatch('cars/filterCars', { brand: title })
      }
    }
  }
</script>

<style>

  .filter-tabs .v-slide-group__next { display: none !important; }
  .filter-tabs .v-slide-group__prev { display: none !important; }
  .filter-tabs .v-tab {
    padding-left: 10px !important;
    padding-right: 10px !important;
    font-size: .99rem !important;
    text-transform: none !important;
    letter-spacing: 0 !important;
    min-width: 50px;max-width: 220px;
    font-weight: 400; height: 20px;
  }

  .filter-tabs .v-tab--active { color: black !important; }
  .filter-tabs .v-tab:hover{ color: black; }
  .filter-tabs .v-tab::before{ background: transparent; }



</style>
