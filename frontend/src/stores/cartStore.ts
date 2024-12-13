import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '../types'
import { useToastStore } from './toastStore'

interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])
  const toastStore = useToastStore()

  const totalItems = computed(() => 
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() => 
    cartItems.value.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  )

  function addToCart(product: Product) {
    const existingItem = cartItems.value.find(item => item.product.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
      toastStore.show(`Quantidade de ${product.name} atualizada no carrinho`, 'success')
    } else {
      cartItems.value.push({ product, quantity: 1 })
      toastStore.show(`${product.name} adicionado ao carrinho`, 'success')
    }
  }

  function removeFromCart(productId: string) {
    const itemIndex = cartItems.value.findIndex(item => item.product.id === productId)
    if (itemIndex !== -1) {
      const item = cartItems.value[itemIndex]
      // Create a new array without the removed item to ensure reactivity
      cartItems.value = [
        ...cartItems.value.slice(0, itemIndex),
        ...cartItems.value.slice(itemIndex + 1)
      ]
      toastStore.show(`${item.product.name} removido do carrinho`, 'info')
    }
  }

  function updateQuantity(productId: string, quantity: number) {
    const item = cartItems.value.find(item => item.product.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        // Create a new array with the updated item to ensure reactivity
        cartItems.value = cartItems.value.map(cartItem => 
          cartItem.product.id === productId
            ? { ...cartItem, quantity }
            : cartItem
        )
        toastStore.show('Quantidade atualizada', 'success')
      }
    }
  }

  return {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
  }
})