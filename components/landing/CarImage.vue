<template>
  <v-img :src="srcUrl" :aspect-ratio="ratio" >
    <!--<template v-slot:placeholder>-->
      <!--<v-row-->
              <!--class="fill-height ma-0"-->
              <!--align="center"-->
              <!--justify="center"-->
      <!--&gt;-->
        <!--<v-progress-circular indeterminate color="teal lighten-1"></v-progress-circular>-->
      <!--</v-row>-->
    <!--</template>-->
  </v-img>
</template>

<script>
  export default {

    props: ['imgSrc', 'ratio'],

    data: () => ({
      observer: null,
      intersected: false,
    }),

    computed: {
      srcUrl() {
        return this.intersected ? this.imgSrc : '';
      }
    },

    mounted() {
      this.observer = new IntersectionObserver(entries => {
        const image = entries[0];
        if (image.isIntersecting) {
          this.intersected = true;
          this.observer.disconnect();
        }
      });

      this.observer.observe(this.$el);
    },

    destroyed() {
      this.observer.disconnect();
    }

  }
</script>