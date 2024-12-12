export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  shop: Shop;
  category: string;
}

export interface Shop {
  id: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  image: string;
}

export interface SearchFilters {
  query: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}