<template>
  <div class="flex justify-between items-center rounded-xl shadow-lg p-4 w-full space-x-5 bg-white">
    <div class="flex justify-center items-center p-2 w-16 h-16 rounded-xl" :class="iconBgClass">
      <Icon :icon="icon" class="text-3xl" :class="iconColorClass" />
    </div>

    <div class="flex flex-col justify-center items-start flex-grow">
      <p class="font-bold text-xl">
        {{ serviceName }}
      </p>
      <div class="flex flex-wrap justify-start items-center text-gray-500 space-x-2">
        <p>Uptime: {{ uptime }}%</p>
        <p>| Latency: {{ latency }}ms</p>
        <p>| Error: {{ errorRate }}%</p>
      </div>
    </div>

    <div class="flex justify-center items-center px-4">
      <p :class="statusColorClass" class="text-xl font-bold">
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

