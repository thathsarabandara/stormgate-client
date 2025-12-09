<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">System Monitoring</h1>
      <p class="text-sm text-gray-500 mt-1">Real-time system health and performance metrics</p>
    </div>

    <!-- System Health Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-sm font-semibold text-gray-600">API Latency</h3>
          <Icon icon="mdi:speedometer" class="text-2xl text-blue-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">125ms</p>
        <div class="mt-2">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 75%"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">Optimal performance</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-sm font-semibold text-gray-600">Error Rate</h3>
          <Icon icon="mdi:alert-circle" class="text-2xl text-red-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">0.12%</p>
        <div class="mt-2">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 98%"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">Below threshold</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-sm font-semibold text-gray-600">DB Connections</h3>
          <Icon icon="mdi:database" class="text-2xl text-green-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">234/500</p>
        <div class="mt-2">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 47%"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">Healthy usage</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-sm font-semibold text-gray-600">Queue Depth</h3>
          <Icon icon="mdi:message-processing" class="text-2xl text-purple-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">1,234</p>
        <div class="mt-2">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-yellow-500 h-2 rounded-full" style="width: 62%"></div>
          </div>
          <p class="text-xs text-yellow-600 mt-1">Moderate load</p>
        </div>
      </div>
    </div>

    <!-- Alerts & Notifications -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-800">Active Alerts</h3>
        <button class="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
      </div>
      <div class="space-y-3">
        <div v-for="alert in alerts" :key="alert.id" class="flex items-start gap-4 p-4 rounded-lg" :class="getAlertBg(alert.severity)">
          <Icon :icon="getAlertIcon(alert.severity)" class="text-2xl flex-shrink-0" :class="getAlertColor(alert.severity)" />
          <div class="flex-1">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="font-semibold text-gray-800">{{ alert.title }}</h4>
                <p class="text-sm text-gray-600 mt-1">{{ alert.message }}</p>
              </div>
              <span class="text-xs text-gray-500 whitespace-nowrap ml-4">{{ alert.time }}</span>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs px-2 py-1 rounded-full" :class="getSeverityBadge(alert.severity)">
                {{ alert.severity }}
              </span>
              <span class="text-xs text-gray-500">{{ alert.service }}</span>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-600">
            <Icon icon="mdi:close" class="text-xl" />
          </button>
        </div>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- API Latency Chart -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">API Latency (24h)</h3>
        <div class="h-64">
          <canvas ref="latencyChart"></canvas>
        </div>
        <div class="flex items-center justify-between mt-4 text-sm">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span class="text-gray-600">Avg: 125ms</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <span class="text-gray-600">Peak: 342ms</span>
          </div>
        </div>
      </div>

      <!-- Error Rate Chart -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Error Rate (24h)</h3>
        <div class="h-64">
          <canvas ref="errorChart"></canvas>
        </div>
        <div class="flex items-center justify-between mt-4 text-sm">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <span class="text-gray-600">4xx Errors: 0.08%</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span class="text-gray-600">5xx Errors: 0.04%</span>
          </div>
        </div>
      </div>

      <!-- Database Connections Chart -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Database Connections</h3>
        <div class="h-64">
          <canvas ref="dbChart"></canvas>
        </div>
        <div class="flex items-center justify-between mt-4 text-sm">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-gray-600">Active: 234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span class="text-gray-600">Pool Size: 500</span>
          </div>
        </div>
      </div>

      <!-- Queue Depth Chart -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Message Queue Depth</h3>
        <div class="h-64">
          <canvas ref="queueChart"></canvas>
        </div>
        <div class="flex items-center justify-between mt-4 text-sm">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span class="text-gray-600">Pending: 1,234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-gray-600">Processed/s: 523</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Status -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Service Status</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="service in services" :key="service.name" class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-semibold text-gray-800">{{ service.name }}</h4>
            <span :class="getStatusDot(service.status)" class="w-3 h-3 rounded-full"></span>
          </div>
          <div class="space-y-1 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Uptime:</span>
              <span class="font-medium">{{ service.uptime }}%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">CPU:</span>
              <span class="font-medium">{{ service.cpu }}%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Memory:</span>
              <span class="font-medium">{{ service.memory }}MB</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Requests/min:</span>
              <span class="font-medium">{{ service.requests }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const alerts = ref([
  {
    id: 1,
    title: 'High CPU Usage',
    message: 'Auth Service CPU usage exceeded 80% threshold',
    time: '5 min ago',
    severity: 'warning',
    service: 'Auth Service'
  },
  {
    id: 2,
    title: 'Database Connection Spike',
    message: 'Unusual increase in database connections detected',
    time: '12 min ago',
    severity: 'info',
    service: 'Profile Service'
  },
  {
    id: 3,
    title: 'API Rate Limit Approaching',
    message: 'User xyz@example.com approaching rate limit',
    time: '25 min ago',
    severity: 'warning',
    service: 'API Gateway'
  }
])

const services = ref([
  { name: 'Auth Service', status: 'healthy', uptime: 99.9, cpu: 45, memory: 512, requests: 1250 },
  { name: 'Profile Service', status: 'healthy', uptime: 99.8, cpu: 32, memory: 384, requests: 890 },
  { name: 'Notification Service', status: 'healthy', uptime: 99.7, cpu: 28, memory: 256, requests: 456 },
  { name: 'Cart Service', status: 'healthy', uptime: 99.9, cpu: 51, memory: 478, requests: 1120 },
  { name: 'Order Service', status: 'warning', uptime: 98.5, cpu: 76, memory: 892, requests: 2340 },
  { name: 'Payment Service', status: 'healthy', uptime: 99.9, cpu: 38, memory: 412, requests: 678 },
])

const getAlertBg = (severity) => {
  const colors = {
    critical: 'bg-red-50 border-l-4 border-red-500',
    warning: 'bg-yellow-50 border-l-4 border-yellow-500',
    info: 'bg-blue-50 border-l-4 border-blue-500'
  }
  return colors[severity] || 'bg-gray-50'
}

const getAlertIcon = (severity) => {
  const icons = {
    critical: 'mdi:alert-circle',
    warning: 'mdi:alert',
    info: 'mdi:information'
  }
  return icons[severity] || 'mdi:information'
}

const getAlertColor = (severity) => {
  const colors = {
    critical: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600'
  }
  return colors[severity] || 'text-gray-600'
}

const getSeverityBadge = (severity) => {
  const badges = {
    critical: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800'
  }
  return badges[severity] || 'bg-gray-100 text-gray-800'
}

const getStatusDot = (status) => {
  const colors = {
    healthy: 'bg-green-500',
    warning: 'bg-yellow-500',
    critical: 'bg-red-500'
  }
  return colors[status] || 'bg-gray-500'
}
</script>
