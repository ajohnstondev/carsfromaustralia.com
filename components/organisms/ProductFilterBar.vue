<template>
  <v-layout row>
    <v-flex>
      <v-card class="w-full ml-2 mr-6 pa-2">
        <div>
          <v-text-field
            rounded
            filled
            dense
            label="Search Marketplace"
            prepend-inner-icon="mdi-magnify"
            class="ma-2"
            background-color="#ECECEC"
          ></v-text-field>
        </div>
        <v-divider></v-divider>
        <div class="mt-4"></div>
        <Expansion :itemInfo="sortBy" />
        <div class="mt-4"></div>
        <MinMaxItem :title="price" />
        <Expansion :itemInfo="vehicleType" />
        <div class="mt-4"></div>
        <MinMaxItem :title="year" />
        <Expansion :itemInfo="make" />
        <Expansion :itemInfo="model" />
        <div class="mt-4"></div>
        <MinMaxItem :title="mileage" />
        <Expansion :itemInfo="exteriorColour" />
        <Expansion :itemInfo="interiorColour" />
        <Expansion :itemInfo="transmissionType" />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MinMaxItem from "~/components/molecules/MinMaxItem";
import Expansion from "~/components/atoms/Expansion";
export default {
  components: {
    MinMaxItem,
    Expansion
  },
  data() {
    return {
      price: "Price",
      year: "Year",
      mileage: "Mileage",
      sortBy: { header: "Sort by", content: "#content" },
      vehicleType: { header: "Vehicle type", content: "#content" },
      make: { header: "Make", content: "#content" },
      model: { header: "Model", content: "#content" },
      exteriorColour: { header: "Exterior colour", content: "#content" },
      interiorColour: { header: "Interior colour", content: "#content" },
      transmissionType: { header: "Transmission type", content: "#content" },
      items: [
        {
          action: "local_activity",
          title: "Sort by",
          items: [{ title: "List Item" }]
        },
        {
          action: "restaurant",
          title: "Vehicle type",
          active: true,
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
        {
          action: "school",
          title: "Make",
          items: [{ title: "List Item" }]
        },
        {
          action: "directions_run",
          title: "Model",
          items: [{ title: "List Item" }]
        },
        {
          action: "healing",
          title: "Mileage",
          items: [{ title: "List Item" }]
        },
        {
          action: "content_cut",
          title: "Exterior colour",
          items: [{ title: "List Item" }]
        },
        {
          action: "local_offer",
          title: "Interior colour",
          items: [{ title: "List Item" }]
        },
        {
          action: "local_offer",
          title: "Transmission type",
          items: [{ title: "List Item" }]
        }
      ]
    };
  }
};
</script>
