<template>
  <div class="productlist d-flex flex-wrap mt-2">
    <ProductCard
      v-for="(car, index) in cars"
      :key="index"
      :carinfo="car"
    >
    </ProductCard>
  </div>
</template>
<script>
import cookie from 'js-cookie'
import ProductCard from '~/components/molecules/ProductCard'
export default {
  name: 'Home',
  data() {
    return {
      cars: [
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        },
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        },
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        },
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        },
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        },
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        },
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        },
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        },
        {
          featuredImage: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
          title: '2010 Mini',
          category: 'Cooper',
          price: {
            value: 10998,
            currency: '$'
          },
          distance: {
            value: 77,
            unit: 'K miles'
          },
          city: 'CarMax Kansas City',
          stock: 1
        }

      ]
    }
  },
  components: {
    ProductCard
  },
  computed: {
    
  }
}
</script>