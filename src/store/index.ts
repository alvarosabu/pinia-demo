import { defineStore, acceptHMRUpdate } from 'pinia';
export const useStore = defineStore('market', {
  state: () => ({
    market: 24,
    cart: 0,
    price: 120,
  }),
  getters: {
    availablePinias(state) {
      return state.market - state.cart;
    },
    total(state) {
      return state.cart * state.price;
    },
  },
  actions: {
    addToCart(amount: number) {
      this.cart += amount;
    },
    removeFromCart(amount: number) {
      if (amount > this.cart) {
        this.cart = 0;
      } else {
        this.cart -= amount;
      }
    },
    procedeCheckout() {
      this.market -= this.cart;
      this.cart = 0;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
