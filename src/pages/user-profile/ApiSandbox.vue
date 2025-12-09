<template>
  <div class="mx-4 mt-3">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">API Sandbox Tester</h1>
      <p class="text-sm text-gray-500 mt-1">Test your API endpoints in a safe environment</p>
    </div>

    <!-- Request Configuration -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 class="text-lg font-bold text-gray-800 mb-4">Request Configuration</h2>
      <div class="space-y-4">
        <!-- HTTP Method and Endpoint -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Method</label>
            <select v-model="request.method" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 font-semibold">
              <option value="GET" class="text-blue-600">GET</option>
              <option value="POST" class="text-green-600">POST</option>
              <option value="PUT" class="text-yellow-600">PUT</option>
              <option value="PATCH" class="text-orange-600">PATCH</option>
              <option value="DELETE" class="text-red-600">DELETE</option>
            </select>
          </div>
          <div class="md:col-span-3">
            <label class="block text-sm font-medium text-gray-700 mb-1">Endpoint URL</label>
            <div class="flex gap-2">
              <input
                v-model="request.baseUrl"
                type="text"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 font-mono text-sm"
                placeholder="https://api.stormgate.com"
              />
              <input
                v-model="request.endpoint"
                type="text"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 font-mono text-sm"
                placeholder="/api/v1/users/profile"
              />
            </div>
          </div>
        </div>

        <!-- Quick Endpoints -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Quick Select</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="endpoint in quickEndpoints"
              :key="endpoint.path"
              @click="selectEndpoint(endpoint)"
              class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
            >
              <span :class="getMethodColor(endpoint.method)" class="font-semibold">{{ endpoint.method }}</span>
              <span class="text-gray-600 ml-2">{{ endpoint.path }}</span>
            </button>
          </div>
        </div>

        <!-- API Key Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">API Key</label>
          <select v-model="request.apiKey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option value="">No Authentication</option>
            <option v-for="key in availableKeys" :key="key.id" :value="key.key">
              {{ key.name }} ({{ key.environment }})
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Headers Configuration -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold text-gray-800">Headers</h2>
        <button @click="addHeader" class="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm flex items-center gap-1">
          <Icon icon="mdi:plus" />
          Add Header
        </button>
      </div>
      <div class="space-y-2">
        <div v-for="(header, index) in request.headers" :key="index" class="flex gap-2">
          <input
            v-model="header.key"
            type="text"
            placeholder="Header Name"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
          />
          <input
            v-model="header.value"
            type="text"
            placeholder="Header Value"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
          />
          <button @click="removeHeader(index)" class="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">
            <Icon icon="mdi:delete" class="text-xl" />
          </button>
        </div>
      </div>
    </div>

    <!-- Query Parameters -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold text-gray-800">Query Parameters</h2>
        <button @click="addQueryParam" class="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm flex items-center gap-1">
          <Icon icon="mdi:plus" />
          Add Parameter
        </button>
      </div>
      <div class="space-y-2">
        <div v-for="(param, index) in request.queryParams" :key="index" class="flex gap-2">
          <input
            v-model="param.key"
            type="text"
            placeholder="Parameter Name"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
          />
          <input
            v-model="param.value"
            type="text"
            placeholder="Parameter Value"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
          />
          <button @click="removeQueryParam(index)" class="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">
            <Icon icon="mdi:delete" class="text-xl" />
          </button>
        </div>
      </div>
    </div>

    <!-- Request Body -->
    <div v-if="['POST', 'PUT', 'PATCH'].includes(request.method)" class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold text-gray-800">Request Body</h2>
        <div class="flex gap-2">
          <button @click="formatJson" class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm">
            Format JSON
          </button>
          <select v-model="request.bodyType" class="px-3 py-1 border border-gray-300 rounded-lg text-sm">
            <option value="json">JSON</option>
            <option value="form">Form Data</option>
            <option value="raw">Raw</option>
          </select>
        </div>
      </div>
      <textarea
        v-model="request.body"
        rows="10"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 font-mono text-sm"
        :placeholder="bodyPlaceholder"
      ></textarea>
    </div>

    <!-- Send Request Button -->
    <div class="flex gap-3 mb-6">
      <button
        @click="sendRequest"
        :disabled="loading"
        class="flex-1 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold disabled:bg-gray-400 flex items-center justify-center gap-2"
      >
        <Icon v-if="loading" icon="mdi:loading" class="text-2xl animate-spin" />
        <Icon v-else icon="mdi:send" class="text-2xl" />
        {{ loading ? 'Sending...' : 'Send Request' }}
      </button>
      <button @click="saveRequest" class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold flex items-center gap-2">
        <Icon icon="mdi:content-save" class="text-xl" />
        Save
      </button>
      <button @click="clearAll" class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold flex items-center gap-2">
        <Icon icon="mdi:refresh" class="text-xl" />
        Clear
      </button>
    </div>

    <!-- Response -->
    <div v-if="response" class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold text-gray-800">Response</h2>
        <div class="flex items-center gap-4">
          <span :class="getStatusColor(response.status)" class="px-3 py-1 rounded-lg font-semibold text-sm">
            {{ response.status }} {{ response.statusText }}
          </span>
          <span class="text-sm text-gray-500">{{ response.time }}ms</span>
        </div>
      </div>

      <!-- Response Tabs -->
      <div class="border-b border-gray-200 mb-4">
        <div class="flex gap-4">
          <button
            @click="activeTab = 'body'"
            :class="activeTab === 'body' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500'"
            class="px-4 py-2 border-b-2 font-medium text-sm"
          >
            Body
          </button>
          <button
            @click="activeTab = 'headers'"
            :class="activeTab === 'headers' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500'"
            class="px-4 py-2 border-b-2 font-medium text-sm"
          >
            Headers ({{ Object.keys(response.headers).length }})
          </button>
        </div>
      </div>

      <!-- Response Body -->
      <div v-if="activeTab === 'body'">
        <pre class="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 overflow-x-auto">{{ formatResponseBody(response.data) }}</pre>
      </div>

      <!-- Response Headers -->
      <div v-if="activeTab === 'headers'" class="space-y-2">
        <div v-for="(value, key) in response.headers" :key="key" class="flex gap-2 text-sm">
          <span class="font-semibold text-gray-700 w-1/3">{{ key }}:</span>
          <span class="text-gray-600 flex-1 font-mono">{{ value }}</span>
        </div>
      </div>
    </div>

    <!-- Saved Requests -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-lg font-bold text-gray-800 mb-4">Saved Requests</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div v-for="saved in savedRequests" :key="saved.id" class="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition cursor-pointer" @click="loadRequest(saved)">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold text-gray-800">{{ saved.name }}</h3>
            <button @click.stop="deleteSavedRequest(saved.id)" class="text-red-500 hover:text-red-700">
              <Icon icon="mdi:delete" />
            </button>
          </div>
          <p class="text-sm">
            <span :class="getMethodColor(saved.method)" class="font-semibold">{{ saved.method }}</span>
            <span class="text-gray-600 ml-2">{{ saved.endpoint }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const loading = ref(false)
const activeTab = ref('body')

const request = ref({
  method: 'GET',
  baseUrl: 'https://api.stormgate.com',
  endpoint: '/api/v1/users/profile',
  apiKey: '',
  headers: [
    { key: 'Content-Type', value: 'application/json' }
  ],
  queryParams: [],
  body: '{\n  "email": "test@example.com"\n}',
  bodyType: 'json'
})

const response = ref(null)

const availableKeys = ref([
  { id: 1, name: 'Production Key', key: 'sk_live_...', environment: 'production' },
  { id: 2, name: 'Development Key', key: 'sk_test_...', environment: 'development' }
])

const quickEndpoints = [
  { method: 'GET', path: '/api/v1/users/profile' },
  { method: 'POST', path: '/api/v1/auth/verify' },
  { method: 'POST', path: '/api/v1/data/query' },
  { method: 'GET', path: '/api/v1/services/status' },
  { method: 'PUT', path: '/api/v1/users/update' },
  { method: 'DELETE', path: '/api/v1/users/delete' }
]

const savedRequests = ref([
  { id: 1, name: 'Get User Profile', method: 'GET', endpoint: '/api/v1/users/profile' },
  { id: 2, name: 'Auth Verification', method: 'POST', endpoint: '/api/v1/auth/verify' }
])

const getMethodColor = (method) => {
  const colors = {
    GET: 'text-blue-600',
    POST: 'text-green-600',
    PUT: 'text-yellow-600',
    PATCH: 'text-orange-600',
    DELETE: 'text-red-600'
  }
  return colors[method] || 'text-gray-600'
}

const getStatusColor = (status) => {
  if (status >= 200 && status < 300) return 'bg-green-100 text-green-800'
  if (status >= 300 && status < 400) return 'bg-blue-100 text-blue-800'
  if (status >= 400 && status < 500) return 'bg-yellow-100 text-yellow-800'
  return 'bg-red-100 text-red-800'
}

const selectEndpoint = (endpoint) => {
  request.value.method = endpoint.method
  request.value.endpoint = endpoint.path
}

const addHeader = () => {
  request.value.headers.push({ key: '', value: '' })
}

const removeHeader = (index) => {
  request.value.headers.splice(index, 1)
}

const addQueryParam = () => {
  request.value.queryParams.push({ key: '', value: '' })
}

const removeQueryParam = (index) => {
  request.value.queryParams.splice(index, 1)
}

const formatJson = () => {
  try {
    const parsed = JSON.parse(request.value.body)
    request.value.body = JSON.stringify(parsed, null, 2)
  } catch (e) {
    alert('Invalid JSON format')
  }
}

const sendRequest = async () => {
  loading.value = true
  
  // Simulate API call
  setTimeout(() => {
    response.value = {
      status: 200,
      statusText: 'OK',
      time: Math.floor(Math.random() * 300) + 50,
      headers: {
        'content-type': 'application/json',
        'x-request-id': 'req_' + Math.random().toString(36).substring(7),
        'x-ratelimit-remaining': '998'
      },
      data: {
        success: true,
        message: 'Request processed successfully',
        timestamp: new Date().toISOString(),
        data: {
          user: {
            id: 123,
            name: 'John Doe',
            email: 'john@example.com'
          }
        }
      }
    }
    loading.value = false
    activeTab.value = 'body'
  }, 1000)
}

const formatResponseBody = (data) => {
  return JSON.stringify(data, null, 2)
}

const saveRequest = () => {
  const name = prompt('Enter a name for this request:')
  if (name) {
    savedRequests.value.push({
      id: Date.now(),
      name,
      method: request.value.method,
      endpoint: request.value.endpoint,
      ...request.value
    })
    alert('Request saved successfully!')
  }
}

const loadRequest = (saved) => {
  request.value = { ...saved }
}

const deleteSavedRequest = (id) => {
  if (confirm('Delete this saved request?')) {
    const index = savedRequests.value.findIndex(r => r.id === id)
    if (index !== -1) {
      savedRequests.value.splice(index, 1)
    }
  }
}

const clearAll = () => {
  request.value = {
    method: 'GET',
    baseUrl: 'https://api.stormgate.com',
    endpoint: '',
    apiKey: '',
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    queryParams: [],
    body: '',
    bodyType: 'json'
  }
  response.value = null
}

const bodyPlaceholder = computed(() => {
  return request.value.bodyType === 'json' 
    ? `{
  "key": "value"
}` 
    : 'Request body'
})
</script>
