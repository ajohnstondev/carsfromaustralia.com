<template>
  <div class="filter-panel-range">
    <span class="filter-panel-range-header">{{title}}</span>
    <v-row>

      <v-col md="6" class="px-1">

        <v-select
                :items="minValues"
                v-model="minValue"
                flat
                solo
                hide-details
                dense
                label="Min"
                class="filter-panel-range-input"
                background-color="grey lighten-4"
        ></v-select>
      </v-col>

      <v-col md="6" class="px-1">
        <v-select
                :items="maxValues"
                v-model="maxValue"
                flat
                solo
                hide-details
                dense
                label="Max"
                class="filter-panel-range-input"
                background-color="grey lighten-4"
        ></v-select>
      </v-col>
    </v-row>

    <v-row v-if="minValue || maxValue || (minValue && maxValue && minValue < maxValue)" align="center" justify="center" class="mt-1">
      <v-btn x-small color="primary" @click="rangeFilter" depressed>Filter</v-btn>
      <v-btn x-small color="warning" @click="clearFilter" depressed class="ml-1">clear</v-btn>
    </v-row>

  </div>
</template>

<script>
  export default {
    name: 'RangeFilter',
    props: ['title', 'min', 'max'],
    methods: {
      setMinValues() {
        this.minValues = this.min
      },
      setMaxValues() {
        let values = this.max
        if (this.minValue > 0) {
          console.log('', this.minValue)
          values = values.filter( value => value.val > this.minValue )
        }

        this.maxValues = values
      },

      rangeFilter () {
        switch (this.title) {
          case 'Price':
            this.$store.dispatch('cars/filterCars', { type: 'priceRange', min: this.minValue, max: this.maxValue })
            break
          case 'Year':
            this.$store.dispatch('cars/filterCars', { type: 'yearRange', min: this.minValue, max: this.maxValue })
            break
          case 'Milage':
            this.$store.dispatch('cars/filterCars', { type: 'milageRange', min: this.minValue, max: this.maxValue })
            break
        }
      },

      clearFilter () {
        this.minValue = null
        this.maxValue = null
      }
    },
    data: () => ({
      minValue: 0,
      maxValue: 0,
      minValues: [],
      maxValues: []
    }),

    mounted () {
      this.setMinValues()
      this.setMaxValues()
    },

    watch: {
      minValue (val) {
        if (val) {
          this.setMaxValues()
        }
      }
    }
  }
</script>

<style>
  .filter-panel-range-input .v-input__control { min-height: 24px !important; }
  .filter-panel-range-input label { font-size: .8rem !important; }
  .filter-panel-range-input input { font-size: .8rem !important; }
  .filter-panel-range-input .v-input__slot  { font-size: .8rem !important;padding-right: 0 !important;padding-left: 6px !important; }

  .filter-panel-range .col { padding-top: 0 !important; padding-bottom: 0 !important; }
  .filter-panel-range-header { font-size: 0.8125rem;font-weight: 500;line-height: 1rem; }
  .filter-panel-range-text { font-size: 0.8125rem;font-weight: 300;line-height: 1rem;margin: auto; }
</style>