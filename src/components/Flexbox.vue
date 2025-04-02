<template>
  <div class="relative mt-[-500px] sm:mt-[-600px] md:mt-[-500px] lg:mt-[-500px] xl:mt-[-410px]">
    <div class="flex flex-col sm:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
      <!-- First Box -->
      <div class="w-full sm:w-1/3 h-24 sm:h-28 md:h-32 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none border border-gray-200 flex flex-col items-center justify-center bg-white relative">
        <div class="absolute -top-6 sm:-top-6 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
          <i class="fas fa-clock text-orange-400 text-sm sm:text-base md:text-lg"></i>
        </div>
        <div class="flex flex-col items-center mt-6 sm:mt-3">
          <p class="text-xs sm:text-sm md:text-base lg:text-lg leading-tight sm:leading-snug font-semibold text-black break-words">Today 10:00am - 10:00pm</p>
          <p class="text-xs sm:text-sm md:text-base leading-tight sm:leading-snug text-gray-600 break-words">Working time</p>
        </div>
      </div>

      <!-- Second Box -->
      <div class="w-full sm:w-1/3 h-24 sm:h-28 md:h-32 border border-gray-200 flex flex-col items-center justify-center bg-white relative">
        <div class="absolute -top-3 sm:-top-6 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
          <i class="fas fa-location-dot text-orange-400 text-sm sm:text-base md:text-lg"></i>
        </div>
        <div class="flex flex-col items-center mt-6 sm:mt-3">
          <p class="text-xs sm:text-sm md:text-base lg:text-lg leading-tight sm:leading-snug font-semibold text-black break-words">Washington, D.C., DC, USA</p>
          <p class="text-xs sm:text-sm md:text-base leading-tight sm:leading-snug text-gray-600 break-words">Our Location</p>
        </div>
      </div>

      <!-- Third Box -->
      <div class="w-full sm:w-1/3 h-24 sm:h-28 md:h-32 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none border border-gray-200 flex flex-col items-center justify-center bg-white relative">
        <div class="absolute -top-3 sm:-top-6 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
          <i class="fas fa-phone text-orange-400 text-sm sm:text-base md:text-lg"></i>
        </div>
        <div class="flex flex-col items-center mt-6 sm:mt-3">
          <p class="text-xs sm:text-sm md:text-base lg:text-lg leading-tight sm:leading-snug font-semibold text-black break-words">+0123 456 7891</p>
          <p class="text-xs sm:text-sm md:text-base leading-tight sm:leading-snug text-gray-600 break-words">Phone Number</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flexbox",
  mounted() {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    document.head.appendChild(link)
  }
};
</script>



