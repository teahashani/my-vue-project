<template>
  <div class="flex justify-start w-full mt-15 sm:mt-17 md:mt-20">
    <div class="bg-gradient-to-t from-white to-gray-200 w-full sm:w-[400px] h-[400px] rounded-2xl p-2 sm:p-4 grid grid-cols-2 grid-rows-2 gap-2 sm:ml-70 md:ml-100 lg:ml-160 xl:ml-200 2xl:ml-230">
      <!-- Loading State -->
      <div v-if="loading" class="col-span-2 row-span-2 flex items-center justify-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="col-span-2 row-span-2 flex items-center justify-center text-red-500">
        {{ error }}
      </div>

      <!-- Recipe Containers -->
      <div v-else v-for="recipe in recipes.slice(0, 4)" :key="recipe.id" 
           class="bg-white shadow-gray-300 p-2 rounded-lg text-center text-xs sm:text-sm text-gray-700 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
           @click="showRecipeDetails(recipe)">
        <img :src="recipe.image" :alt="recipe.title" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2">
        <h3 class="font-semibold truncate w-full">{{ recipe.title }}</h3>
        <p class="text-orange-400 text-xs sm:text-sm">{{ recipe.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GreyContainer',
  data() {
    return {
      recipes: [],
      loading: true,
      error: null
    }
  },
  methods: {
    async fetchRecipes() {
      try {
        this.loading = true;
        const response = await fetch(`${import.meta.env.VITE_RECIPE_API_URL}/random?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&number=4`);
        if (!response.ok) throw new Error('Failed to fetch recipes');
        const data = await response.json();
        this.recipes = data.recipes.map(recipe => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          price: `$${(Math.random() * 20 + 5).toFixed(2)}` // Simulated price
        }));
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    showRecipeDetails(recipe) {
      // Emit event to parent component to show recipe details
      this.$emit('show-recipe', recipe);
    }
  },
  mounted() {
    this.fetchRecipes();
  }
};
</script>

<style scoped>
.grey-container {
  background: linear-gradient(to top, #e1e1e1, #a9a8a8);
}
</style>
