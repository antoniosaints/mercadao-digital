<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/layout/Header.vue';
import SearchBar from './components/search/SearchBar.vue';
import ProductGrid from './components/products/ProductGrid.vue';
import CartPage from './components/cart/CartPage.vue';
import Toast from './components/ui/Toast.vue';
import { useSearch } from './composables/useSearch';

const showCart = ref(false);
const { filteredProducts, updateSearch } = useSearch();

const handleSearch = (query: string) => {
  updateSearch({ query });
};
</script>

<template>
  <div class="min-h-screen bg-gray-900">
    <Header @toggle-cart="showCart = !showCart" />
    
    <CartPage v-if="showCart" />
    
    <main v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div class="py-8">
        <h1 class="text-2xl font-semibold text-yellow-500 text-center mb-8">
          Descubra Lojas e Produtos Locais
        </h1>
        
        <SearchBar @search="handleSearch" />
        
        <ProductGrid :products="filteredProducts" />
      </div>
    </main>

    <Toast />
  </div>
</template>