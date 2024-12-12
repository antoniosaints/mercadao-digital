<script setup lang="ts">
import { ref } from 'vue';
import { StarIcon } from '@heroicons/vue/24/solid';
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';
import type { Product } from '../../types';
import { useCart } from '../../composables/useCart';
import ProductModal from './ProductModal.vue';

const props = defineProps<{
  product: Product;
}>();

const showModal = ref(false);
const { addToCart } = useCart();

const handleAddToCart = (e: Event) => {
  e.stopPropagation();
  addToCart(props.product);
};
</script>

<template>
  <div 
    class="bg-gray-800 rounded-lg overflow-hidden hover:ring-1 hover:ring-yellow-500 transition-all cursor-pointer"
    @click="showModal = true"
  >
    <img :src="product.image" :alt="product.name" class="w-full h-32 object-cover" />
    <div class="p-3">
      <div class="flex flex-col mb-2">
        <h3 class="text-sm font-medium text-yellow-500 truncate">{{ product.name }}</h3>
        <span class="text-sm font-bold text-yellow-500">R$ {{ product.price.toFixed(2) }}</span>
      </div>
      <p class="text-xs text-gray-400 mb-2 line-clamp-1">{{ product.description }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-1">
          <StarIcon class="w-3 h-3 text-yellow-500" />
          <span class="text-xs text-gray-400">{{ product.shop.rating }}</span>
        </div>
        <button 
          @click="handleAddToCart"
          class="px-2 py-1 bg-yellow-500 text-gray-900 rounded-full text-xs font-medium hover:bg-yellow-400 flex items-center gap-1"
        >
          <ShoppingCartIcon class="w-3 h-3" />
          Adicionar
        </button>
      </div>
    </div>

    <ProductModal
      :show="showModal"
      :product="product"
      @close="showModal = false"
    />
  </div>
</template>