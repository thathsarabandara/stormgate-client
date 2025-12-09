<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Audit Logs</h1>
      <p class="text-sm text-gray-500 mt-1">Complete audit trail of system activities</p>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow p-4">
        <p class="text-sm text-gray-500">Total Events (24h)</p>
        <p class="text-2xl font-bold text-gray-800">12,456</p>
      </div>
      <div class="bg-white rounded-xl shadow p-4">
        <p class="text-sm text-gray-500">User Actions</p>
        <p class="text-2xl font-bold text-blue-600">8,234</p>
      </div>
      <div class="bg-white rounded-xl shadow p-4">
        <p class="text-sm text-gray-500">System Events</p>
        <p class="text-2xl font-bold text-green-600">3,891</p>
      </div>
      <div class="bg-white rounded-xl shadow p-4">
        <p class="text-sm text-gray-500">Security Events</p>
        <p class="text-2xl font-bold text-red-600">331</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <div class="relative">
            <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              v-model="filters.search"
              type="text"
              placeholder="Search logs..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
          <select v-model="filters.event" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option value="">All Events</option>
            <option value="user_action">User Action</option>
            <option value="system">System</option>
            <option value="security">Security</option>
            <option value="api">API Call</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">User</label>
          <input
            v-model="filters.user"
            type="text"
            placeholder="User ID or email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">IP Address</label>
          <input
            v-model="filters.ip"
            type="text"
            placeholder="IP address"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
          <select v-model="filters.dateRange" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option value="today">Today</option>
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end gap-3 mt-4">
        <button @click="clearFilters" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Clear Filters
        </button>
        <button @click="exportLogs" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2">
          <Icon icon="mdi:download" class="text-lg" />
          Export CSV
        </button>
      </div>
    </div>

    <!-- Audit Logs Table -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Resource</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="log in filteredLogs" :key="log.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                <div>{{ log.timestamp }}</div>
                <div class="text-xs text-gray-400">{{ log.time }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getEventBadge(log.eventType)" class="px-2 py-1 text-xs rounded-full">
                  {{ log.eventType }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ log.userName }}</div>
                <div class="text-xs text-gray-500">{{ log.userEmail }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ log.action }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ log.resource }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{{ log.ipAddress }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getStatusBadge(log.status)" class="px-2 py-1 text-xs rounded-full">
                  {{ log.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button @click="viewDetails(log)" class="text-blue-600 hover:text-blue-800">
                  <Icon icon="mdi:information" class="text-lg" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="bg-gray-50 px-6 py-4 flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Showing <span class="font-medium">1</span> to <span class="font-medium">20</span> of <span class="font-medium">12,456</span> results
        </div>
        <div class="flex gap-2">
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50" disabled>
            Previous
          </button>
          <button class="px-3 py-1 bg-green-500 text-white rounded-lg">1</button>
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">2</button>
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">3</button>
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Log Detail Modal -->
    <div v-if="selectedLog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-gray-800">Audit Log Details</h3>
            <button @click="selectedLog = null" class="text-gray-400 hover:text-gray-600">
              <Icon icon="mdi:close" class="text-2xl" />
            </button>
          </div>

          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">Event ID</p>
                <p class="font-mono text-sm font-semibold text-gray-800">{{ selectedLog.id }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">Timestamp</p>
                <p class="font-semibold text-gray-800">{{ selectedLog.timestamp }} {{ selectedLog.time }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">Event Type</p>
                <p class="font-semibold text-gray-800">{{ selectedLog.eventType }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">Status</p>
                <span :class="getStatusBadge(selectedLog.status)" class="px-2 py-1 text-xs rounded-full">
                  {{ selectedLog.status }}
                </span>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-500 mb-2">User Information</p>
              <div class="space-y-1">
                <p class="text-sm"><span class="font-medium">Name:</span> {{ selectedLog.userName }}</p>
                <p class="text-sm"><span class="font-medium">Email:</span> {{ selectedLog.userEmail }}</p>
                <p class="text-sm"><span class="font-medium">IP Address:</span> {{ selectedLog.ipAddress }}</p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-500 mb-2">Action Details</p>
              <div class="space-y-1">
                <p class="text-sm"><span class="font-medium">Action:</span> {{ selectedLog.action }}</p>
                <p class="text-sm"><span class="font-medium">Resource:</span> {{ selectedLog.resource }}</p>
                <p class="text-sm"><span class="font-medium">Method:</span> {{ selectedLog.method }}</p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-500 mb-2">Additional Data</p>
              <pre class="text-xs bg-white p-3 rounded border border-gray-200 overflow-x-auto">{{ JSON.stringify(selectedLog.metadata, null, 2) }}</pre>
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

const filters = ref({
  search: '',
  event: '',
  user: '',
  ip: '',
  dateRange: 'today'
})

const selectedLog = ref(null)

const logs = ref([
  {
    id: 'LOG-12456',
    timestamp: '2025-12-09',
    time: '14:32:15',
    eventType: 'user_action',
    userName: 'John Doe',
    userEmail: 'john@example.com',
    action: 'User Login',
    resource: '/auth/login',
    ipAddress: '192.168.1.45',
    status: 'success',
    method: 'POST',
    metadata: { device: 'Chrome on Windows', location: 'New York, US' }
  },
  {
    id: 'LOG-12457',
    timestamp: '2025-12-09',
    time: '14:28:42',
    eventType: 'security',
    userName: 'Admin User',
    userEmail: 'admin@stormgate.com',
    action: 'API Key Created',
    resource: '/api/keys',
    ipAddress: '192.168.1.23',
    status: 'success',
    method: 'POST',
    metadata: { keyName: 'Production Key', expiresIn: '90 days' }
  },
  {
    id: 'LOG-12458',
    timestamp: '2025-12-09',
    time: '14:25:18',
    eventType: 'api',
    userName: 'Jane Smith',
    userEmail: 'jane@example.com',
    action: 'API Request',
    resource: '/api/v1/users/profile',
    ipAddress: '10.0.0.156',
    status: 'success',
    method: 'GET',
    metadata: { responseTime: '125ms', statusCode: 200 }
  },
  {
    id: 'LOG-12459',
    timestamp: '2025-12-09',
    time: '14:22:05',
    eventType: 'security',
    userName: 'Unknown',
    userEmail: 'hacker@evil.com',
    action: 'Failed Login Attempt',
    resource: '/auth/login',
    ipAddress: '203.0.113.0',
    status: 'failed',
    method: 'POST',
    metadata: { reason: 'Invalid credentials', attempts: 5 }
  },
  {
    id: 'LOG-12460',
    timestamp: '2025-12-09',
    time: '14:18:33',
    eventType: 'system',
    userName: 'System',
    userEmail: 'system@stormgate.com',
    action: 'Database Backup',
    resource: '/system/backup',
    ipAddress: '127.0.0.1',
    status: 'success',
    method: 'SYSTEM',
    metadata: { size: '2.3GB', duration: '45s' }
  }
])

const filteredLogs = computed(() => {
  return logs.value.filter(log => {
    const matchesSearch = !filters.value.search || 
      log.action.toLowerCase().includes(filters.value.search.toLowerCase()) ||
      log.resource.toLowerCase().includes(filters.value.search.toLowerCase())
    
    const matchesEvent = !filters.value.event || log.eventType === filters.value.event
    const matchesUser = !filters.value.user || 
      log.userName.toLowerCase().includes(filters.value.user.toLowerCase()) ||
      log.userEmail.toLowerCase().includes(filters.value.user.toLowerCase())
    const matchesIP = !filters.value.ip || log.ipAddress.includes(filters.value.ip)

    return matchesSearch && matchesEvent && matchesUser && matchesIP
  })
})

const getEventBadge = (eventType) => {
  const badges = {
    user_action: 'bg-blue-100 text-blue-800',
    system: 'bg-green-100 text-green-800',
    security: 'bg-red-100 text-red-800',
    api: 'bg-purple-100 text-purple-800'
  }
  return badges[eventType] || 'bg-gray-100 text-gray-800'
}

const getStatusBadge = (status) => {
  const badges = {
    success: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800'
  }
  return badges[status] || 'bg-gray-100 text-gray-800'
}

const clearFilters = () => {
  filters.value = {
    search: '',
    event: '',
    user: '',
    ip: '',
    dateRange: 'today'
  }
}

const exportLogs = () => {
  console.log('Exporting logs...')
  alert('Logs exported successfully!')
}

const viewDetails = (log) => {
  selectedLog.value = { ...log }
}
</script>
