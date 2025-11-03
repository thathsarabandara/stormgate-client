<template>
  <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 group">
    <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div class="relative overflow-hidden h-48">
        <img 
          :src="image" 
          :alt="altText" 
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span 
          class="absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full"
          :class="tagColor"
        >
          {{ category }}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col">
        <div class="text-sm text-gray-500 mb-2">{{ date }}</div>
        <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
          {{ title }}
        </h3>
        <p class="text-gray-600 mb-4 flex-1">{{ excerpt }}</p>
        <a 
          :href="url" 
          class="text-green-600 font-medium inline-flex items-center group-hover:text-green-700 transition-colors"
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: '#'
  },
  tagVariant: {
    type: String,
    default: 'green',
    validator: (value) => ['green', 'blue', 'purple', 'red', 'yellow'].includes(value)
  }
});

const tagColors = {
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500'
};

const tagColor = computed(() => tagColors[props.tagVariant] || tagColors.green);
</script>
