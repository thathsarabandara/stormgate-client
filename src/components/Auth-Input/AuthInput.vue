<template>
  <div class="flex flex-col mb-4">
    <div class="flex flex-col justify-center items-start md:flex-row md:justify-between md:items-center">
      <label :for="label" class="text-sm font-inter text-grey-700 mb-1 md:mb-2">
        {{ label }}
      </label>
      <p v-if="error" class="text-red-500 text-xs text-center mb-1 md:mb-4">
        {{ error }}
      </p>
    </div>
    <input
      :id="label"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
      class="px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 h-9 w-56 lg:h-10 lg:w-96"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  label: string;
  error?: string;
  type: string;
  placeholder?: string;
  value: string;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:value', target.value);
};
</script>
