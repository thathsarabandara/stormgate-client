<template>
  <DashboardLayout>
    <div>
      <h1 class="text-3xl font-bold mb-4">Your Microservices</h1>
      <!-- Microservices List will go here next -->
      <MicroserviceList />
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '../components/layout/DashboardLayout.vue'
import MicroserviceList from '../components/microservices/MicroserviceList.vue'
</script>
