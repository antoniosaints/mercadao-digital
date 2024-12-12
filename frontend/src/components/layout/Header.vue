<script setup lang="ts">
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import { useCart } from '../../composables/useCart';

const emit = defineEmits<{
  (e: 'toggle-cart'): void;
}>();

const { totalItems } = useCart();
</script>

<template>
  <header class="bg-gray-800 shadow-md fixed top-0 right-0 left-0 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-bold text-yellow-500">Mercadão Online</h1>
        </div>
        
        <div class="flex items-center space-x-4">
          <button 
            @click="emit('toggle-cart')"
            class="p-2 rounded-full hover:bg-gray-700 relative"
          >
            <ShoppingBagIcon class="w-6 h-6 text-yellow-500" />
            <span 
              v-if="totalItems > 0"
              class="absolute -top-1 -right-1 bg-yellow-500 text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ totalItems }}
            </span>
          </button>
          <button class="p-2 rounded-full hover:bg-gray-700">
            <UserCircleIcon class="w-6 h-6 text-yellow-500" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
