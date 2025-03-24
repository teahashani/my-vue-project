import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    favorites: [], // Array to hold favorite items
  }),
  actions: {
    addFavorite(item) {
      this.favorites.push(item);
    },
    removeFavorite(itemId) {
      this.favorites = this.favorites.filter(item => item.id !== itemId);
    },
  },
});