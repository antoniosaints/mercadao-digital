import { ref, computed } from "vue";
import type { Product } from "../types";
import { useToast } from "./useToast";

interface CartItem {
  product: Product;
  quantity: number;
}

export function useCart() {
  const cartItems = ref<CartItem[]>([
    {
      product: {
        category: "Alimento",
        description: "",
        id: "1",
        image: "pizza.jpg",
        name: "Pizza",
        price: 58.9,
        shop: {
          address: "",
          description: "",
          id: "1",
          image: "",
          name: "",
          rating: 0,
        },
      },
      quantity: 1,
    },
    {
      product: {
        category: "Alimento",
        description: "",
        id: "2",
        image: "hamb.webp",
        name: "Hamburguer",
        price: 29.9,
        shop: {
          address: "",
          description: "",
          id: "1",
          image: "",
          name: "",
          rating: 0,
        },
      },
      quantity: 1,
    },
  ]);
  const { showToast } = useToast();

  const totalItems = computed(() =>
    cartItems.value.length
  );

  const totalPrice = computed(() =>
    cartItems.value.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )
  );

  const addToCart = (product: Product) => {
    const existingItem = cartItems.value.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
      showToast(
        `Quantidade de ${product.name} atualizada no carrinho`,
        "success"
      );
    } else {
      cartItems.value.push({ product, quantity: 1 });
      showToast(`${product.name} adicionado ao carrinho`, "success");
    }
  };

  const removeFromCart = (productId: string) => {
    const item = cartItems.value.find((item) => item.product.id === productId);
    if (item) {
      cartItems.value = cartItems.value.filter(
        (item) => item.product.id !== productId
      );
      showToast(`${item.product.name} removido do carrinho`, "info");
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const item = cartItems.value.find((item) => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId);
      } else {
        item.quantity = quantity;
        showToast(`Quantidade atualizada`, "success");
      }
    }
  };

  return {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
}
