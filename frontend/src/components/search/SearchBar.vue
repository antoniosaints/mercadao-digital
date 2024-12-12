<script setup lang="ts">
import { ref } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const emit = defineEmits<{
  (e: 'search', query: string): void;
}>();

const searchQuery = ref('');

const handleSearch = () => {
  emit('search', searchQuery.value);
};
</script>

<template>
  <div class="relative max-w-2xl mx-auto mb-8">
    <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar produtos, lojas ou categorias..."
        class="w-full px-4 py-3 pl-12 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        @keyup.enter="handleSearch"
      />
      <MagnifyingGlassIcon 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
      />
    </div>
  </div>
</template>