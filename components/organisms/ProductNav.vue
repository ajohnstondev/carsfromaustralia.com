<template>
  <v-toolbar height="160">
    <div class="w-5/6">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-tabs color="cyan" white slider-color="gray">
          <v-tab v-for="(category, index) in categoies" :key="index" ripple>
            {{ category.shopBy }}
          </v-tab>
          <v-tab-item v-for="(category, index) in categoies" :key="index">
            <div class="d-flex">
              <CategoryItem
                v-for="(item, catIndex) in category.items"
                :key="catIndex"
                :itemInfo="item"
              >
              </CategoryItem>
            </div>
          </v-tab-item>
        </v-tabs>
      </v-toolbar-items>
    </div>
    <div class="w-1/6 d-flex">
      <SelectComponent :items="currencies" label="USD"></SelectComponent>
      <v-btn icon color="pink">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon color="blue">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
import CategoryItem from "~/components/molecules/CategoryItem";
import SelectComponent from "~/components/atoms/SelectComponent";
export default {
  name: "ProductNav",
  data() {
    return {
      currencies: ["USD", "AUD", "JPY"],
      brands: [
        {
          featuredImage: "https://media.publit.io/file/toyota-1.png",
          brandName: "Toyota"
        },
        {
          featuredImage: "https://media.publit.io/file/nissan.png",
          brandName: "Nissan"
        },
        {
          featuredImage: "https://media.publit.io/file/honda.png",
          brandName: "Honda"
        }
      ],
      categoies: [
        {
          shopBy: "Shop by popular brands",
          items: [
            {
              featuredImage: "https://media.publit.io/file/toyota-1.png",
              brandName: "Toyota"
            },
            {
              featuredImage: "https://media.publit.io/file/nissan.png",
              brandName: "Nissan"
            },
            {
              featuredImage: "https://media.publit.io/file/honda.png",
              brandName: "Honda"
            }
          ]
        },
        {
          shopBy: "Body Types",
          items: [
            {
              featuredImage: "https://media.publit.io/file/toyota-1.png",
              brandName: "Toyota"
            },
            {
              featuredImage: "https://media.publit.io/file/nissan.png",
              brandName: "Nissan"
            },
            {
              featuredImage: "https://media.publit.io/file/honda.png",
              brandName: "Honda"
            }
          ]
        },
        {
          shopBy: "Mileage",
          items: [
            {
              featuredImage: "https://media.publit.io/file/toyota-1.png",
              brandName: "Toyota"
            },
            {
              featuredImage: "https://media.publit.io/file/nissan.png",
              brandName: "Nissan"
            },
            {
              featuredImage: "https://media.publit.io/file/honda.png",
              brandName: "Honda"
            }
          ]
        },
        {
          shopBy: "Prices",
          items: [
            {
              featuredImage: "https://media.publit.io/file/toyota-1.png",
              brandName: "Toyota"
            },
            {
              featuredImage: "https://media.publit.io/file/nissan.png",
              brandName: "Nissan"
            },
            {
              featuredImage: "https://media.publit.io/file/honda.png",
              brandName: "Honda"
            }
          ]
        },
        {
          shopBy: "Car Usage",
          items: [
            {
              featuredImage: "https://media.publit.io/file/toyota-1.png",
              brandName: "Toyota"
            },
            {
              featuredImage: "https://media.publit.io/file/nissan.png",
              brandName: "Nissan"
            },
            {
              featuredImage: "https://media.publit.io/file/honda.png",
              brandName: "Honda"
            }
          ]
        },
        {
          shopBy: "Engine",
          items: [
            {
              featuredImage: "https://media.publit.io/file/toyota-1.png",
              brandName: "Toyota"
            },
            {
              featuredImage: "https://media.publit.io/file/nissan.png",
              brandName: "Nissan"
            },
            {
              featuredImage: "https://media.publit.io/file/honda.png",
              brandName: "Honda"
            }
          ]
        }
      ]
    };
  },
  components: {
    CategoryItem,
    SelectComponent
  },
  computed: {},
  methods: {}
};
</script>
