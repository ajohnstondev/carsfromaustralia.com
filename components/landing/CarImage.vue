<template>
  <v-img :src="imgSrc" :aspect-ratio="ratio"></v-img>
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
