<template>
  <div class="flex flex-col w-full bg-white rounded-xl shadow p-5 space-y-4 ml-8">
    <p class="text-xl text-center font-bold text-gray-800">{{ service }}</p>

    <div class="flex">
        <div class="flex flex-col w-7/12 p-4 px-14">
            <div class="flex flex-col justify-between items-center w-full mb-6">
                <div class="flex justify-between items-center w-full mb-3">
                    <p class="text-gray-600 font-medium">Status:</p>
                    <p :class="status ? 'text-green-600' : 'text-red-500'" class="font-semibold flex items-center">
                        <span class="text-xs mx-1">{{ status ? '🟢' : '🔴' }}</span> {{ status ? 'UP' : 'DOWN' }}
                    </p>
                </div>
                <div class="flex justify-between items-center w-full">
                    <p class="text-gray-600 font-medium">Uptime:</p>
                    <p class="text-gray-800">{{ uptime }}</p>
                </div>
            </div>

            <div>
                <p class="text-gray-600 font-medium mb-2">Dependencies:</p>
                <div v-for="(dep, index) in dependencies" :key="index" class="flex justify-between text-sm mb-3 w-11/12 ml-5">
                    <p>{{ dep.name }}:</p>
                    <p :class="dep.status === 'UP' ? 'text-green-600' : 'text-red-500'">
                        {{ dep.status }} ({{ dep.latency }}ms)
                    </p>
                </div>
            </div>

            <div class="flex flex-col justify-between flex-wrap gap-4 text-sm w-full mt-3">
                <div class="flex justify-between w-full">
                    <p class="text-gray-600">CPU Usage:</p>
                    <span class="text-gray-800 font-medium">{{ cpuUsage }}%</span>
                </div>
                <div class="flex justify-between w-full">
                    <p class="text-gray-600">Memory:</p>
                    <span class="text-gray-800 font-medium">{{ memory }} MB</span>
                </div>
                <div class="flex justify-between w-full">
                    <p class="text-gray-600">Disk Free: </p>
                    <span class="text-gray-800 font-medium">{{ diskFree }}</span>
                </div>
            </div>

        </div>

        <div class="flex flex-col justify-center items-center w-5/12">
            <p class="text-gray-600 font-medium mb-2 text-right">Latency Trend (24h):</p>
            <DashbordServiceChart :upPercentage="health" class="w-6/12"/>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import DashbordServiceChart from '../chartlayout/DashbordServiceChart.vue'

const props = defineProps({
  service: String,
  status: Boolean,
  uptime: String,
  dependencies: Array,
  cpuUsage: Number,
  memory: Number,
  diskFree: String,
  health: Number,
  detailsLink: String
})
</script>
