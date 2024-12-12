<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="fixed inset-0 bg-black bg-opacity-50" @click="emit('close')" />
      <div class="flex min-h-screen items-center justify-center p-4">
        <div class="relative bg-gray-800 rounded-lg max-w-2xl w-full">
          <button
            @click="emit('close')"
            class="absolute right-4 top-4 text-gray-400 hover:text-yellow-500"
          >
            <XMarkIcon class="w-6 h-6" />
          </button>
          <div class="p-6">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>