<script setup lang="ts">
import { ref } from 'vue';
import { BellIcon } from '@heroicons/vue/24/outline';

const isOpen = ref(false);
const notifications = [
  { title: 'New message', time: '5m ago' },
  { title: 'System update', time: '1h ago' },
  { title: 'Task completed', time: '2h ago' },
];
</script>

<template>
  <div class="relative" @mouseleave="isOpen = false">
    <button
      @mouseenter="isOpen = true"
      class="p-2 rounded-full hover:bg-gray-100"
    >
      <BellIcon class="w-6 h-6 text-gray-600" />
    </button>
    
    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50"
    >
      <div class="px-4 py-2 border-b border-gray-100">
        <h3 class="text-sm font-semibold">Notifications</h3>
      </div>
      <div class="max-h-64 overflow-y-auto">
        <a
          v-for="notification in notifications"
          :key="notification.title"
          href="#"
          class="block px-4 py-3 hover:bg-gray-50"
        >
          <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
          <p class="text-xs text-gray-500">{{ notification.time }}</p>
        </a>
      </div>
    </div>
  </div>
</template>