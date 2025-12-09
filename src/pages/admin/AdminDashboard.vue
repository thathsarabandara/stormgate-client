<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      <p class="text-sm text-gray-500 mt-1">Overview of system metrics and activities</p>
    </div>

    <!-- Key Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Total Users</p>
            <p class="text-3xl font-bold text-gray-800 mt-1">1,247</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-lg">
            <Icon icon="mdi:account-group" class="text-3xl text-blue-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center">
          <span class="text-xs text-green-500 font-semibold">↑ 12.5%</span>
          <span class="text-xs text-gray-500 ml-2">from last month</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Active Services</p>
            <p class="text-3xl font-bold text-gray-800 mt-1">23</p>
          </div>
          <div class="p-3 bg-green-100 rounded-lg">
            <Icon icon="mdi:server" class="text-3xl text-green-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center">
          <span class="text-xs text-green-500 font-semibold">All Healthy</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">API Requests (24h)</p>
            <p class="text-3xl font-bold text-gray-800 mt-1">1.2M</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-lg">
            <Icon icon="mdi:api" class="text-3xl text-purple-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center">
          <span class="text-xs text-green-500 font-semibold">↑ 8.2%</span>
          <span class="text-xs text-gray-500 ml-2">from yesterday</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Revenue (MTD)</p>
            <p class="text-3xl font-bold text-gray-800 mt-1">$45.2K</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-lg">
            <Icon icon="mdi:currency-usd" class="text-3xl text-yellow-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center">
          <span class="text-xs text-green-500 font-semibold">↑ 23.1%</span>
          <span class="text-xs text-gray-500 ml-2">from last month</span>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">User Growth</h3>
        <div class="h-64 flex items-center justify-center text-gray-400">
          <Icon icon="mdi:chart-line" class="text-6xl" />
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Service Distribution</h3>
        <div class="h-64 flex items-center justify-center text-gray-400">
          <Icon icon="mdi:chart-donut" class="text-6xl" />
        </div>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
      <div class="space-y-3">
        <div v-for="activity in recentActivities" :key="activity.id" class="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
          <div :class="activity.iconBg" class="p-2 rounded-lg">
            <Icon :icon="activity.icon" class="text-xl" :class="activity.iconColor" />
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-800">{{ activity.title }}</p>
            <p class="text-xs text-gray-500">{{ activity.description }}</p>
          </div>
          <span class="text-xs text-gray-400">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const recentActivities = ref([
  {
    id: 1,
    title: 'New User Registered',
    description: 'john.doe@example.com joined the platform',
    time: '2 min ago',
    icon: 'mdi:account-plus',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 2,
    title: 'System Alert',
    description: 'High CPU usage detected on Auth Service',
    time: '15 min ago',
    icon: 'mdi:alert',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    id: 3,
    title: 'Payment Processed',
    description: 'Subscription payment of $49.00 received',
    time: '1 hour ago',
    icon: 'mdi:currency-usd',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 4,
    title: 'Security Update',
    description: 'API keys rotated for production environment',
    time: '3 hours ago',
    icon: 'mdi:shield-check',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
])
</script>
