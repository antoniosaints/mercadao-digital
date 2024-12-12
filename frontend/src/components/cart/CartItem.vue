<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline';
import type { Product } from '../../types';

const props = defineProps<{
  product: Product;
  quantity: number;
}>();

const emit = defineEmits<{
  (e: 'update:quantity', quantity: number): void;
  (e: 'remove'): void;
}>();
</script>

<template>
  <div class="flex items-center gap-4 py-4 border-b border-gray-700">
    <img :src="product.image" :alt="product.name" class="w-20 h-20 object-cover rounded" />
    <div class="flex-1">
      <h3 class="text-yellow-500 font-medium">{{ product.name }}</h3>
      <p class="text-gray-400 text-sm">{{ product.shop.name }}</p>
      <div class="flex items-center gap-4 mt-2">
        <div class="flex items-center gap-2">
          <button @click="emit('update:quantity', quantity - 1)"
            class="px-3 py-1 bg-gray-700 font-bold text-yellow-500 rounded hover:bg-gray-600">-</button>
          <span class="text-gray-300">{{ quantity }}</span>
          <button @click="emit('update:quantity', quantity + 1)"
            class="px-3 py-1 bg-gray-700 font-bold text-yellow-500 rounded hover:bg-gray-600">+</button>
        </div>
        <span class="text-yellow-500">{{ (product.price * quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
      </div>
    </div>
    <button @click="emit('remove')" class="p-2 text-gray-400 hover:text-yellow-500">
      <TrashIcon class="w-5 h-5" />
    </button>
  </div>
</template>