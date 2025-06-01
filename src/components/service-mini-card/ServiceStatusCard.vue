<template>
  <div class="flex justify-start items-center space-x-6 bg-white rounded-xl shadow-xl p-3">
    <div :class="`flex justify-center items-center ${bgColor} p-4 rounded-xl`">
      <Icon :icon="icon" :class="`text-4xl ${textColor}`" />
    </div>
    <div class="flex flex-col justify-center items-center w-full">
      <p class="text-2xl font-extrabold text-center">{{ value }}</p>
      <p class="text-sm text-gray-700 text-center">{{ label }}</p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { defineProps } from 'vue';

const props = defineProps({
  icon: String,
  value: [String, Number],
  label: String,
  bgColor: {
    type: String,
    default: 'bg-blue-100'
  },
  textColor: {
    type: String,
    default: 'text-blue-900'
  }
});
</script>
