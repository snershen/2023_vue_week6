<template>
  <div class="container py-5">
    <div class="h-100 d-flex justify-content-center align-items-center">
      <div class="spinner-border" role="status" :class="{ 'd-none': !isLoading }">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <ul
      class="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 justify-content-lg-start justify-content-center"
    >
      <li class="col" v-for="item in productList" :key="item.id">
        <ProductCard :product="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getUserProduct } from '@/assets/js/api.js'
import ProductCard from '@/components/user/ProductCard.vue'
export default {
  data() {
    return {
      productList: {},
      isLoading: true
    }
  },
  components: { ProductCard },
  methods: {
    async getProduct() {
      this.isLoading = true
      console.log(this.isLoading)
      const res = await getUserProduct()
      console.log(res)
      this.productList = res.data.products
      this.isLoading = false
      console.log(this.isLoading)
    }
  },
  created() {
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
li {
  max-width: 350px;
}
</style>
