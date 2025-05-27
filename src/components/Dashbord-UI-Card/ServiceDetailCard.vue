<template>
  <div class="flex flex-col w-full bg-white rounded-xl shadow p-5 space-y-4">
    <p class="text-xl text-center font-bold text-gray-800">{{ service }}</p>
    
    <div class="flex flex-col-reverse justify-center items-center mb-4">
        <div class="flex flex-col items-start justify-start mt-5">
            <div class="flex items-star mb-2">
                <p class=" text-gray-500">Status : </p>
                <p
                v-if="status ==='true'"
                class="text-green-600 font-medium flex items-center text-sm"
                >
                <span class="text-xs mx-1">🟢</span> Running
                </p>
                <p
                v-else
                class="text-red-500 font-medium flex items-center space-x-1"
                >
                <span class="text-xs mx-1">🔴</span> Down
                </p>
            </div>

            <div class="flex items-center mb-2">
                <p class="text-lg text-gray-500">Latency : </p>
                <p class="text-gray-800 text-sm">{{ latency }} ms</p>
            </div>

            <div class="flex items-center mb-2">
                <p class="text-lg text-gray-500">Up Time : </p>
                <p class="text-gray-800 text-sm">{{ cpu }} h</p>
            </div>

            <a
                :href="detailsLink"
                class="text-sm text-blue-600 hover:underline font-medium cursor-pointer"
                >
                    More details →
                </a>
        </div>

        <div class="flex justify-between items-center w-9/12">
            <DashbordServiceChart :upPercentage="health"/>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import DashbordServiceChart from '../chartlayout/DashbordServiceChart.vue';

const props = defineProps({
  service: String,
  status: Boolean,
  latency: String,
  cpu: Number,
  health: Number,
  detailsLink: String
})
</script>
