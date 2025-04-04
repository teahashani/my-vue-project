<template>
 <div class="relative">
    <!-- Text -->
    <div class="absolute top-[205%] sm:top-[200%] md:top-[195%] lg:top-[190%] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center px-4 py-8 sm:py-35 md:py-38 space-y-2 sm:space-y-3 md:space-y-4 w-full">
      <h2 class="text-base sm:text-lg md:text-xl lg:text-xl font-light text-orange-400 mb-1 sm:mb-2">Services</h2>
      <h1 class="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-bold leading-tight">Why Choose Our Favourite Food</h1>
    </div> 
</div>

  <div class="flex flex-col items-center justify-center mt-[125px] sm:mt-[205px] md:mt-[250px] lg:mt-[250px] p-4 sm:p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
      
      <!-- First Box -->
      <div class="w-full h-64 sm:h-80 bg-white text-gray-800 flex items-center justify-center rounded-lg shadow-md outline-2 outline-gray-200 relative">
        <div class="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-md">
          <i class="fas fa-clock text-orange-400 text-xl sm:text-2xl"></i>
        </div>
        <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center px-4">
          <p class="text-sm sm:text-base text-black font-semibold">Qualityfull Food</p>
          <p class="text-xs sm:text-sm text-gray-600 mt-2">But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bron</p>
        </div>
      </div>

      <!-- Second Box -->
      <div class="w-full h-64 sm:h-80 bg-white text-gray-800 flex items-center justify-center rounded-lg shadow-md outline-2 outline-gray-200 relative">
        <div class="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-md">
          <i class="fas fa-utensils text-orange-400 text-xl sm:text-2xl"></i>
        </div>
        <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center px-4">
          <p class="text-sm sm:text-base text-black font-semibold">Healthy Food</p>
          <p class="text-xs sm:text-sm text-gray-600 mt-2">But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bron</p>
        </div>
      </div>

      <!-- Third Box -->
      <div class="w-full h-64 sm:h-80 bg-white text-gray-800 flex items-center justify-center rounded-lg shadow-md outline-2 outline-gray-200 relative">
        <div class="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-md">
          <i class="fas fa-truck text-orange-400 text-xl sm:text-2xl"></i>
        </div>
        <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center px-4">
          <p class="text-sm sm:text-base text-black font-semibold">Fast Delivery</p>
          <p class="text-xs sm:text-sm text-gray-600 mt-2">But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bron</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavouriteFood",
  mounted() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(link);
  }
};
</script>

      