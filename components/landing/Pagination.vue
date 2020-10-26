<template>

  <v-pagination
          v-model="page"
          :circle="circle"
          :disabled="disabled"
          :length="length"
          :next-icon="nextIcon"
          :prev-icon="prevIcon"
          :page="page"
          :total-visible="totalVisible"
  ></v-pagination>

</template>

<script>
  export default {
    name: 'LandingPagination',

    data: () => ({
      circle: false,
      disabled: false,
      nextIcon: 'mdi-chevron-right',
      prevIcon: 'mdi-chevron-left',

    }),

    computed: {

      page: {

        get() {
          return this.$store.state.cars.currentPage
        },

        set(val) {

          window.scrollTo(0, 120);
          this.$store.dispatch('cars/SET_CURRENT_PAGE', val)
        }

      },

      totalVisible () {
        return this.$store.state.cars.totalVisible
      },

      length () {
        return this.$store.state.cars.totalPages
      }
    }
  }
</script>