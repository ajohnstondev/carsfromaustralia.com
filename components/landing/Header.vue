<template>
  <v-container class="pb-0">
    <v-row>

      <v-col cols="4" md="2" class="px-0">
        <v-img
                src="/img/carfromaustralia.png"
                contain
                max-height="60px"
                class="mx-8"
        ></v-img>
      </v-col>

      <v-col cols="6" md="2">
        <v-layout align-center row fill-height>
          <div style="font-size: 1.3rem;">Car From Australia</div>
        </v-layout>
      </v-col>

      <v-col md="8">
        <v-layout align-center justify-end row fill-height>
          <v-flex xs6 sm3>
            <v-select
                    flat
                    :items="dropdown_font"
                    label="Apia/Samoa"
                    solo
                    class="nav-select"
                    hide-details
            ></v-select>
          </v-flex>
          <v-flex xs6 sm2>
            <v-btn text class="nav-htb-btn" nuxt to="how-to-buy">How to Buy</v-btn>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'NavHeader',
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
    })
  }
</script>

<style>
  .nav-htb-btn { font-weight: 300 !important; }
  .nav-select input { font-weight: 300 !important; }
  .nav-select label { font-weight: 300 !important; }
  .nav-select .v-select__selection { font-weight: 300 !important; }
</style>
