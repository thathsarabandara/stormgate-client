<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Available Microservices</h2>

    <div v-if="loading">Loading services...</div>
    <div v-else>
      <div v-if="services.length === 0">No services found for your tenant.</div>
      <ul>
        <li v-for="service in services" :key="service.id" class="mb-3 p-4 bg-white rounded shadow">
          <h3 class="text-lg font-bold">{{ service.name }}</h3>
          <p>Status: <span :class="service.status === 'healthy' ? 'text-green-600' : 'text-red-600'">
            {{ service.status }}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MicroserviceService from '../../service/MicroserviceService'

const services = ref<any[]>([])
const loading = ref(true)

const fetchServices = async () => {
  try {
    const data = await MicroserviceService.getMicroservices()
    services.value = data.services
  } catch (error) {
    console.error('Failed to fetch microservices:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchServices()
})
</script>
