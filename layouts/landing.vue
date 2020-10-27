<template>
  <v-app>

    <template v-if="this.$route.path === '/'">

      <Header/>

      <v-main>

        <v-container class="pt-0">

          <v-row>

            <LeftPanel/>

            <v-col md="10" class="px-0">

              <v-container grey lighten-4 id="contentStart">

                <v-card>

                  <v-row>

                    <CenterLeft/>

                    <CenterRight/>

                  </v-row>

                </v-card>

                <client-only>
                  <nuxt/>

                  <template slot="placeholder">
                    <v-row class="my-4">
                      <template v-for="i in 36">
                        <v-skeleton-loader
                                class="mx-auto"
                                min-width="210"
                                max-width="280"
                                height="280"
                                type="card"
                        ></v-skeleton-loader>
                      </template>
                    </v-row>
                  </template>
                </client-only>


              </v-container>

            </v-col>

          </v-row>

        </v-container>

      </v-main>
    </template>

  </v-app>
</template>

<script>
  import Header from '~/components/landing/Header'
  import LeftPanel from '~/components/landing/LeftFilterPanel'
  import CenterRight from '~/components/landing/CenterRight'
  import CenterLeft from '~/components/landing/CenterLeft'

  export default {
    data: () => ({

    }),

    components: {
      Header,
      LeftPanel,
      CenterLeft,
      CenterRight,
    }
  }
</script>

<style>
  .v-application { font-family: Poppins, sans-serif !important; }
  .v-btn:focus { outline:0; }
</style>
