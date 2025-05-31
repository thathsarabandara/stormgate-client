<template>
  <div class="flex flex-wrap justify-between items-center p-2 px-4 bg-white shadow-md">
    <p class="font-extrabold ml-16 text-lg sm:text-xl">
      Stormgate Microservices
    </p>

    <div class="flex items-center space-x-4 sm:space-x-6 md:space-x-7 mt-2 sm:mt-0">
      <div class="flex flex-col items-start">
        <p class="text-xs font-bold text-gray-500">
          Welcome
        </p>
        <p class="text-sm sm:text-base md:text-lg font-bold">
          Thathsara Bandara
        </p>
      </div>

      <div class="flex items-center bg-gray-50 shadow-lg rounded-lg p-2 hover:bg-gray-200 cursor-pointer">
        <Icon icon="mdi:bell-notification-outline" class="text-xl sm:text-2xl" />
      </div>

      <div class="flex items-center rounded-full overflow-hidden w-10 h-10 sm:w-12 sm:h-12 border">
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