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

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: String,
  error: String,
  type: String,
  placeholder: String,
  value: [String, Number],
})

const emit = defineEmits(['update:value'])

const onInput = (e) => {
  emit('update:value', e.target.value)
}
</script>
