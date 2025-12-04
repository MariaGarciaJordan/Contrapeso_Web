import type { CartItem, CartState } from "./cartTypes";

export const cartService = {
  addItem(item: CartItem) {
    console.log("addItem called", item);
  },

  removeItem(id: string) {
    console.log("removeItem called", id);
  },

  clearCart() {
    console.log("clearCart called");
  },

  getCart(): CartState {
    return {
      items: [],
      total: 0,
    };
  },
};
