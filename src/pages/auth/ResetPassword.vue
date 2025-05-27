<template>
  <div class="bg-green-50 min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-semibold text-green-500 mb-2 text-center">Set New Password</h2>

      <div v-if="validatingToken" class="text-center py-10">
        <div class="loader mx-auto border-4 border-green-500 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
        <p class="text-sm text-gray-500 mt-2">Validating token...</p>
      </div>

      <p v-else-if="!tokenValid" class="text-red-500 text-sm text-center">{{ error }}</p>

      <div v-else>
        <p class="text-gray-500 text-sm mb-6 text-center">
          Enter your new password below to reset your account.
        </p>

        <p v-if="error" class="text-red-500 text-sm mb-4 text-center">{{ error }}</p>
        <p v-if="message" class="text-green-600 text-sm mb-4 text-center">{{ message }}</p>

        <form @submit.prevent="handleReset" class="space-y-4">
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="********"
              class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="********"
              class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            {{ loading ? 'Resetting...' : 'Reset Password' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const token = ref<string | null>(route.query.token as string || null)

const password = ref('')
const confirmPassword = ref('')
const message = ref<string | null>(null)
const error = ref<string | null>(null)
const loading = ref(false)
const validatingToken = ref(true)
const tokenValid = ref(false)

const validateToken = async () => {
  if (!token.value) {
    error.value = 'Missing token.'
    validatingToken.value = false
    return
  }

  try {
    validatingToken.value = true
    await axios.get(`http://localhost:5000/auth/verifyresettoken?token=${token.value}`, {
      withCredentials: true
    })
    tokenValid.value = true
  } catch (err) {
    console.error(err)
    error.value = 'Invalid or expired token.'
    tokenValid.value = false
  } finally {
    validatingToken.value = false
  }
}

onMounted(() => {
  validateToken()
})

const handleReset = async () => {
  error.value = null
  message.value = null

  if (!password.value || !confirmPassword.value) {
    error.value = 'Please fill out all fields.'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }

  loading.value = true
  try {
    await axios.post(
      'http://localhost:5000/auth/resetpassword',
      { token: token.value, password: password.value },
      { withCredentials: true }
    )
    message.value = 'Your password has been reset successfully.'
    router.push('/teacher/auth/login')
  } catch (err) {
    console.error(err)
    error.value = 'Reset failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style>
.loader {
  border-width: 4px;
  border-color: #f97316 transparent transparent transparent;
  border-style: solid;
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
