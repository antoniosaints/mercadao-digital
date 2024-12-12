<script setup lang="ts">
import { ref } from 'vue';

interface MenuItem {
  label: string;
  icon?: any;
  href?: string;
  items?: MenuItem[];
}

defineProps<{
  label: string;
  items: MenuItem[];
}>();

const isOpen = ref(false);
</script>

<template>
  <div class="relative" @mouseleave="isOpen = false">
    <button
      @mouseenter="isOpen = true"
      class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
    >
      {{ label }}
    </button>
    
    <div
      v-show="isOpen"
      class="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
    >
      <a
        v-for="item in items"
        :key="item.label"
        :href="item.href"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>