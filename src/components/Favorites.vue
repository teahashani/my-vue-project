<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">My Favorite Recipes</h1>
    
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center min-h-[200px]">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>

    <!-- Empty State -->
    <div v-else-if="favorites.length === 0" class="text-center py-12">
      <p class="text-gray-600 text-lg">You haven't added any favorite recipes yet.</p>
      <router-link to="/" class="text-orange-500 hover:text-orange-600 mt-4 inline-block">
        Browse Recipes
      </router-link>
    </div>

    <!-- Favorites Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="recipe in favorites" :key="recipe.id" 
           class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <!-- Recipe Image -->
        <div class="relative h-48">
          <img :src="recipe.image" :alt="recipe.title" 
               class="w-full h-full object-cover">
          <button @click="removeFavorite(recipe.id)"
                  class="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Recipe Info -->
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2 line-clamp-2">{{ recipe.title }}</h3>
          <div class="flex items-center text-sm text-gray-600 mb-2">
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              {{ recipe.readyInMinutes }} mins
            </span>
            <span class="mx-2">•</span>
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              {{ recipe.servings }} servings
            </span>
          </div>
          <p class="text-gray-600 text-sm line-clamp-2">{{ recipe.summary }}</p>
        </div>

        <!-- View Recipe Button -->
        <div class="p-4 border-t">
          <button @click="viewRecipe(recipe)"
                  class="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useFavoritesStore } from '../stores/favorites';

const router = useRouter();
const favoritesStore = useFavoritesStore();
const loading = ref(true);

// Get favorites from store
const favorites = computed(() => favoritesStore.getFavorites);

// Load favorites from localStorage 
onMounted(() => {
  favoritesStore.loadFavorites();
  loading.value = false;
});

// Remove recipe from favorites
const removeFavorite = (recipeId) => {
  favoritesStore.removeFavorite(recipeId);
};

// View recipe details
const viewRecipe = (recipe) => {
  // Navigate to recipe details page or show modal
  console.log('Viewing recipe:', recipe.title);
};
</script> 