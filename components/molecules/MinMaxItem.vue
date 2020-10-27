<template>
  <v-layout class="d-flex flex-col pl-6 pr-6">
    <div class="mb-2">{{ title }}</div>
    <div class="d-flex">
      <v-text-field
        solo
        flat
        label="Min"
        filled
        background-color="#ECECEC"
      ></v-text-field>
      <div class="ma-2">to</div>
      <v-text-field
        solo
        flat
        label="Max"
        filled
        background-color="#ECECEC"
      ></v-text-field>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: "MinMaxItem",
  props: {
    title: {
      type: String
    }
  }
};
</script>
