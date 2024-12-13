<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import type { Product } from '../../types'
import { useCartStore } from '../../stores/cartStore'

const props = defineProps<{
  product: Product
  quantity: number
}>()

const cartStore = useCartStore()

const handleRemove = () => {
  cartStore.removeFromCart(props.product.id)
}

const handleQuantityChange = (newQuantity: number) => {
  cartStore.updateQuantity(props.product.id, newQuantity)
}
</script>

<template>
  <div class="flex items-center gap-4 py-4 border-b border-gray-700">
    <img :src="product.image" :alt="product.name" class="w-20 h-20 object-cover rounded" />
    <div class="flex-1">
      <h3 class="text-yellow-500 font-medium">{{ product.name }}</h3>
      <p class="text-gray-400 text-sm">{{ product.shop.name }}</p>
      <div class="flex items-center gap-4 mt-2">
        <div class="flex items-center gap-2">
          <button 
            @click="handleQuantityChange(quantity - 1)"
            class="px-2 py-1 bg-gray-700 text-yellow-500 rounded hover:bg-gray-600"
          >-</button>
          <span class="text-gray-300">{{ quantity }}</span>
          <button 
            @click="handleQuantityChange(quantity + 1)"
            class="px-2 py-1 bg-gray-700 text-yellow-500 rounded hover:bg-gray-600"
          >+</button>
        </div>
        <span class="text-yellow-500">R$ {{ (product.price * quantity).toFixed(2) }}</span>
      </div>
    </div>
    <button 
      @click="handleRemove"
      class="p-2 text-gray-400 hover:text-yellow-500"
    >
      <TrashIcon class="w-5 h-5" />
    </button>
  </div>
</template>