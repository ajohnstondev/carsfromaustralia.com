<template>
  <div class="filter-search-string">
    <v-text-field
            flat
            solo
            hide-details
            rounded
            dense
            :value="search"
            prepend-inner-icon="mdi-magnify"
            label="Search marketplace"
            class="filter-panel-search"
            background-color="grey lighten-4"
            @keydown.enter="searchByString"
            :append-icon-cb="searchByString"
    ></v-text-field>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SearchFilter',
    computed: {
      ...mapGetters({
        filters: 'cars/getFilters'
      }),
      search: function() {
        return this.filters.search ? this.filters.search.value : ''
      },
    },
    methods: {
      searchByString (event) {
        this.$store.dispatch('cars/filterCars', { type: 'search', value: event.target.value })
      }
    },
  }
</script>

<style>
  .filter-search-string .v-icon::before { cursor: pointer; }
</style>