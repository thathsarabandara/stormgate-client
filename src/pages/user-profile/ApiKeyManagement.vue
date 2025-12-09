<template>
  <div class="mx-4 mt-3">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">API Key Management</h1>
      <p class="text-sm text-gray-500 mt-1">Manage your API keys and monitor usage</p>
    </div>

    <!-- Usage Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
    </div>

    <!-- Limit Alert -->
    <div v-if="usageSummary.totalRequests > usageSummary.limit * 0.8" class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg">
      <div class="flex items-center">
        <Icon icon="mdi:alert" class="text-yellow-600 text-2xl mr-3" />
        <div>
          <h3 class="text-sm font-semibold text-yellow-800">Usage Alert</h3>
          <p class="text-sm text-yellow-700">You've used {{ ((usageSummary.totalRequests / usageSummary.limit) * 100).toFixed(1) }}% of your monthly limit. Consider upgrading your plan.</p>
        </div>
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

      <div class="space-y-3">
        <div v-for="key in apiKeys" :key="key.id" class="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="font-semibold text-gray-800">{{ key.name }}</h3>
                <span :class="key.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="px-2 py-1 text-xs rounded-full">
                  {{ key.status }}
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
                <span>Created: {{ key.created }}</span>
                <span>Expires: {{ key.expires }}</span>
                <span>Requests: {{ key.requests.toLocaleString() }}</span>
              </div>
            </div>
            <div class="flex gap-2">
              <button @click="regenerateKey(key.id)" class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Regenerate">
                <Icon icon="mdi:refresh" class="text-xl" />
              </button>
              <button @click="revokeKey(key.id)" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Revoke">
                <Icon icon="mdi:delete" class="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- API Sandbox Tester -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">API Sandbox Tester</h2>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Endpoint</label>
          <select v-model="sandbox.endpoint" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option value="/api/v1/auth/verify">POST /api/v1/auth/verify</option>
            <option value="/api/v1/users/profile">GET /api/v1/users/profile</option>
            <option value="/api/v1/data/query">POST /api/v1/data/query</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">API Key</label>
          <select v-model="sandbox.selectedKey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option v-for="key in apiKeys.filter(k => k.status === 'Active')" :key="key.id" :value="key.key">
              {{ key.name }}
            </option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Request Body (JSON)</label>
          <textarea
            v-model="sandbox.body"
            rows="6"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 font-mono text-sm"
            placeholder='{"key": "value"}'
          ></textarea>
        </div>
        <button @click="testAPI" class="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition font-semibold">
          Send Test Request
        </button>
        <div v-if="sandbox.response" class="mt-4 p-4 bg-gray-50 rounded-lg">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold text-gray-800">Response</h3>
            <span :class="sandbox.response.status < 400 ? 'text-green-600' : 'text-red-600'" class="text-sm font-mono">
              {{ sandbox.response.status }}
            </span>
          </div>
          <pre class="text-sm text-gray-700 overflow-x-auto">{{ JSON.stringify(sandbox.response.data, null, 2) }}</pre>
        </div>
      </div>
    </div>

    <!-- Billing History -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Billing History</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="bill in billingHistory" :key="bill.id" class="hover:bg-gray-50">
              <td class="px-4 py-3 text-sm text-gray-700">{{ bill.date }}</td>
              <td class="px-4 py-3 text-sm text-gray-700">{{ bill.description }}</td>
              <td class="px-4 py-3 text-sm font-semibold text-gray-800">{{ bill.amount }}</td>
              <td class="px-4 py-3">
                <span :class="bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'" class="px-2 py-1 text-xs rounded-full">
                  {{ bill.status }}
                </span>
              </td>
              <td class="px-4 py-3">
                <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create API Key Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Create New API Key</h3>
        <form @submit.prevent="createApiKey" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Key Name</label>
            <input
              v-model="newKey.name"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="My API Key"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Expires In</label>
            <select v-model="newKey.expiresIn" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
              <option value="30">30 Days</option>
              <option value="90">90 Days</option>
              <option value="365">1 Year</option>
              <option value="0">Never</option>
            </select>
          </div>
          <div class="flex justify-end gap-3">
            <button type="button" @click="showCreateModal = false" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Create Key
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const usageSummary = ref({
  totalRequests: 45230,
  limit: 50000,
  successRate: 98.7
})

const apiKeys = ref([
  {
    id: 1,
    name: 'Production API Key',
    key: 'sk_live_51HyQcT2eZvKYlo2C9BVz3XdH9...',
    status: 'Active',
    created: '2025-01-15',
    expires: '2026-01-15',
    requests: 32145,
    revealed: false
  },
  {
    id: 2,
    name: 'Development API Key',
    key: 'sk_test_51HyQcT2eZvKYlo2C8FGh4WqM...',
    status: 'Active',
    created: '2025-02-10',
    expires: '2025-05-10',
    requests: 13085,
    revealed: false
  }
])

const billingHistory = ref([
  { id: 1, date: '2025-12-01', description: 'Monthly Subscription - Pro Plan', amount: '$49.00', status: 'Paid' },
  { id: 2, date: '2025-11-01', description: 'Monthly Subscription - Pro Plan', amount: '$49.00', status: 'Paid' },
  { id: 3, date: '2025-10-01', description: 'Monthly Subscription - Starter Plan', amount: '$19.00', status: 'Paid' }
])

const showCreateModal = ref(false)
const newKey = ref({
  name: '',
  expiresIn: '90'
})

const sandbox = ref({
  endpoint: '/api/v1/auth/verify',
  selectedKey: '',
  body: '{\n  "email": "test@example.com"\n}',
  response: null
})

const toggleReveal = (keyId) => {
  const key = apiKeys.value.find(k => k.id === keyId)
  if (key) key.revealed = !key.revealed
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
  alert('API Key copied to clipboard!')
}

const regenerateKey = (keyId) => {
  if (confirm('Are you sure you want to regenerate this API key? The old key will stop working.')) {
    console.log('Regenerating key:', keyId)
    alert('API Key regenerated successfully!')
  }
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
    name: newKey.value.name,
    key: 'sk_live_' + Math.random().toString(36).substring(2, 15) + '...',
    status: 'Active',
    created: new Date().toISOString().split('T')[0],
    expires: newKey.value.expiresIn === '0' ? 'Never' : 
      new Date(Date.now() + newKey.value.expiresIn * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    requests: 0,
    revealed: false
  }
  apiKeys.value.push(newApiKey)
  showCreateModal.value = false
  newKey.value = { name: '', expiresIn: '90' }
}

const testAPI = () => {
  sandbox.value.response = {
    status: 200,
    data: {
      success: true,
      message: 'Request processed successfully',
      timestamp: new Date().toISOString()
    }
  }
}
</script>
