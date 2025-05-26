<template>
  <button
    class="flex justify-center items-center border-2"
    @click="onClick"
  >
    <div class="border-r-2">
      <img
        class="w-5 h-5 m-2"
        :src="src"
        :alt="label"
      />
    </div>
    <p class="mx-4 font-bold text-sm md:text-lg">
      {{ label }}
    </p>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  onClick: () => void;
  src: string;
  label: string;
}>();
</script>
