<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Billing & Usage</h1>
      <p class="text-sm text-gray-500 mt-1">Organization-wise usage tracking and revenue analytics</p>
    </div>

    <!-- Revenue Summary -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm text-gray-500">Total Revenue (MTD)</p>
          <Icon icon="mdi:currency-usd" class="text-2xl text-green-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">$45,230</p>
        <div class="mt-2 flex items-center">
          <span class="text-xs text-green-500 font-semibold">↑ 23.1%</span>
          <span class="text-xs text-gray-500 ml-2">vs last month</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm text-gray-500">Active Subscriptions</p>
          <Icon icon="mdi:account-multiple-check" class="text-2xl text-blue-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">342</p>
        <div class="mt-2 flex items-center">
          <span class="text-xs text-green-500 font-semibold">↑ 12</span>
          <span class="text-xs text-gray-500 ml-2">new this month</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm text-gray-500">Avg Revenue/User</p>
          <Icon icon="mdi:chart-line" class="text-2xl text-purple-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">$132</p>
        <div class="mt-2 flex items-center">
          <span class="text-xs text-green-500 font-semibold">↑ 8.3%</span>
          <span class="text-xs text-gray-500 ml-2">improvement</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm text-gray-500">Churn Rate</p>
          <Icon icon="mdi:account-cancel" class="text-2xl text-red-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">2.4%</p>
        <div class="mt-2 flex items-center">
          <span class="text-xs text-green-500 font-semibold">↓ 0.5%</span>
          <span class="text-xs text-gray-500 ml-2">improvement</span>
        </div>
      </div>
    </div>

    <!-- Revenue Dashboard Chart -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-800">Revenue Trend</h3>
        <div class="flex gap-2">
          <button class="px-3 py-1 text-sm rounded-lg bg-green-500 text-white">Month</button>
          <button class="px-3 py-1 text-sm rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">Quarter</button>
          <button class="px-3 py-1 text-sm rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">Year</button>
        </div>
      </div>
      <div class="h-80 flex items-center justify-center text-gray-400">
        <Icon icon="mdi:chart-bar" class="text-8xl" />
      </div>
    </div>

    <!-- Plan Distribution -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Plan Distribution</h3>
        <div class="space-y-4">
          <div v-for="plan in planDistribution" :key="plan.name">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">{{ plan.name }}</span>
              <span class="text-sm font-semibold text-gray-800">{{ plan.users }} users</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div :class="plan.color" class="h-3 rounded-full" :style="`width: ${plan.percentage}%`"></div>
            </div>
            <div class="flex justify-between mt-1">
              <span class="text-xs text-gray-500">{{ plan.percentage }}% of total</span>
              <span class="text-xs text-gray-500">${{ plan.revenue.toLocaleString() }}/mo</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Plan Configuration</h3>
        <div class="space-y-3">
          <div v-for="config in planConfigs" :key="config.name" class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-gray-800">{{ config.name }}</h4>
              <button class="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
            </div>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span class="text-gray-500">Price:</span>
                <span class="font-medium ml-1">${{ config.price }}/mo</span>
              </div>
              <div>
                <span class="text-gray-500">API Limit:</span>
                <span class="font-medium ml-1">{{ config.apiLimit }}</span>
              </div>
              <div>
                <span class="text-gray-500">Storage:</span>
                <span class="font-medium ml-1">{{ config.storage }}</span>
              </div>
              <div>
                <span class="text-gray-500">Support:</span>
                <span class="font-medium ml-1">{{ config.support }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Organization-wise Usage -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-800">Top Organizations by Usage</h3>
        <div class="flex gap-2">
          <select class="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option>All Plans</option>
            <option>Enterprise</option>
            <option>Pro</option>
            <option>Starter</option>
          </select>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Organization</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">API Requests</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Storage</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monthly Cost</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="org in organizations" :key="org.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                    {{ org.name.charAt(0) }}
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ org.name }}</p>
                    <p class="text-xs text-gray-500">{{ org.users }} users</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span :class="getPlanBadge(org.plan)" class="px-2 py-1 text-xs rounded-full">
                  {{ org.plan }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-700">{{ org.apiRequests.toLocaleString() }}</td>
              <td class="px-6 py-4 text-sm text-gray-700">{{ org.storage }}</td>
              <td class="px-6 py-4 text-sm font-semibold text-gray-800">${{ org.monthlyCost }}</td>
              <td class="px-6 py-4">
                <span :class="org.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'" class="px-2 py-1 text-xs rounded-full">
                  {{ org.status }}
                </span>
              </td>
              <td class="px-6 py-4">
                <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const planDistribution = ref([
  { name: 'Enterprise', users: 45, percentage: 13, revenue: 8950, color: 'bg-purple-500' },
  { name: 'Pro', users: 127, percentage: 37, revenue: 6223, color: 'bg-blue-500' },
  { name: 'Starter', users: 170, percentage: 50, revenue: 3230, color: 'bg-green-500' }
])

const planConfigs = ref([
  { name: 'Starter', price: 19, apiLimit: '10K/mo', storage: '5GB', support: 'Email' },
  { name: 'Pro', price: 49, apiLimit: '100K/mo', storage: '50GB', support: 'Priority' },
  { name: 'Enterprise', price: 199, apiLimit: 'Unlimited', storage: '500GB', support: '24/7' }
])

const organizations = ref([
  { id: 1, name: 'TechCorp Inc', users: 45, plan: 'Enterprise', apiRequests: 2450000, storage: '234GB', monthlyCost: 199, status: 'Active' },
  { id: 2, name: 'StartupXYZ', users: 12, plan: 'Pro', apiRequests: 450000, storage: '23GB', monthlyCost: 49, status: 'Active' },
  { id: 3, name: 'Digital Agency', users: 8, plan: 'Pro', apiRequests: 320000, storage: '18GB', monthlyCost: 49, status: 'Active' },
  { id: 4, name: 'E-Commerce Co', users: 23, plan: 'Enterprise', apiRequests: 1890000, storage: '156GB', monthlyCost: 199, status: 'Active' },
  { id: 5, name: 'Mobile App Dev', users: 5, plan: 'Starter', apiRequests: 89000, storage: '4GB', monthlyCost: 19, status: 'Active' }
])

const getPlanBadge = (plan) => {
  const badges = {
    Starter: 'bg-green-100 text-green-800',
    Pro: 'bg-blue-100 text-blue-800',
    Enterprise: 'bg-purple-100 text-purple-800'
  }
  return badges[plan] || 'bg-gray-100 text-gray-800'
}
</script>
