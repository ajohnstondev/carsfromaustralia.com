<template>
  <v-list dense link class="filter-panel-expansion" flat :ripple="false">
    <v-list-group group dense class="filter-panel-expansion-group-header" flat :ripple="false">
      <template slot="activator">
        <v-list-item-title >{{title}}</v-list-item-title>
      </template>

      <v-list-item-group
              v-model="settings"
              multiple
      >
        <template v-for="(item, i) in items">
          <v-list-item
                  :key="`item-${i}`"
                  :value="item"
                  active-class="deep-purple--text text--accent-4"
          >
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                        :input-value="active"
                        color="deep-purple accent-4"
                        @click="toggle"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{item}}</v-list-item-title>
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
      settings: []
    })
  }
</script>

<style>
  .filter-panel-expansion .v-list-group__header { min-height: 35px !important;padding-left: 0 !important;padding-right: 0 !important; }
  .filter-panel-expansion { padding-top: 0 !important; padding-bottom: 0 !important; }
</style>