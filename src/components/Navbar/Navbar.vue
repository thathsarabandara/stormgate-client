<template>
  <div class="flex flex-wrap justify-between items-center p-2 px-4 bg-white shadow-md w-full">
    <div class="flex items-center">
      <p class="font-extrabold text-base sm:text-lg md:text-xl whitespace-nowrap">
        Stormgate Microservices
      </p>
    </div>

    <div class="flex items-center space-x-2 sm:space-x-4 md:space-x-6 mt-2 sm:mt-0">
      <div class="flex-col items-start hidden lg:flex">
        <p class="text-xs font-bold text-gray-500">
          Welcome
        </p>
        <p class="text-sm sm:text-base md:text-lg font-bold">
          Thathsara Bandara
        </p>
      </div>

      <div class="flex items-center bg-gray-50 shadow-lg rounded-lg p-1.5 sm:p-2 hover:bg-gray-200 cursor-pointer">
        <Icon icon="mdi:bell-notification-outline" class="text-xl sm:text-2xl" />
      </div>

      <div class="flex items-center rounded-full overflow-hidden w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border">
        <img 
          src="../../assets/LogoBlack.png"
          class="transform transition ease-in-out duration-300 hover:scale-110"
          alt="user profile-image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>