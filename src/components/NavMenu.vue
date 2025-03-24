<template>
    <nav class="mx-auto">
      <ul class="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-10 list-none p-0 m-0">
        <li>
          <router-link to="/" 
                      class="text-black no-underline font-medium text-sm sm:text-base md:text-lg hover:text-orange-500 transition-colors">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/favorites" 
                      class="text-black no-underline font-medium text-sm sm:text-base md:text-lg hover:text-orange-500 transition-colors">
            Favorites
          </router-link>
        </li>
        <li>
          <router-link to="#" 
                      class="text-black no-underline font-medium text-sm sm:text-base md:text-lg hover:text-orange-500 transition-colors">
            About
          </router-link>
        </li>
        <li>
          <router-link to="#" 
                      class="text-black no-underline font-medium text-sm sm:text-base md:text-lg hover:text-orange-500 transition-colors">
            Service
          </router-link>
        </li>
        <li>
          <router-link to="#" 
                      class="text-black no-underline font-medium text-sm sm:text-base md:text-lg hover:text-orange-500 transition-colors">
            Shop
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavMenu',
  };
  </script>