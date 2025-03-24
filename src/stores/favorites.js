import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),

  getters: {
    getFavorites: (state) => state.favorites,
    isFavorite: (state) => (recipeId) => {
      return state.favorites.some(recipe => recipe.id === recipeId);
    }
  },

  actions: {
    addFavorite(recipe) {
      if (!this.isFavorite(recipe.id)) {
        this.favorites.push(recipe);
        // Save to localStorage
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      }
    },

    removeFavorite(recipeId) {
      this.favorites = this.favorites.filter(recipe => recipe.id !== recipeId);
      // Save to localStorage
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },

    loadFavorites() {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        this.favorites = JSON.parse(savedFavorites);
      }
    }
  }
}); 