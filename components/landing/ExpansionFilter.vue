<template>
  <v-list dense link class="filter-panel-expansion" flat :ripple="false">
    <v-list-group group dense class="filter-panel-expansion-group-header" flat :ripple="false">
      <template slot="activator">
        <v-list-item-title >{{title}}</v-list-item-title>
      </template>

      <v-list-item-group v-model="settings" class="expansion-group">
        <template v-for="(item, i) in items">
          <v-list-item
                  :key="`item-${i}`"
                  :value="item.title"
                  active-class="blue--text text--accent-1"
                  class="expansion-group-item"
          >
            <template v-slot:default="{ active, toggle }">

              <v-list-item-action class="expansion-group-action">
                <v-checkbox
                        :input-value="active"
                        color="blue accent-1"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content class="expansion-group-content">
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>

    </v-list-group>

  </v-list>
</template>

<script>
  export default {
    name: 'ExpansionFilter',
    props: ['items', 'title'],
    data: () => ({
      setting: {}
    }),
    computed: {
      settings: {
        get() {
          return this.$store.state.cars.leftFilter
        },
        set(val) {
          console.log('set exp filter', val);
          switch (this.title) {
            case 'Body Type':
              this.$store.dispatch('cars/filterCars', { type: 'body_type', value: val })
              break
            case 'Make':
              this.$store.dispatch('cars/filterCars', { type: 'make', value: val })
              break
          }
        }
      }
    }
  }
</script>

<style>
  .filter-panel-expansion .v-list-group__header { min-height: 35px !important;padding-left: 0 !important;padding-right: 0 !important; }
  .filter-panel-expansion { padding-top: 0 !important; padding-bottom: 0 !important; }
  .expansion-group { overflow: auto; max-height: 350px !important; }
  .expansion-group-content { padding: 0 !important; }
  .expansion-group-item { min-height: 30px !important; }
  .expansion-group-action { margin-top: 0 !important;margin-bottom: 0 !important; }
</style>