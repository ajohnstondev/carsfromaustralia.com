<template>
  <v-expansion-panels flat>
    <v-expansion-panel>
      <v-expansion-panel-header>{{itemInfo.header}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{itemInfo.content}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  name: "Expansion",
  props: {
    itemInfo: {
      type: Object
    }
  }
};
</script>
