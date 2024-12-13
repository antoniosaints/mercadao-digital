<script setup lang="ts">
import { StarIcon, MapPinIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import type { Product } from '../../types'
import Modal from '../ui/Modal.vue'
import { useCartStore } from '../../stores/cartStore'

const props = defineProps<{
  show: boolean
  product: Product
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const cartStore = useCartStore()

const handleAddToCart = () => {
  cartStore.addToCart(props.product)
}
</script>

<template>
  <Modal :show="show" @close="emit('close')">
    <div class="flex flex-col">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-64 object-cover rounded-lg mb-4"
      />
      
      <div class="space-y-4">
        <div>
          <h2 class="text-2xl font-bold text-yellow-500">{{ product.name }}</h2>
          <p class="text-gray-400 mt-1">{{ product.description }}</p>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold text-yellow-500">
            {{ product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) }}
          </span>
          <button 
            @click="handleAddToCart"
            class="px-4 py-2 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400 flex items-center gap-2"
          >
            <ShoppingCartIcon class="w-5 h-5" />
            Adicionar ao Carrinho
          </button>
        </div>

        <div class="border-t border-gray-700 pt-4">
          <h3 class="text-lg font-semibold text-yellow-500 mb-2">Informações da Loja</h3>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <UserCircleIcon class="w-5 h-5 text-yellow-500" />
              <span class="text-gray-300">{{ product.shop.name }}</span>
            </div>
            <div class="flex items-center gap-2">
              <StarIcon class="w-5 h-5 text-yellow-500" />
              <span class="text-gray-300">{{ product.shop.rating }} estrelas</span>
            </div>
            <div class="flex items-center gap-2">
              <MapPinIcon class="w-5 h-5 text-yellow-500" />
              <span class="text-gray-300">{{ product.shop.address }}</span>
            </div>
            <p class="text-gray-400">{{ product.shop.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>