<template>
  <div v-if="open" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded p-6 w-full max-w-lg relative">
      <button @click="close" class="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">&times;</button>
      <h2 class="text-2xl font-bold mb-4">{{ service?.name }} Details</h2>

      <div v-if="loading">Loading data...</div>
      <div v-else-if="data">
        <pre class="bg-gray-100 p-3 rounded text-sm overflow-auto">{{ JSON.stringify(data, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import MicroserviceService from '@/services/MicroserviceService'

const props = defineProps<{
  open: boolean,
  service: any,
}>()

const emit = defineEmits(['close'])
const loading = ref(false)
const data = ref<any>(null)

const fetchData = async () => {
  if (props.service) {
    loading.value = true
    try {
      const result = await MicroserviceService.getMicroserviceData(props.service.id)
      data.value = result
    } catch (error) {
      console.error('Failed to fetch service data:', error)
    } finally {
      loading.value = false
    }
  }
}

watch(() => props.open, (val) => {
  if (val) fetchData()
})

const close = () => {
  emit('close')
}
</script>
