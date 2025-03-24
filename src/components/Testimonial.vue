<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
    <!-- Text -->
    <div class="relative text-center px-4 py-8 sm:py-10 md:py-1 space-y-2 sm:space-y-3 md:space-y-4 w-full 
      -mt-175 sm:-mt-160 md:-mt-135 lg:-mt-120">
      <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-orange-400 mb-1 sm:mb-2">Testimonials</h2>
      <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">Our Happy Client Says</h1>
    </div>

    <!-- Content -->
    <div class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mx-4 sm:mx-6 md:mx-8 lg:ml-[-10px] xl:ml-[-10px]">
      <div class="flex items-center justify-between gap-2 sm:gap-4">
        <!-- Left Button -->
        <button class="w-8 h-8 sm:w-10 sm:h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
          <span class="text-base sm:text-lg text-white">◀</span>
        </button>
        <div class="text-center flex-1 mx-2 sm:mx-4">
          <h4 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">Willians Jhone</h4>
          <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">CEO & Co-Founder</p>
          <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-2 line-clamp-3 sm:line-clamp-4">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit, quia minus fuga nemo repellat fugiat neque sit similique optio perferendis aliquam vitae excepturi dicta obcaecati delectus expedita! Eos, culpa!"
          </p>
        </div>
        <!-- Right Button -->
        <button class="w-8 h-8 sm:w-10 sm:h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
          <span class="text-base sm:text-lg text-white">▶</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .relative {
    margin-left: 10px;
  }
}

@media (min-width: 1280px) {
  .relative {
    margin-left: 2px;
  }
}
</style>

