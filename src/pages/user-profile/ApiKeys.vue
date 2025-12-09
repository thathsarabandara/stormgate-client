<template>
  <div class="mx-4 mt-3">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">API Key Management</h1>
      <p class="text-sm text-gray-500 mt-1">Manage your API keys and monitor usage</p>
    </div>

    <!-- Usage Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Total Requests</p>
            <p class="text-2xl font-bold text-gray-800 mt-1">{{ usageSummary.totalRequests.toLocaleString() }}</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-lg">
            <Icon icon="mdi:api" class="text-3xl text-blue-600" />
          </div>
        </div>
        <div class="mt-2">
          <span class="text-xs text-green-500 font-semibold">+12.5%</span>
          <span class="text-xs text-gray-500"> from last month</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Active Keys</p>
            <p class="text-2xl font-bold text-gray-800 mt-1">{{ apiKeys.filter(k => k.status === 'Active').length }}</p>
          </div>
          <div class="p-3 bg-green-100 rounded-lg">
            <Icon icon="mdi:key" class="text-3xl text-green-600" />
          </div>
        </div>
        <div class="mt-2">
          <span class="text-xs text-gray-500">{{ usageSummary.limit - usageSummary.totalRequests }} requests remaining</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Success Rate</p>
            <p class="text-2xl font-bold text-gray-800 mt-1">{{ usageSummary.successRate }}%</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-lg">
            <Icon icon="mdi:chart-line" class="text-3xl text-purple-600" />
          </div>
        </div>
        <div class="mt-2">
          <span class="text-xs text-green-500 font-semibold">+2.3%</span>
          <span class="text-xs text-gray-500"> improvement</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Avg Response Time</p>
            <p class="text-2xl font-bold text-gray-800 mt-1">{{ usageSummary.avgResponseTime }}ms</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-lg">
            <Icon icon="mdi:speedometer" class="text-3xl text-orange-600" />
          </div>
        </div>
        <div class="mt-2">
          <span class="text-xs text-green-500 font-semibold">-5.2%</span>
          <span class="text-xs text-gray-500"> faster</span>
        </div>
      </div>
    </div>

    <!-- Limit Alert -->
    <div v-if="usageSummary.totalRequests > usageSummary.limit * 0.8" class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <Icon icon="mdi:alert" class="text-yellow-600 text-2xl mr-3" />
          <div>
            <h3 class="text-sm font-semibold text-yellow-800">Usage Alert</h3>
            <p class="text-sm text-yellow-700">You've used {{ ((usageSummary.totalRequests / usageSummary.limit) * 100).toFixed(1) }}% of your monthly limit. Consider upgrading your plan.</p>
          </div>
        </div>
        <router-link to="/service/billing" class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-sm font-medium">
          Upgrade Plan
        </router-link>
      </div>
    </div>

    <!-- API Keys List -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">API Keys</h2>
        <button @click="showCreateModal = true" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2">
          <Icon icon="mdi:plus" class="text-xl" />
          Create New Key
        </button>
      </div>

      <!-- Filter and Search -->
      <div class="flex flex-col md:flex-row gap-3 mb-4">
        <div class="flex-1 relative">
          <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search API keys..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <select v-model="filterStatus" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Revoked">Revoked</option>
          <option value="Expired">Expired</option>
        </select>
      </div>

      <div class="space-y-3">
        <div v-for="key in filteredKeys" :key="key.id" class="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="font-semibold text-gray-800">{{ key.name }}</h3>
                <span :class="getStatusClass(key.status)" class="px-2 py-1 text-xs rounded-full">
                  {{ key.status }}
                </span>
                <span v-if="key.environment" :class="key.environment === 'production' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'" class="px-2 py-1 text-xs rounded-full">
                  {{ key.environment }}
                </span>
              </div>
              <div class="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg font-mono text-sm">
                <span v-if="!key.revealed">{{ key.key.substring(0, 20) }}...</span>
                <span v-else>{{ key.key }}</span>
                <button @click="toggleReveal(key.id)" class="ml-auto text-gray-500 hover:text-gray-700">
                  <Icon :icon="key.revealed ? 'mdi:eye-off' : 'mdi:eye'" class="text-lg" />
                </button>
                <button @click="copyToClipboard(key.key)" class="text-gray-500 hover:text-gray-700">
                  <Icon icon="mdi:content-copy" class="text-lg" />
                </button>
              </div>
              <div class="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                <span><Icon icon="mdi:calendar" class="inline" /> Created: {{ key.created }}</span>
                <span><Icon icon="mdi:calendar-clock" class="inline" /> Expires: {{ key.expires }}</span>
                <span><Icon icon="mdi:counter" class="inline" /> Requests: {{ key.requests.toLocaleString() }}</span>
                <span v-if="key.lastUsed"><Icon icon="mdi:clock" class="inline" /> Last used: {{ key.lastUsed }}</span>
              </div>
              <div v-if="key.permissions" class="flex flex-wrap gap-2 mt-2">
                <span v-for="perm in key.permissions" :key="perm" class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  {{ perm }}
                </span>
              </div>
            </div>
            <div class="flex gap-2">
              <button @click="editKey(key)" class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition" title="Edit">
                <Icon icon="mdi:pencil" class="text-xl" />
              </button>
              <button @click="regenerateKey(key.id)" class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Regenerate">
                <Icon icon="mdi:refresh" class="text-xl" />
              </button>
              <button @click="viewAnalytics(key)" class="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition" title="Analytics">
                <Icon icon="mdi:chart-bar" class="text-xl" />
              </button>
              <button @click="revokeKey(key.id)" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Revoke">
                <Icon icon="mdi:delete" class="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <router-link to="/service/api-sandbox" class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition">
        <Icon icon="mdi:test-tube" class="text-4xl mb-3" />
        <h3 class="text-lg font-bold">API Sandbox</h3>
        <p class="text-sm text-blue-100 mt-1">Test your API endpoints</p>
      </router-link>

      <router-link to="/service/billing" class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition">
        <Icon icon="mdi:currency-usd" class="text-4xl mb-3" />
        <h3 class="text-lg font-bold">Billing & Usage</h3>
        <p class="text-sm text-purple-100 mt-1">Manage subscriptions</p>
      </router-link>

      <a href="#" class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition">
        <Icon icon="mdi:book-open-variant" class="text-4xl mb-3" />
        <h3 class="text-lg font-bold">Documentation</h3>
        <p class="text-sm text-green-100 mt-1">View API docs</p>
      </a>
    </div>

    <!-- Create/Edit API Key Modal -->
    <div v-if="showCreateModal || editingKey" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h3 class="text-xl font-bold text-gray-800 mb-4">{{ editingKey ? 'Edit API Key' : 'Create New API Key' }}</h3>
        <form @submit.prevent="editingKey ? updateKey() : createApiKey()" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Key Name</label>
            <input
              v-model="keyForm.name"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="My API Key"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Environment</label>
            <select v-model="keyForm.environment" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
              <option value="development">Development</option>
              <option value="staging">Staging</option>
              <option value="production">Production</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Expires In</label>
            <select v-model="keyForm.expiresIn" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
              <option value="30">30 Days</option>
              <option value="90">90 Days</option>
              <option value="180">180 Days</option>
              <option value="365">1 Year</option>
              <option value="0">Never</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
            <div class="space-y-2">
              <label v-for="perm in availablePermissions" :key="perm" class="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  :value="perm" 
                  v-model="keyForm.permissions"
                  class="w-4 h-4 text-green-600 rounded focus:ring-green-500" 
                />
                <span class="text-sm text-gray-700">{{ perm }}</span>
              </label>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Rate Limit (requests/minute)</label>
            <input
              v-model="keyForm.rateLimit"
              type="number"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="1000"
            />
          </div>
          <div class="flex justify-end gap-3 pt-4 border-t">
            <button type="button" @click="closeModal" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              {{ editingKey ? 'Update Key' : 'Create Key' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Analytics Modal -->
    <div v-if="analyticsKey" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-gray-800">API Key Analytics - {{ analyticsKey.name }}</h3>
          <button @click="analyticsKey = null" class="text-gray-400 hover:text-gray-600">
            <Icon icon="mdi:close" class="text-2xl" />
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-blue-50 rounded-lg p-4">
            <p class="text-sm text-blue-600">Total Requests</p>
            <p class="text-2xl font-bold text-blue-800">{{ analyticsKey.requests.toLocaleString() }}</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <p class="text-sm text-green-600">Success Rate</p>
            <p class="text-2xl font-bold text-green-800">98.5%</p>
          </div>
          <div class="bg-purple-50 rounded-lg p-4">
            <p class="text-sm text-purple-600">Avg Response Time</p>
            <p class="text-2xl font-bold text-purple-800">145ms</p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 class="font-semibold text-gray-800 mb-3">Request Distribution</h4>
          <div class="space-y-2">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>GET Requests</span>
                <span class="font-medium">65%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 65%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>POST Requests</span>
                <span class="font-medium">28%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" style="width: 28%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>Other Methods</span>
                <span class="font-medium">7%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-purple-500 h-2 rounded-full" style="width: 7%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg p-4">
          <h4 class="font-semibold text-gray-800 mb-3">Top Endpoints</h4>
          <div class="space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="font-mono text-gray-600">/api/v1/users/profile</span>
              <span class="font-medium">45.2K requests</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="font-mono text-gray-600">/api/v1/auth/verify</span>
              <span class="font-medium">32.1K requests</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="font-mono text-gray-600">/api/v1/data/query</span>
              <span class="font-medium">18.7K requests</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const usageSummary = ref({
  totalRequests: 45230,
  limit: 50000,
  successRate: 98.7,
  avgResponseTime: 145
})

const searchQuery = ref('')
const filterStatus = ref('')

const apiKeys = ref([
  {
    id: 1,
    name: 'Production API Key',
    key: 'sk_live_51HyQcT2eZvKYlo2C9BVz3XdH9...',
    status: 'Active',
    environment: 'production',
    created: '2025-01-15',
    expires: '2026-01-15',
    requests: 32145,
    lastUsed: '2 hours ago',
    revealed: false,
    permissions: ['read:users', 'write:users', 'read:data']
  },
  {
    id: 2,
    name: 'Development API Key',
    key: 'sk_test_51HyQcT2eZvKYlo2C8FGh4WqM...',
    status: 'Active',
    environment: 'development',
    created: '2025-02-10',
    expires: '2025-05-10',
    requests: 13085,
    lastUsed: '5 minutes ago',
    revealed: false,
    permissions: ['read:users', 'read:data']
  }
])

const showCreateModal = ref(false)
const editingKey = ref(null)
const analyticsKey = ref(null)

const availablePermissions = ['read:users', 'write:users', 'read:data', 'write:data', 'read:analytics', 'admin:all']

const keyForm = ref({
  name: '',
  environment: 'development',
  expiresIn: '90',
  permissions: [],
  rateLimit: 1000
})

const filteredKeys = computed(() => {
  return apiKeys.value.filter(key => {
    const matchesSearch = !searchQuery.value || 
      key.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = !filterStatus.value || key.status === filterStatus.value
    return matchesSearch && matchesStatus
  })
})

const getStatusClass = (status) => {
  const classes = {
    Active: 'bg-green-100 text-green-800',
    Revoked: 'bg-red-100 text-red-800',
    Expired: 'bg-gray-100 text-gray-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const toggleReveal = (keyId) => {
  const key = apiKeys.value.find(k => k.id === keyId)
  if (key) key.revealed = !key.revealed
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
  alert('API Key copied to clipboard!')
}

const editKey = (key) => {
  editingKey.value = key
  keyForm.value = {
    name: key.name,
    environment: key.environment,
    expiresIn: '90',
    permissions: [...key.permissions],
    rateLimit: 1000
  }
}

const regenerateKey = (keyId) => {
  if (confirm('Are you sure you want to regenerate this API key? The old key will stop working.')) {
    console.log('Regenerating key:', keyId)
    alert('API Key regenerated successfully!')
  }
}

const viewAnalytics = (key) => {
  analyticsKey.value = key
}

const revokeKey = (keyId) => {
  if (confirm('Are you sure you want to revoke this API key? This action cannot be undone.')) {
    const index = apiKeys.value.findIndex(k => k.id === keyId)
    if (index !== -1) {
      apiKeys.value[index].status = 'Revoked'
    }
  }
}

const createApiKey = () => {
  const newApiKey = {
    id: apiKeys.value.length + 1,
    name: keyForm.value.name,
    key: 'sk_' + (keyForm.value.environment === 'production' ? 'live' : 'test') + '_' + Math.random().toString(36).substring(2, 15) + '...',
    status: 'Active',
    environment: keyForm.value.environment,
    created: new Date().toISOString().split('T')[0],
    expires: keyForm.value.expiresIn === '0' ? 'Never' : 
      new Date(Date.now() + keyForm.value.expiresIn * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    requests: 0,
    lastUsed: 'Never',
    revealed: false,
    permissions: keyForm.value.permissions
  }
  apiKeys.value.push(newApiKey)
  closeModal()
}

const updateKey = () => {
  const index = apiKeys.value.findIndex(k => k.id === editingKey.value.id)
  if (index !== -1) {
    apiKeys.value[index] = {
      ...apiKeys.value[index],
      name: keyForm.value.name,
      environment: keyForm.value.environment,
      permissions: keyForm.value.permissions
    }
  }
  closeModal()
}

const closeModal = () => {
  showCreateModal.value = false
  editingKey.value = null
  keyForm.value = {
    name: '',
    environment: 'development',
    expiresIn: '90',
    permissions: [],
    rateLimit: 1000
  }
}
</script>
