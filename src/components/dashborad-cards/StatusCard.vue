<template>
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-xl shadow-lg p-3 sm:p-4 w-full space-y-3 sm:space-y-0 sm:space-x-3 bg-white">
    <div class="flex items-center w-full sm:w-auto">
      <div class="flex justify-center items-center p-1.5 sm:p-2 w-12 sm:w-14 h-12 sm:h-14 rounded-xl" :class="iconBgClass">
        <Icon :icon="icon" class="text-2xl sm:text-3xl" :class="iconColorClass" />
      </div>

      <div class="flex flex-col justify-center items-start flex-grow ml-3 sm:ml-4">
        <p class="font-bold text-base sm:text-lg lg:text-xl">
          {{ serviceName }}
        </p>
        <div class="flex flex-wrap justify-start items-center text-xs sm:text-sm text-gray-500 space-x-1.5 sm:space-x-2">
          <span>Uptime: {{ uptime }}%</span>
          <span class="hidden xs:inline">|</span>
          <span>Latency: {{ latency }}ms</span>
          <span class="hidden sm:inline">|</span>
          <span class="whitespace-nowrap">Error: {{ errorRate }}%</span>
        </div>
      </div>
    </div>

    <div class="w-full sm:w-auto flex sm:block border-t sm:border-t-0 pt-2 sm:pt-0">
      <p :class="statusColorClass" class="text-base sm:text-lg font-bold text-right sm:text-center w-full">
        {{ status }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  serviceName: String,
  uptime: Number,
  latency: Number,
  errorRate: Number,
  status: String,
  icon: String,
  iconBgClass: {
    type: String,
    default: 'bg-blue-200'
  },
  iconColorClass: {
    type: String,
    default: 'text-blue-600'
  }
});

const statusColorClass = computed(() => {
  if (props.status.toLowerCase() === 'healthy') return 'text-green-500';
  if (props.status.toLowerCase() === 'warning') return 'text-yellow-500';
  return 'text-red-500';
});
</script>

