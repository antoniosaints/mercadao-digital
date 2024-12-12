<script setup lang="ts">
import { ref } from 'vue';
import { UserCircleIcon } from '@heroicons/vue/24/outline';

const isOpen = ref(false);

const userMenuItems = [
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Sign out', href: '/logout' },
];
</script>

<template>
  <div class="relative" @mouseleave="isOpen = false">
    <button
      @mouseenter="isOpen = true"
      class="p-2 rounded-full hover:bg-gray-100"
    >
      <UserCircleIcon class="w-6 h-6 text-gray-600" />
    </button>
    
    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
    >
      <a
        v-for="item in userMenuItems"
        :key="item.label"
        :href="item.href"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>