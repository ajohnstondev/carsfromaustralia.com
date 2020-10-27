<template>
  <div class="w-1/4 pa-2">
    <v-card>
      <v-img height="250" :src="carinfo.featuredImage"></v-img>

      <v-card-title> {{ carinfo.title }} </v-card-title>
      <v-card-text>
        <div>{{ carinfo.category }}</div>
        <div>{{ carinfo.city }}</div>
        <div class="my-4 subtitle-1">
          {{ carinfo.price.currency }}{{ carinfo.price.value }}•
          {{ carinfo.distance.value }}{{ carinfo.distance.unit }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <div class="my-4 subtitle-1 ml-4">
        {{ carinfo.stock == 1 ? "In stock" : "Coming Soon" }}
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    carinfo: {
      type: Object
    }
  }
};
</script>
