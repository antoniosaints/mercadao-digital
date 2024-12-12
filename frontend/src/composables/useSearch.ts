import { ref, computed } from 'vue';
import type { Product, SearchFilters } from '../types';
import { products } from '../data/products';

export function useSearch() {
  const searchFilters = ref<SearchFilters>({
    query: '',
    category: undefined,
    minPrice: undefined,
    maxPrice: undefined,
  });

  const filteredProducts = computed(() => {
    return products.filter(product => {
      const matchesQuery = product.name.toLowerCase().includes(searchFilters.value.query.toLowerCase()) ||
        product.description.toLowerCase().includes(searchFilters.value.query.toLowerCase()) ||
        product.shop.name.toLowerCase().includes(searchFilters.value.query.toLowerCase());

      const matchesCategory = !searchFilters.value.category || 
        product.category === searchFilters.value.category;

      const matchesPrice = (!searchFilters.value.minPrice || product.price >= searchFilters.value.minPrice) &&
        (!searchFilters.value.maxPrice || product.price <= searchFilters.value.maxPrice);

      return matchesQuery && matchesCategory && matchesPrice;
    });
  });

  const updateSearch = (filters: Partial<SearchFilters>) => {
    searchFilters.value = {
      ...searchFilters.value,
      ...filters,
    };
  };

  return {
    searchFilters,
    filteredProducts,
    updateSearch,
  };
}