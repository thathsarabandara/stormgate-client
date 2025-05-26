<template>
  <form @submit.prevent="handleRegister" class="space-y-4">
    <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded" required />
    <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded" required />
    <input v-model="tenantId" type="text" placeholder="Tenant ID" class="w-full p-2 border rounded" required />
    <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Register</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../store/auth'

const email = ref('')
const password = ref('')
const tenantId = ref('')
const authStore = useAuthStore()

const handleRegister = () => {
  authStore.register(email.value, password.value, tenantId.value)
}
</script>

<style scoped>

</style>
