<template>
  <!-- <main :style="{ backgroundImage: `url(${product.imageUrl})` }"> -->
  <main>
    <div class="container">
      <div class="row py-5">
        <div class="col-lg-6">
          <img :src="product.imageUrl" alt="" class="img-fluid" />
        </div>
        <div class="col-lg-6">
          <h2>{{ product.title }}</h2>
          <p class="opacity-50">{{ product.content }}</p>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </main>
  <!-- </main> -->
</template>

<script>
import { getUserSingleProduct } from '@/assets/js/api.js'
export default {
  data() {
    return {
      product: {}
    }
  },
  props: ['id'],
  methods: {
    async getSingleProduct() {
      const res = await getUserSingleProduct(this.id)
      this.product = res.data.product
    }
  },
  created() {
    this.getSingleProduct()
  }
}
</script>

<style lang="scss" scoped>
img {
  max-height: 400px;
  width: 100%;
  object-fit: cover;
}
</style>
