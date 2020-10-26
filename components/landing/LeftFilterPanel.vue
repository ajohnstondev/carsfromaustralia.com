<template>
  <v-col md="2">
    <v-text-field
      flat
      solo
      hide-details
      rounded
      dense
      prepend-inner-icon="mdi-magnify"
      label="Search marketplace"
      class="filter-panel-search"
      background-color="grey lighten-4"
    ></v-text-field>

    <v-divider class="my-2"></v-divider>

    <ExpansionFilter title="Sort By" :items="items"/>

    <RangeFilter title="Price"></RangeFilter>

    <ExpansionFilter title="Vehicle Type" :items="items"/>

    <RangeFilter title="Year"></RangeFilter>

    <ExpansionFilter title="Make" :items="items"/>

    <ExpansionFilter title="Mode" :items="items"/>

    <RangeFilter title="Milage"></RangeFilter>

    <ExpansionFilter title="Exterior Color" :items="items"/>

    <ExpansionFilter title="Interior Color" :items="items"/>

    <ExpansionFilter title="Interior Type" :items="items"/>

  </v-col>
</template>

<script>
  import ExpansionFilter from './ExpansionFilter'
  import RangeFilter from './RangeFilter'

  export default {
    name: 'FilterPanelLeft',

    components: {
      ExpansionFilter,
      RangeFilter
    },

    data: () => ({
      items: [
        'Dog Photos',
        'Cat Photos',
        'Potatoes',
        'Carrots',
      ],
      settings: []
    })
  }
</script>

<style>
  .filter-panel-search .v-input__control { min-height: 24px !important; }
  .filter-panel-search label { font-size: .8rem !important; }

  .v-divider { border-color: rgba(0,0,0,0.15) !important; }
</style>
