<script setup lang="ts">
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
import { useToastStore } from '../../stores/toastStore'
import { storeToRefs } from 'pinia'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)

const getIcon = (type: string) => {
  switch (type) {
    case 'success': return CheckCircleIcon
    case 'error': return XCircleIcon
    default: return InformationCircleIcon
  }
}
</script>

<template>
  <div class="fixed bottom-4 right-4 z-50 space-y-2">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in"
      :class="{
        'bg-green-500': toast.type === 'success',
        'bg-red-500': toast.type === 'error',
        'bg-blue-500': toast.type === 'info'
      }"
    >
      <component :is="getIcon(toast.type)" class="w-5 h-5 text-white" />
      <span class="text-white">{{ toast.message }}</span>
      <button
        @click="toastStore.remove(toast.id)"
        class="ml-2 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>