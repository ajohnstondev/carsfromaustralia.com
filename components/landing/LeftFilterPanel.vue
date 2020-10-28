<template>
  <v-col md="2" >
    <div v-if="filterActive" class="text-center mb-2">
      Active Filters
      <v-divider class="my-1"></v-divider>

      <template v-for="(filter, key) in filters">
        <!--<v-chip-->
                <!--class="my-1"-->
                <!--close-->
                <!--color="orange"-->
                <!--label-->
                <!--outlined-->
                <!--@click:close="removeFilter(key)"-->
        <!--&gt;-->
        <div class="filter-content" :key="key">
          <span v-if="key === 'odometer'">
            milage &lt; {{filter}}
          </span>

          <span v-else-if="key === 'price'">
             {{filter | pf}}
          </span>

          <span v-else-if="key === 'engine_size'">
             {{filter | es}}
          </span>

          <span v-else-if="key === 'year'">
            <template v-if="filter.max || filter.min">{{key}}: {{filter}}</template>
            <template v-else>{{filter | yf}}</template>

          </span>

          <span v-else-if="key === 'priceRange'">
             price: 
             <span v-if="!filter.max">&gt;=</span> <span v-if="filter.min">{{filter.min}}</span> 
             <span v-if="filter.min && filter.max">-</span> 
             <span v-if="!filter.min">&lt;=</span> <span v-if="filter.max">{{filter.max}}</span>
          </span>

          <span v-else-if="key === 'yearRange'">
             year range: 
             <span v-if="!filter.max">&gt;=</span> <span v-if="filter.min">{{filter.min}}</span> 
             <span v-if="filter.min && filter.max">-</span> 
             <span v-if="!filter.min">&lt;=</span> <span v-if="filter.max">{{filter.max}}</span>
          </span>

          <span v-else-if="key === 'milageRange'">
             milage: {{filter.value}}
          </span>

          <span v-else-if="key === 'body_type'">
             type: {{filter.value}}
          </span>

          <span v-else>
            {{key}} : {{filter.value}}
          </span>
        </div>

        <!--</v-chip>-->
      </template>
      <v-btn x-small class="mt-2" depressed @click="removeFilter()" color="error">clear <v-icon small>mdi-close</v-icon></v-btn>
    </div>
    
    <SearchFilter />

    <v-divider class="my-2"></v-divider>

    <RangeFilter title="Price" :min="prices.min" :max="prices.max"></RangeFilter>

    <ExpansionFilter title="Body Type" :items="bodyTypes"/>

    <RangeFilter title="Year" :min="years.min" :max="years.max"></RangeFilter>

    <ExpansionFilter title="Make" :items="brands"/>

    <!--<ExpansionFilter title="Model" :items="brands"/>-->

    <RangeFilter title="Milage" :min="milage.min" :max="milage.max"></RangeFilter>
  </v-col>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ExpansionFilter from './ExpansionFilter'
  import RangeFilter from './RangeFilter'
  import SearchFilter from './SearchFilter'
  import {bodyTypes, brands, prices, milage, years } from '../../plugins/const'

  export default {
    name: 'FilterPanelLeft',

    components: {
      ExpansionFilter,
      RangeFilter,
      SearchFilter,
    },

    computed: {
      ...mapGetters({
        filterActive: 'cars/getFilterActive',
        filters: 'cars/getFilters'
      }),
    },

    methods: {
      ...mapActions({
        removeFilter: 'cars/removeFilter',
      }),
    },

    data: () => ({
      bodyTypes,
      brands,
      prices,
      milage,
      years
    }),

    filters: {

      pf: function (value) {
        switch (value) {
          case 1:   return 'Under US $1,000';
          case 2:   return 'US $1,001 - $3000';
          case 3:  return 'US $3,001 - $5000';
          case 4:  return 'US $5,001 - $7,000';
          case 5:  return 'US $7,001 - $10,000';
          case 6:  return 'US $10,001 - $15, 000';
          case 7: return 'Over US $15,000';
        }
      },

      yf: function (value) {
        switch (value) {
          case 1:   return 'Less than 1 Year';
          case 2:   return '1 to 3 Years Old';
          case 3:  return '4 - 5 Years Old';
          case 4:  return '6 - 8 Years Old';
          case 5:  return '9 - 12 Years Old';
          case 6:  return '13+ Years Old';
          case 7: return '25+ Years Old';
        }
      },

      es: function (value) {
        switch (value) {
          case 1:   return  'Under 1600cc';
          case 2:   return 'Under 1800cc';
          case 3:  return 'Under 2000cc';
          case 4:  return 'Under 2500cc';
          case 5:  return 'Under 3000cc';
          case 6:  return 'Under 4500cc';
          case 7:  return 'All';
        }
      }

    },
  }
</script>

<style>
  .filter-panel-search .v-input__control { min-height: 24px !important; }
  .filter-panel-search label { font-size: .8rem !important; }

  .v-divider { border-color: rgba(0,0,0,0.15) !important; }
  .filter-content { border: 1px solid orange; color: orange; }
</style>
