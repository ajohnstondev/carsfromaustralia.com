/*!

 =========================================================
 * Nuxt Black Dashboard PRO - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nuxt-black-dashboard-pro
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Car From Australia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'}
    ],
    bodyAttrs: {
      class: ['white-content'] // delete the class to have the sidebar expanded by default. Add `white-content` class here to enable "white" mode.
    }
  },
  router: {
    linkExactActiveClass: 'active',
    middleware: ['auth']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#108775',
    height: '3px',
    failedColor: 'red',
    throttle: 200,

  },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard-pro.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    `~/plugins/dashboard-plugin.js`,
    { src: '~/plugins/full-calendar.js', ssr: false },
    { src: '~/plugins/world-map.js', ssr: false },
    '~/plugins/axios',
    '~/plugins/vue-lodash',
    { src: '~/plugins/vuex-persist', ssr: false }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ar',
        file: 'ar.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  },

  axios: {
    baseURL: "https://api.carsfromaustralia.com/api"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/sign-in', method: 'post', propertyName: 'access_token' },
          logout: { url: '/auth/sign-out', method: 'post' },
          user: { url: '/profile', method: 'get', propertyName: '' }
        },
        // tokenRequired: true,
        tokenType: 'Bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {

        }
      }
    }
  },

}
