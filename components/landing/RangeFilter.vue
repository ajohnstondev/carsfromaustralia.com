<template>
  <div class="filter-panel-range">
    <span class="filter-panel-range-header">{{title}}</span>
    <v-row>

      <v-col md="5">
        <v-text-field
                flat
                solo
                hide-details
                dense
                label="Min"
                class="filter-panel-range-input"
                background-color="grey lighten-4"
        >

        </v-text-field>
      </v-col>

      <v-col md="2" class="filter-panel-range-text">to</v-col>


      <v-col md="5">
        <v-text-field
                flat
                solo
                hide-details
                dense
                label="Max"
                class="filter-panel-range-input"
                background-color="grey lighten-4"
        >
        </v-text-field>
      </v-col>


    </v-row>

  </div>
</template>

<script>
  export default {
    name: 'RangeFilter',
    props: ['title'],
    data: () => ({

    })
  }
</script>

<style>
  .filter-panel-range-input .v-input__control { min-height: 24px !important; }
  .filter-panel-range-input label { font-size: .8rem !important; }
  .filter-panel-range-input input { font-size: .8rem !important; }

  .filter-panel-range .col { padding-top: 0 !important; padding-bottom: 0 !important; }
  .filter-panel-range-header { font-size: 0.8125rem;font-weight: 500;line-height: 1rem; }
  .filter-panel-range-text { font-size: 0.8125rem;font-weight: 300;line-height: 1rem;margin: auto; }
</style>