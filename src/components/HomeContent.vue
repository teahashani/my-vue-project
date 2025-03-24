<template>
  <div class="w-full">
    <div class="container mx-auto px-4 py-4">
      <div class="relative">
        <GreyContainer />
        <LeftBox />
        <div class="relative">
          <HeroText />
          <div class="relative">
            <Flexbox />
          </div>
        </div>
        <Recepies ref="recipesComponent" />
        <FavouriteFood />
        <Choose />
        <Testimonial />
        <Subscribe />
      </div>
    </div>
  </div>
</template>
    
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import GreyContainer from './GreyContainer.vue';
import LeftBox from './LeftBox.vue';
import HeroText from './HeroText.vue';
import Flexbox from './Flexbox.vue'
import Recepies from './Recepies.vue'
import FavouriteFood from './FavouriteFood.vue'
import Choose from './Choose.vue'
import Testimonial from './Testimonial.vue'
import Subscribe from './Subscribe.vue'

const recipesComponent = ref(null);
const isProcessing = ref(false);

const handleSearch = async (query) => {
  if (isProcessing.value) return;
  
  console.log('HomeContent: Received search query:', query);
  isProcessing.value = true;
  
  try {
    // Wait for the next tick to ensure the component is mounted
    await nextTick();
    
    if (recipesComponent.value?.fetchRecipes) {
      console.log('HomeContent: Calling fetchRecipes on Recepies component');
      await recipesComponent.value.fetchRecipes(query);
    } else {
      console.error('HomeContent: Recepies component not found or fetchRecipes not available', {
        recipesComponent: recipesComponent.value
      });
    }
  } finally {
    isProcessing.value = false;
  }
};

onMounted(async () => {
  console.log('HomeContent: Component mounted');
  console.log('Recipes component ref:', recipesComponent.value);
  
  // Wait for the next tick to ensure the component is mounted
  await nextTick();
  
  // Initial fetch of recipes
  if (recipesComponent.value?.fetchRecipes) {
    console.log('HomeContent: Initial fetch of recipes');
    await recipesComponent.value.fetchRecipes();
  } else {
    console.error('HomeContent: Recepies component not found or fetchRecipes not available', {
      recipesComponent: recipesComponent.value
    });
  }
});

// Expose the handleSearch method to parent components
defineExpose({
  handleSearch
});
</script>
  