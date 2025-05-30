<template>
    <div class="flex justify-between items-center p-2 px-4">
        <p class=" font-extrabold ml-16 text-xl">
            Stormgate Microservices
        </p>
        <div class="flex justify-center items-center space-x-7">
            <div class="flex flex-col justify-center items-start">
                <p class="text-xs font-bold text-gray-500">
                    Welcome
                </p>
                <p class="text-lg font-bold">
                    Thathsara Bandara
                </p>
            </div>
            <div class="flex justify-center items-center bg-gray-50 shadow-lg rounded-lg p-2 hover:bg-gray-200 hover:cursor-pointer">
                <Icon icon="mdi:bell-notification-outline"  class="text-2xl"/>
            </div>
            <div class="flex justify-center items-center rounded-full overflow-hidden w-12 h-12 border">
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