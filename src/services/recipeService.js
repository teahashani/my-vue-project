import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

// Log environment variables for debugging
console.log('Environment variables:', {
  API_KEY: API_KEY ? 'Present' : 'Missing',
  BASE_URL
});

export const recipeService = {
  async searchRecipes(query = '') {
    try {
      console.log('Starting recipe search with query:', query);
      console.log('API Key:', API_KEY);
      
      const url = `${BASE_URL}/complexSearch`;
      const params = {
        apiKey: API_KEY,
        query,
        number: 6,
        addRecipeInformation: true,
        addRecipeNutrition: true,
        instructionsRequired: true,
        fillIngredients: true
      };
      
      console.log('Making API request to:', url);
      console.log('With params:', params);
      
      const response = await axios.get(url, { params });
      
      console.log('API Response status:', response.status);
      console.log('API Response data:', response.data);

      if (!response.data || !response.data.results) {
        console.error('Invalid API response format:', response.data);
        throw new Error('Invalid API response format');
      }

      // Fetch detailed information for recipe
      console.log('Fetching detailed information for recipes...');
      const detailedRecipes = await Promise.all(
        response.data.results.map(async (recipe) => {
          try {
            console.log(`Fetching details for recipe ${recipe.id}`);
            const details = await this.getRecipeDetails(recipe.id);
            return {
              ...recipe,
              ...details
            };
          } catch (error) {
            console.error(`Error fetching details for recipe ${recipe.id}:`, error);
            return recipe;
          }
        })
      );

      console.log('Final detailed recipes:', detailedRecipes);
      return detailedRecipes;
    } catch (error) {
      console.error('Full error object:', error);
      console.error('Error response:', error.response);
      console.error('Error message:', error.message);
      
      if (error.response?.status === 402) {
        throw new Error('API daily limit reached. Please try again later or contact support.');
      }
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your API key configuration.');
      }
      console.error('API Error:', error.response?.data || error);
      throw new Error('Failed to fetch recipes. Please try again later.');
    }
  },

  async getRecipeDetails(id) {
    try {
      console.log(`Fetching details for recipe ID: ${id}`);
      const response = await axios.get(`${BASE_URL}/${id}/information`, {
        params: {
          apiKey: API_KEY
        }
      });

      if (!response.data) {
        console.error('Invalid recipe details response:', response);
        throw new Error('Invalid API response format');
      }

      return response.data;
    } catch (error) {
      console.error(`Error fetching recipe details for ID ${id}:`, error);
      if (error.response?.status === 402) {
        throw new Error('API daily limit reached. Please try again later or contact support.');
      }
      throw new Error('Failed to fetch recipe details. Please try again later.');
    }
  }
}; 