<template>

  <v-pagination
          v-model="page"
          :circle="circle"
          :disabled="disabled"
          :length="filterActive ? filteredPages : pages"
          :next-icon="nextIcon"
          :prev-icon="prevIcon"
          :page="page"
          :total-visible="totalVisible"
  ></v-pagination>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'LandingPagination',

    data: () => ({
      circle: false,
      disabled: false,
      nextIcon: 'mdi-chevron-right',
      prevIcon: 'mdi-chevron-left',

    }),

    computed: {

      ...mapGetters({
        pages: 'cars/getTotalPages',
        filteredPages: 'cars/getTotalFilteredPages',
        filterActive: 'cars/getFilterActive'
      }),

      page: {

        get() {
          return this.$store.state.cars.currentPage
        },

        set(val) {
          // const el = document.getElementById('ssar')
          // this.$smoothScroll({
          //   scrollTo: el,
          //   duration: 1000,
          //   offset: -50,
          // })
          window.scrollTo(0, 120);
          this.filterActive ? this.$store.dispatch('cars/SET_FILTERED_CURRENT_PAGE', val) : this.$store.dispatch('cars/SET_CURRENT_PAGE', val)
        }

      },

      totalVisible () {
        return this.$store.state.cars.totalVisible
      },

      length () {
        console.log(this.$store.state.cars.filterActive)
        return this.$store.state.cars.totalPages
      }
    }
  }
</script>