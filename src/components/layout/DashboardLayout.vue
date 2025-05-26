<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white p-4 space-y-4">
      <h2 class="text-2xl font-bold">Microservice Manager</h2>
      <button @click="logout" class="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
        Logout
      </button>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 bg-gray-100">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../store/auth'

const authStore = useAuthStore()
const logout = () => {
  authStore.logout()
}
</script>
