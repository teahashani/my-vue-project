<template>
  <div class="relative mt-[30px] sm:mt-[20px] md:mt-[15px] lg:mt-[45px]">
    <!-- Title -->
    <div class="relative">
      <div class="text-center mb-4 sm:mb-6 md:mb-8">
        <div class="mb-2 sm:mb-3">
          <h2 class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light text-orange-400">Product</h2>
          <h1 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-tight mt-1 sm:mt-2">Most Popular Items</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center p-1 sm:p-2 md:p-4 lg:p-6">
      <!-- Loading  -->
      <div v-if="loading" class="text-center w-full max-w-7xl mx-auto">
        <div class="animate-pulse space-y-2 sm:space-y-3 md:space-y-4">
          <div class="h-4 sm:h-5 md:h-6 bg-gray-200 rounded w-1/4 mx-auto"></div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-3">
            <div v-for="n in 6" :key="n" class="bg-white rounded-lg shadow-md p-1 sm:p-2 md:p-3">
              <div class="h-24 sm:h-32 md:h-40 bg-gray-200 rounded mb-1 sm:mb-2"></div>
              <div class="h-2 sm:h-3 md:h-4 bg-gray-200 rounded w-3/4 mb-1 sm:mb-2"></div>
              <div class="h-2 sm:h-3 md:h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error -->
      <div v-if="error" class="text-center text-red-500 p-2 sm:p-3 md:p-4 bg-red-50 rounded-lg w-full max-w-7xl mx-auto">
        <p class="font-semibold text-xs sm:text-sm md:text-base">Error loading recipes</p>
        <p class="text-[10px] sm:text-xs md:text-sm">{{ error }}</p>
      </div>

      <!-- No Results -->
      <div v-else-if="recipes.length === 0" class="text-center text-gray-600 w-full max-w-7xl mx-auto p-2 sm:p-3 md:p-4">
        <p class="text-xs sm:text-sm md:text-base">No recipes found. Try a different search term.</p>
      </div>

      <!-- Recipe Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-3 lg:gap-4 w-full max-w-7xl mx-auto">
        <div v-for="recipe in recipes" :key="recipe.id" 
             class="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
          <!-- Recipe Image -->
          <div class="w-full h-24 sm:h-32 md:h-40 lg:h-48 bg-gray-200 relative">
            <img :src="recipe.image" :alt="recipe.title" class="w-full h-full object-cover" />
            <!-- Favorite Button -->
            <button @click="toggleFavorite(recipe)"
                    class="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-md hover:bg-orange-200 transition-colors z-10">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   :class="isFavorite(recipe.id) ? 'text-red-500 fill-current' : 'text-gray-500'"
                   class="h-5 w-5 sm:h-6 sm:w-6" 
                   viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
            
          </div>

          <!-- Recipe Content -->
          <div class="p-1 sm:p-2 md:p-3 flex flex-col flex-grow">
            <h3 class="text-xs sm:text-sm md:text-base font-semibold mb-0.5 sm:mb-1 line-clamp-2">{{ recipe.title }}</h3>
            
            <!-- Quick Info -->
            <div class="flex justify-between items-center mb-1 sm:mb-2">
              <div class="flex items-center text-[10px] sm:text-xs text-gray-600">
                <i class="fas fa-clock mr-0.5 sm:mr-1"></i>
                {{ recipe.readyInMinutes }} mins
              </div>
              <div class="flex items-center text-[10px] sm:text-xs text-gray-600">
                <i class="fas fa-users mr-0.5 sm:mr-1"></i>
                {{ recipe.servings }} servings
              </div>
            </div>

            <!-- Ingredients Preview -->
            <div class="mb-1 sm:mb-2">
              <h4 class="text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5">Key Ingredients:</h4>
              <div class="flex flex-wrap gap-0.5 sm:gap-1">
                <span v-if="recipe.extendedIngredients && recipe.extendedIngredients.length > 0">
                  <span v-for="(ingredient, index) in recipe.extendedIngredients.slice(0, 3)" 
                        :key="index"
                        class="text-[8px] sm:text-[10px] bg-gray-100 px-1 sm:px-1.5 py-0.5 rounded-full">
                    {{ ingredient.name }}
                  </span>
                  <span v-if="recipe.extendedIngredients.length > 3" 
                        class="text-[8px] sm:text-[10px] bg-gray-100 px-1 sm:px-1.5 py-0.5 rounded-full">
                    +{{ recipe.extendedIngredients.length - 3 }} more
                  </span>
                </span>
                <span v-else class="text-[8px] sm:text-[10px] text-gray-500">
                  No ingredients listed
                </span>
              </div>
            </div>

            <!-- Instructions Preview -->
            <div class="mb-1 sm:mb-2">
              <h4 class="text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5">Instructions:</h4>
              <p class="text-[8px] sm:text-[10px] text-gray-600 line-clamp-2">
                {{ recipe.instructions || 'No instructions available' }}
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="mt-auto flex justify-between items-center">
              <button @click="viewRecipeDetails(recipe)" 
                      class="text-orange-500 hover:text-orange-600 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full hover:bg-orange-50 transition-colors">
                View Details
              </button>
              <button @click="addToCart(recipe)" 
                      class="bg-orange-400 text-white py-0.5 sm:py-1 px-2 sm:px-3 rounded-full text-[10px] sm:text-xs hover:bg-orange-500 transition-colors flex items-center">
                <i class="fas fa-shopping-cart mr-0.5 sm:mr-1"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

       <!-- See More Button -->
      <div class="flex justify-center mt-4 sm:mt-6 md:mt-8">
     <button class="bg-orange-400 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2 rounded-full hover:bg-orange-500 transition-colors text-sm sm:text-base md:text-lg font-semibold flex items-center gap-2">
      See More
      <span class="bg-white rounded-full p-1 sm:p-1.5 md:p-2 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>
  </button>
