<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-28 pt-20 sm:pt-28 md:pt-66 -translate-y-4 2xl:top-30">
    <!-- Heading (floats above) -->
    <div class="absolute top-28 sm:top-36 md:top-24 text-center px-4 space-y-2 sm:space-y-3 md:space-y-4 2xl:-top-3">
      <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-orange-400 mb-1">
        Testimonials
      </h2>
      <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
        Our Happy Client Says
      </h1>
    </div>

    <div class="hidden lg:block lg:w-1/2 relative">
          <img 
            src="/background.png" 
            alt="Background" 
            class="w-[400px] lg:h-[270px] xl:h-[290px] 2xl:h-[290px] h-auto mx-auto scale-110 -mt-22 rounded-l-2xl md:-ml-10 lg:ml-80 lg:-mt-130 xl:ml-80 xl:-mt-120 2xl:ml-100 2xl:-mt-170"
          />
        </div>
    <!-- Testimonial Card (Fixed Left Margin Removed) -->
    <div
    class="testimonial-box w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-lg p-4 sm:p-12 md:p-10 mx-auto sm:-mt-75 md:-mt-120 2xl:-mt-160 sm:ml-15 md:-ml-2 xl:ml-8 lg:mr-100 xl:mr-170 2xl:mr-200"
    >
      <div class="flex items-center justify-between gap-2 sm:gap-4">
        <!-- Left Button -->
        <button
          class="w-8 h-8 sm:w-10 sm:h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
        >
          <span class="text-base sm:text-lg text-white">◀</span>
        </button>

        <!-- Testimonial Content -->
        <div class="text-center flex-1 mx-2 sm:mx-4">
          <h4 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">Willians Jhone</h4>
          <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">CEO & Co-Founder</p>
          <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-2 line-clamp-3 sm:line-clamp-4">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit, quia minus fuga nemo repellat fugiat neque sit similique optio perferendis aliquam vitae excepturi dicta obcaecati delectus expedita! Eos, culpa!"
          </p>
        </div>

        <!-- Right Button -->
        <button
          class="w-8 h-8 sm:w-10 sm:h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
        >
          <span class="text-base sm:text-lg text-white">▶</span>
        </button>
      </div>
    </div>
  </div>
</template>
