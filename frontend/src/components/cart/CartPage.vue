<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '../../stores/cartStore'
import CartItem from './CartItem.vue'

const cartStore = useCartStore()
// Use storeToRefs to maintain reactivity
const { cartItems, totalItems, totalPrice } = storeToRefs(cartStore)
</script>

<template>
  <div class="min-h-screen bg-gray-900 pt-20 px-4">
    <div class="max-w-3xl mx-auto py-8">
      <h1 class="text-2xl font-bold text-yellow-500 mb-8">Carrinho ({{ totalItems }})</h1>
      
      <div v-if="cartItems.length === 0" class="text-center py-12">
        <p class="text-gray-400">Seu carrinho está vazio</p>
      </div>
      
      <div v-else>
        <div class="space-y-4">
          <CartItem
            v-for="item in cartItems"
            :key="item.product.id"
            :product="item.product"
            :quantity="item.quantity"
          />
        </div>
        
        <div class="mt-8 border-t border-gray-700 pt-4">
          <div class="flex justify-between items-center mb-4">
            <span class="text-gray-400">Total</span>
            <span class="text-2xl font-bold text-yellow-500">R$ {{ totalPrice.toFixed(2) }}</span>
          </div>
          
          <button class="w-full py-3 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  </div>
</template>