</div>
 </div>

    <!-- Recipe Details -->
    <div v-if="selectedRecipe" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-1 sm:p-2 md:p-4 z-50">
      <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-2 sm:p-3 md:p-4 lg:p-6">
          <div class="flex justify-between items-start mb-2 sm:mb-3 md:mb-4">
            <h2 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold">{{ selectedRecipe.title }}</h2>
            <button @click="selectedRecipe = null" 
                    class="text-gray-500 hover:text-gray-700 p-1 sm:p-1.5 rounded-full hover:bg-gray-100">
              <i class="fas fa-times text-xs sm:text-sm"></i>
            </button>
          </div>

          <img :src="selectedRecipe.image" 
               :alt="selectedRecipe.title" 
               class="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-2 sm:mb-3 md:mb-4">

          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <!-- Ingredients -->
            <div>
              <h3 class="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Ingredients</h3>
              <ul v-if="selectedRecipe.extendedIngredients && selectedRecipe.extendedIngredients.length > 0" 
                  class="space-y-1 sm:space-y-2 max-h-[300px] overflow-y-auto pr-1 sm:pr-2">
                <li v-for="ingredient in selectedRecipe.extendedIngredients" 
                    :key="ingredient.id"
                    class="flex items-center">
                  <span class="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center bg-orange-100 rounded-full mr-1 sm:mr-2 flex-shrink-0">
                    <i class="fas fa-check text-orange-500 text-[8px] sm:text-xs"></i>
                  </span>
                  <span class="text-[10px] sm:text-xs md:text-sm">{{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}</span>
                </li>
              </ul>
              <p v-else class="text-gray-500 text-[10px] sm:text-xs md:text-sm">No ingredients listed</p>
            </div>

            <!-- Instructions -->
            <div>
              <h3 class="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Instructions</h3>
              <ol v-if="selectedRecipe.analyzedInstructions && selectedRecipe.analyzedInstructions[0]?.steps" 
                  class="space-y-1 sm:space-y-2 max-h-[300px] overflow-y-auto pr-1 sm:pr-2">
                <li v-for="(step, index) in selectedRecipe.analyzedInstructions[0].steps" 
                    :key="index"
                    class="flex">
                  <span class="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center bg-orange-100 rounded-full mr-1 sm:mr-2 flex-shrink-0 text-[8px] sm:text-xs">
                    {{ index + 1 }}
                  </span>
                  <span class="text-[10px] sm:text-xs md:text-sm">{{ step.step }}</span>
                </li>
              </ol>
              <p v-else class="text-gray-500 text-[10px] sm:text-xs md:text-sm">No instructions available</p>
            </div>
          </div>

          <div class="mt-2 sm:mt-3 md:mt-4 flex justify-end">
            <button @click="addToCart(selectedRecipe)" 
                    class="bg-orange-400 text-white py-1 sm:py-1.5 px-3 sm:px-4 rounded-full hover:bg-orange-500 transition-colors flex items-center text-[10px] sm:text-xs md:text-sm">
              <i class="fas fa-shopping-cart mr-0.5 sm:mr-1"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { recipeService } from '../services/recipeService';
import { useFavoritesStore } from '../stores/favorites';

const recipes = ref([]);
const loading = ref(false);
const error = ref(null);
const selectedRecipe = ref(null);

const favoritesStore = useFavoritesStore();

// Get favorites from store
const favorites = computed(() => favoritesStore.getFavorites);

const fetchRecipes = async (query = '') => {
  loading.value = true;
  error.value = null;
  
  try {
    console.log('Fetching recipes with query:', query);
    const results = await recipeService.searchRecipes(query);
    console.log('Fetched recipes:', results);
    recipes.value = results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    recipes.value = [];
    error.value = error.message || 'Failed to fetch recipes. Please try again later.';
  } finally {
    loading.value = false;
  }
};

const viewRecipeDetails = (recipe) => {
  selectedRecipe.value = recipe;
};

const addToCart = (recipe) => {
  // TODO: Implement cart functionality
  console.log(`Added ${recipe.title} to cart`);
};

// Toggle favorite status
const toggleFavorite = (recipe) => {
  if (isFavorite(recipe.id)) {
    removeFromFavorites(recipe.id);
  } else {
    addToFavorites(recipe);
  }
};

// Add to favorites
const addToFavorites = (recipe) => {
  favoritesStore.addFavorite(recipe);
};

// Remove from favorites
const removeFromFavorites = (recipeId) => {
  favoritesStore.removeFavorite(recipeId);
};

// Check if recipe is favorite
const isFavorite = (recipeId) => {
  return favoritesStore.isFavorite(recipeId);
};

onMounted(async () => {
  console.log('Component mounted, fetching initial recipes...');
  await fetchRecipes();
});

// Expose the fetchRecipes function to be called from parent components
defineExpose({
  fetchRecipes
});
</script>
  