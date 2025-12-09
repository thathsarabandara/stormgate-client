<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
          <Icon icon="mdi:shield-crown" class="text-3xl text-white" />
        </div>
        <h1 class="text-2xl font-bold text-gray-800">Admin Login</h1>
        <p class="text-sm text-gray-500 mt-2">Secure access to StormGate Admin Portal</p>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
        <Icon icon="mdi:alert-circle" class="text-xl" />
        <span class="text-sm">{{ error }}</span>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div class="relative">
            <Icon icon="mdi:email" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              v-model="credentials.email"
              type="email"
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="admin@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div class="relative">
            <Icon icon="mdi:lock" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              v-model="credentials.password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Icon :icon="showPassword ? 'mdi:eye-off' : 'mdi:eye'" class="text-xl" />
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            v-model="credentials.role"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Role</option>
            <option value="SuperAdmin">Super Admin</option>
            <option value="PlatformAdmin">Platform Admin</option>
            <option value="Analyst">Analyst</option>
          </select>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold disabled:bg-gray-400"
        >
          {{ loading ? 'Signing In...' : 'Sign In' }}
        </button>
      </form>

      <!-- MFA Step -->
      <div v-if="showMFA" class="mt-6 pt-6 border-t border-gray-200">
        <div class="text-center mb-4">
          <Icon icon="mdi:shield-check" class="text-4xl text-green-500 mx-auto mb-2" />
          <h3 class="text-lg font-semibold text-gray-800">Two-Factor Authentication</h3>
          <p class="text-sm text-gray-500 mt-1">Enter the 6-digit code from your authenticator app</p>
        </div>
        
        <form @submit.prevent="verifyMFA" class="space-y-4">
          <div>
            <input
              v-model="mfaCode"
              type="text"
              maxlength="6"
              class="w-full text-center text-2xl tracking-widest px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="000000"
              required
            />
          </div>
          
          <button
            type="submit"
            class="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold"
          >
            Verify & Continue
          </button>
          
          <button
            type="button"
            @click="showMFA = false"
            class="w-full text-sm text-gray-500 hover:text-gray-700"
          >
            Back to Login
          </button>
        </form>
      </div>

      <!-- Security Notice -->
      <div class="mt-6 p-4 bg-blue-50 rounded-lg">
        <div class="flex gap-2">
          <Icon icon="mdi:information" class="text-blue-600 text-xl flex-shrink-0 mt-0.5" />
          <div>
            <p class="text-sm text-blue-800 font-semibold">Security Notice</p>
            <p class="text-xs text-blue-700 mt-1">All admin sessions are monitored and logged. Unauthorized access attempts will be reported.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()

const credentials = ref({
  email: '',
  password: '',
  role: ''
})

const showPassword = ref(false)
const showMFA = ref(false)
const mfaCode = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  // Simulate API call
  setTimeout(() => {
    loading.value = false
    if (credentials.value.email && credentials.value.password) {
      showMFA.value = true
    } else {
      error.value = 'Invalid credentials'
    }
  }, 1000)
}

const verifyMFA = () => {
  if (mfaCode.value.length === 6) {
    // Simulate MFA verification
    router.push('/admin/dashboard')
  }
}
</script>
