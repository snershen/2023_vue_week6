<template>
  <div class="card">
    <img :src="product.imageUrl" class="card-img-top" :alt="product.title" />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text text-overflow">
        {{ product.description }}
      </p>
      <div class="d-flex gap-2">
        <!-- <a href="#" class="btn btn-primary">前往預訂</a> -->
        <RouterLink :to="`/products/${product.id}`" class="btn btn-secondary">詳細資訊</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-height: 200px;
  width: 100%;
  object-fit: cover;
}
</style>
