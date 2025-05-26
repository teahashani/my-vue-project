<template>
  <header class="w-full fixed top-0 left-0 bg-white text-black py-2 sm:py-3 md:py-4 flex justify-center font-montserrat z-50 shadow-sm">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
      <img 
            src="/logo.png" 
            alt="Logo" 
            class="w-[100px] lg:h-[50px] h-auto mx-auto scale-110 -mt-22 rounded-l-2xl md:-ml-1 lg:ml-6 xl:ml-17 lg:-mt-2 md:-mt-2 sm:-mt-2 2xl:-ml-10"
          />
      
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="lg:hidden text-xl sm:text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <NavMenu />
        <SearchBar @search="handleSearch" />
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" 
           class="lg:hidden fixed top-[60px] sm:top-[72px] left-0 w-full bg-white shadow-lg border-t">
        <div class="px-4 py-4">
          <NavMenu class="flex-col space-y-4" />
          <div class="mt-4">
            <SearchBar @search="handleSearch" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import NavMenu from './NavMenu.vue';
import SearchBar from './SearchBar.vue';

const isMenuOpen = ref(false);
const emit = defineEmits(['search']);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleSearch = (query) => {
  console.log('Header: Received search query:', query);
  emit('search', query);
};
</script>

<style scoped>
@font-face {
  font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
}
</style>
  