import Vue from "vue";
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/img/no-image.jpg',
  loading: 'dist/img/loader.gif',
  attempt: 1
})