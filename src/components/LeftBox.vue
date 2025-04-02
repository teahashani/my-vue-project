<template>
  <div class="relative w-full sm:w-auto">
    <div class="absolute top-[-10px] sm:top-[-300px] md:top-[-250px] lg:top-[-340px] left-2 sm:left-11 md:left-13 lg:left-18 transform w-[50%] sm:w-[150px] md:w-[170px] lg:w-[200px] h-10 sm:h-12 bg-orange-100 rounded-2xl flex items-center justify-between px-3 sm:px-4 shadow-md my-4">
      <p class="m-0 font-regular text-orange-400 text-sm sm:text-base">Bike Delivery</p>
      <div class="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border-1 border-gray-400 bg-white rounded-full">
        <Bike class="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
      </div>
    </div>
  </div>
</template>

<script>
import { Bike } from "lucide-vue-next";

export default {
  name: "LeftBox",
  components: {
    Bike,
  },
};
</script>
