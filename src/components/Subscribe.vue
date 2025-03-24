<template>
  <div class="relative flex justify-center">
    <div class="mt-[-450px] w-full sm:w-[450px] md:w-[680px] lg:w-[1380px] bg-black rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
      <div class="flex flex-col lg:flex-row">
        <!-- Empty left side -->
        <div class="hidden lg:block lg:w-1/2"></div>
        
        <div class="w-full lg:w-1/2 text-left">
          <h4 class="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">Subscribe to our Newsletter</h4>
          <p class="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci omnis magni reprehenderit ad. Saepe itaque, architecto et, quaerat ex unde id officiis ratione hic magnam, pariatur quo porro accusamus aliquid!</p>

          <!-- Email Input & Subscribe Button -->
          <div class="flex flex-row sm:flex-row items-stretch sm:items-center sm:gap-0 border border-gray-300 rounded-lg overflow-hidden w-full">
            <input
              type="email"
              placeholder="Enter your email..."
              class="w-full p-3 sm:p-4 outline-none text-black bg-white text-sm sm:text-base"
            />
            <button class="bg-orange-500 text-white px-6 py-3 sm:py-4 hover:bg-orange-700 transition text-sm sm:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe",
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: flex-start; 
}
</style>

