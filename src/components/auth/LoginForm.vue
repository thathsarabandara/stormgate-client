<template>
  <form @submit.prevent="handleLogin" class="space-y-4">
    <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded" required />
    <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded" required />
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
  </form>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { useAuthStore } from '../../store/auth'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()

const handleLogin = () => {
  authStore.login(email.value, password.value)
}
</script>
