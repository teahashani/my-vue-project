<template>
  <div class="relative min-h-screen w-full">
    <div class="absolute top-[10%] sm:top-[-130px] md:top-[-14%] lg:top-[-18%] left-4 sm:left-8 md:left-12 lg:left-16 xl:left-24 w-fit px-4">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
        The Fastest<br> Delivery<br> <span class="text-orange-400">In Your City</span>
      </h1>
      <p class="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde reiciendis, <br> 
        ipsa praesentium iste dolores cumque earum odit quibusdam nihil explicabo eos veritatis <br> 
        obcaecati a et modi minus quae adipisci.
      </p>
      
      <!-- Order Buttons -->
      <div class="flex w-[360px] sm:w-[400px] md:w-[440px] lg:w-[480px] justify-between mt-8 sm:mt-10 md:mt-12">
        <!-- Order Now Button -->
        <div class="w-[170px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[45px] sm:h-[50px] md:h-[55px] rounded-lg bg-amber-500 hover:bg-orange-600 transition-colors">
          <button class="w-full h-full text-white font-bold text-sm sm:text-base">
            Order Now
          </button>
        </div>

        <!-- Order Process Button -->
        <button class="flex items-center bg-white text-black py-2 px-4 rounded-lg focus:outline-none hover:bg-gray-50 transition-colors w-[170px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
          <!-- Icon Circle -->
          <div class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center mr-2 shadow-md 
            hover:bg-gray-100 hover:shadow-lg transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span class="font-bold text-sm sm:text-base">Order Process</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroText',
};
</script>
