<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '../../types'
import ProductCard from './ProductCard.vue'

const props = defineProps<{
  products: Product[]
}>()

const sortedProducts = computed(() => {
  return [...props.products].sort((a, b) => b.shop.rating - a.shop.rating)
})
</script>

<template>
  <div v-if="sortedProducts.length === 0" class="text-center py-8">
    <p class="text-gray-400">Nenhum produto encontrado</p>
  </div>
  <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    <ProductCard
      v-for="product in sortedProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>