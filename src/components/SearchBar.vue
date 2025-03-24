<template>
  <div class="flex justify-start w-full">
    <div class="relative w-full sm:w-auto ml-2 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16">
      <div class="flex items-center bg-white p-1.5 sm:p-2 md:p-3 rounded-md shadow-md w-full sm:w-56 md:w-64 lg:w-72 xl:w-80">
        <i class="fas fa-search absolute left-2 sm:left-3 text-gray-500 text-xs sm:text-sm md:text-base"></i>
        <input 
          type="text" 
          v-model="searchQuery"
          @input="debouncedSearch"
          placeholder="Search..." 
          class="border-none outline-none text-xs sm:text-sm md:text-base w-full pl-6 sm:pl-8 md:pl-10">
        <div class="h-3 sm:h-4 w-0.5 bg-gray-300 mx-1.5 sm:mx-2 hidden sm:block"></div>
        <i class="fas fa-shopping-bag text-base sm:text-lg md:text-xl text-gray-500 cursor-pointer"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['search']);
let searchTimeout = null;

const debouncedSearch = () => {
  try {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
      console.log('SearchBar: Emitting search event with query:', searchQuery.value);
      emit('search', searchQuery.value);
    }, 300);
  } catch (error) {
    console.error('Error in debouncedSearch:', error);
  }
};

onUnmounted(() => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
});
</script>

<style scoped>
@media (max-width: 640px) {
  .relative {
    justify-content: flex-start;
    margin-left: 8px;
  }
  .flex {
    justify-content: flex-start;
  }
}

@media (min-width: 641px) {
  .relative {
    margin-left: 16px;
  }
}

@media (min-width: 768px) {
  .relative {
    margin-left: 32px;
  }
}

@media (min-width: 1024px) {
  .relative {
    margin-left: 48px;
  }
}

@media (min-width: 1280px) {
  .relative {
    margin-left: 64px;
  }
}
</style>

