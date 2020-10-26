<template>
  <v-col md="9">

    <v-tabs background-color="white" hide-slider class="filter-tabs" v-model="tab" height="30">

      <template v-for="(tab, i) in tabs">

        <v-tab :ripple="false" :ref="tab.title" :href="`#tab-${i}`">{{tab.title}}</v-tab>

        <v-tab-item :key="i" :value="'tab-' + i" style="overflow: auto;">

          <v-card class="d-flex justify-start" flat tile>

            <v-card
              v-for="car in cars"
              :key="car.title"
              class="pa-2 ma-1 text-center"
              outlined hover ripple
            >
              <v-avatar tile><car-image :imgSrc="car.img" :ratio="1"> </car-image></v-avatar>

              <div class="text-center">{{car.title}}</div>
            </v-card>
          </v-card>
        </v-tab-item>

      </template>

    </v-tabs>

  </v-col>
</template>

<script>
  import CarImage from './CarImage'

  export default {
    name: 'CenterLeftPanel',

    components: {
      CarImage
    },

    data: () => ({
      tab: null,
      tabs: [
        {title: 'Shops by popular brands'},
        {title: 'Body Types'},
        {title: 'Milage'},
        {title: 'Prices'},
        {title: 'Car Usage'},
        {title: 'Engine'},
      ],
      cars: [
        {title: 'BMW', img: 'https://www.carlogos.org/car-logos/bmw-logo.png'},
        {title: 'HONDA', img: 'https://www.carlogos.org/car-logos/honda-logo.png'},
        {title: 'FORD', img: 'https://www.carlogos.org/car-logos/ford-logo.png'},
        {title: 'TOYOTA', img: 'https://www.carlogos.org/car-logos/toyota-logo.png'},
        {title: 'Volkswagen', img: 'https://www.carlogos.org/car-logos/volkswagen-logo.png'},
        {title: 'Hyundai', img: 'https://www.carlogos.org/car-logos/hyundai-logo.png'},
      ]
    }),

  }
</script>

<style>

  .filter-tabs .v-slide-group__next { display: none !important; }
  .filter-tabs .v-slide-group__prev { display: none !important; }
  .filter-tabs .v-tab {
    padding-left: 10px !important;
    padding-right: 10px !important;
    font-size: .99rem !important;
    text-transform: none !important;
    letter-spacing: 0 !important;
    min-width: 50px;max-width: 220px;
    font-weight: 400; height: 20px;
  }

  .filter-tabs .v-tab--active { color: black !important; }

  .filter-tabs .v-tab:hover{color: black;}

  .filter-tabs .v-tab::before{background: transparent;}



</style>
