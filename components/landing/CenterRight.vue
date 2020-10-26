<template>
  <v-col md="3">
    <v-layout align-center justify-end row fill-height>
      <v-flex xs5>
        <v-select
                flat
                :items="currencies"
                label="USD"
                v-model="currency"
                solo
                class="nav-select mb-1"
                hide-details
        ></v-select>
      </v-flex>
      <v-flex xs3>
        <v-btn icon
               class="nav-htb-btn"
               :color="favorite ? 'red' : ''"
               @click="favorite = !favorite"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs3>
        <v-menu offset-y min-width="100" auto>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon :color="authenticated ? 'primary' : ''">mdi-account</v-icon>
            </v-btn>

          </template>
          <v-list>
            <template v-for="(item, index) in sessions">
              <v-list-item
                :key="index"
                @click="sessionAction(item.link)"
                v-if="(authenticated && item.auth) || (!authenticated && !item.auth)"
              >
                <v-list-item-title >{{ item.title }}</v-list-item-title>

              </v-list-item>
              <v-divider class="my-0" v-if="((authenticated && item.auth) || (!authenticated && !item.auth)) && (index + 1 < sessions.length)"></v-divider>
            </template>
          </v-list>
        </v-menu>

      </v-flex>
    </v-layout>
  </v-col>
</template>

<script>
  export default {
    name: 'CenterRightPanel',

    data: () => ({
      currencies: ['USD', 'EUR', 'AUD'],
      favorite: false,
      sessions: [
        { title: 'Login', auth: false, link: 'login' },
        { title: 'Register', auth: false, link: 'register' },
        { title: 'Dashboard', auth: true, link: 'dashboard' },
        { title: 'Profile', auth: true, link: 'profile' },
        { title: 'Logout', auth: true, link: 'logout' }
      ]
    }),

    computed: {
      authenticated () {
        return !!this.$auth.user
      },

      currency: {

        get() {
          return this.$store.state.cars.currency
        },

        set (val) {
          this.$store.commit('cars/SET_CURRENCY', val)
        }

      }
    },

    methods: {
      sessionAction (action) {
        switch (action) {
          case 'login':
            this.$router.push('/login')
            break
          case 'register':
            this.$router.push('/register')
            break
          case 'dashboard':
            this.$router.push('/dashboard')
            break
          case 'profile':
            this.$router.push('/profile')
            break
          case 'logout':
            this.$store.dispatch('user/logout')
            break
          default:
        }
      }
    }
  }
</script>
