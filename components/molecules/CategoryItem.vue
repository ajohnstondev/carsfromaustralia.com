<template>
  <div>
    <div class="flex flex-col align-center ma-4">
      <v-img width="3rem" :src="itemInfo.featuredImage"></v-img>
      <div>{{ itemInfo.brandName }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryItem",
  props: {
    itemInfo: {
      type: Object
    }
  }
};
</script>
