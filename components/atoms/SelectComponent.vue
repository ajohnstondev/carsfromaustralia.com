<template>
    <v-select :items="items" solo flat :label="label"></v-select>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    items: {
      type: Array
    },
    label: {
      type: String
    }
  }
};
</script>
