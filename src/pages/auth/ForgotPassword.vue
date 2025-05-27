<template>
  <div class="bg-green-50 flex items-center justify-center min-h-screen">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-semibold text-green-500 mb-2 text-center">Reset Password</h2>
      <p class="text-gray-500 text-sm mb-6 text-center">
        Enter your email and we’ll send you a link to reset your password.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="you@example.com"
            class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500 text-sm"
            required
          />
        </div>

        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
        <p v-if="message" class="text-green-600 text-sm">{{ message }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          {{ loading ? 'Sending...' : 'Send Reset Link' }}
        </button>
      </form>

      <div class="mt-6 text-center">
        <RouterLink to="/teacher/auth/login" class="text-green-500 hover:underline text-sm">
          Back to Login
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const message = ref(null)
const error = ref(null)
const loading = ref(false)

const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email)
}

const handleSubmit = async () => {
  message.value = null
  error.value = null

  if (!email.value || !validateEmail(email.value)) {
    error.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true

  try {
    console.log(email.value)
    const response = await axios.post(
      'http://localhost:5000/auth/resetrequest',
      { email: email.value },
      { withCredentials: true }
    )

    message.value = 'A password reset link has been sent to your email.'
  } catch (err) {
    console.error(err)
    error.value = 'Something went wrong. Please try again later.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>

</style>
