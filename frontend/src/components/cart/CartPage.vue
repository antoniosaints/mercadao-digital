<script setup lang="ts">
import { useCart } from '../../composables/useCart';
import CartItem from './CartItem.vue';

const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
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
            @update:quantity="qty => updateQuantity(item.product.id, qty)"
            @remove="removeFromCart(item.product.id)"
          />
        </div>
        
        <div class="mt-8 border-t border-gray-700 pt-4">
          <div class="flex justify-between items-center mb-4">
            <span class="text-gray-400 text-xl">Total</span>
            <span class="text-2xl font-bold text-yellow-500">{{ totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
          </div>
          
          <button class="w-full py-3 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  </div>
</template>