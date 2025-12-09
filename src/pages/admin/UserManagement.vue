<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">User Management</h1>
      <p class="text-sm text-gray-500 mt-1">Manage platform users and their permissions</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow p-4">
        <p class="text-sm text-gray-500">Total Users</p>
        <p class="text-2xl font-bold text-gray-800">1,247</p>
      </div>
      <div class="bg-white rounded-xl shadow p-4">
        <p class="text-sm text-gray-500">Active Today</p>
        <p class="text-2xl font-bold text-green-600">834</p>
      </div>
      <div class="bg-white rounded-xl shadow p-4">
        <p class="text-sm text-gray-500">Suspended</p>
        <p class="text-2xl font-bold text-yellow-600">12</p>
      </div>
      <div class="bg-white rounded-xl shadow p-4">
        <p class="text-sm text-gray-500">Banned</p>
        <p class="text-2xl font-bold text-red-600">5</p>
      </div>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="md:col-span-2">
          <div class="relative">
            <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search users..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div>
          <select v-model="filterStatus" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
            <option value="banned">Banned</option>
          </select>
        </div>
        <div>
          <select v-model="filterRole" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option value="">All Roles</option>
            <option value="user">User</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Users Table -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                    {{ user.name.charAt(0) }}
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ user.name }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ user.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getRoleBadge(user.role)" class="px-2 py-1 text-xs rounded-full">
                  {{ user.role }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getStatusBadge(user.status)" class="px-2 py-1 text-xs rounded-full">
                  {{ user.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.joined }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <button @click="viewUser(user)" class="text-blue-600 hover:text-blue-800 mr-3" title="View Details">
                  <Icon icon="mdi:eye" class="text-lg" />
                </button>
                <button @click="editUser(user)" class="text-green-600 hover:text-green-800 mr-3" title="Edit">
                  <Icon icon="mdi:pencil" class="text-lg" />
                </button>
                <button @click="suspendUser(user)" class="text-yellow-600 hover:text-yellow-800 mr-3" title="Suspend">
                  <Icon icon="mdi:pause-circle" class="text-lg" />
                </button>
                <button @click="banUser(user)" class="text-red-600 hover:text-red-800" title="Ban">
                  <Icon icon="mdi:cancel" class="text-lg" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- User Detail Modal -->
    <div v-if="selectedUser" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-gray-800">User Details</h3>
            <button @click="selectedUser = null" class="text-gray-400 hover:text-gray-600">
              <Icon icon="mdi:close" class="text-2xl" />
            </button>
          </div>

          <div class="space-y-6">
            <!-- Profile Section -->
            <div class="flex items-center gap-4">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                {{ selectedUser.name.charAt(0) }}
              </div>
              <div>
                <h4 class="text-xl font-semibold text-gray-800">{{ selectedUser.name }}</h4>
                <p class="text-gray-500">{{ selectedUser.email }}</p>
                <span :class="getStatusBadge(selectedUser.status)" class="inline-block px-2 py-1 text-xs rounded-full mt-1">
                  {{ selectedUser.status }}
                </span>
              </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">User ID</p>
                <p class="font-semibold text-gray-800">{{ selectedUser.id }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">Role</p>
                <p class="font-semibold text-gray-800">{{ selectedUser.role }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">Joined Date</p>
                <p class="font-semibold text-gray-800">{{ selectedUser.joined }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">Last Active</p>
                <p class="font-semibold text-gray-800">{{ selectedUser.lastActive }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">API Requests</p>
                <p class="font-semibold text-gray-800">{{ selectedUser.apiRequests.toLocaleString() }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500">Plan</p>
                <p class="font-semibold text-gray-800">{{ selectedUser.plan }}</p>
              </div>
            </div>

            <!-- Role Editor -->
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Edit Role</h4>
              <select v-model="selectedUser.role" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                <option value="user">User</option>
                <option value="premium">Premium</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <!-- Permissions Matrix -->
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Permissions</h4>
              <div class="space-y-2">
                <label v-for="permission in permissions" :key="permission" class="flex items-center gap-2">
                  <input type="checkbox" class="w-4 h-4 text-green-600 rounded focus:ring-green-500" checked />
                  <span class="text-sm text-gray-700">{{ permission }}</span>
                </label>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 pt-4 border-t">
              <button @click="saveUserChanges" class="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Save Changes
              </button>
              <button @click="selectedUser = null" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Cancel
              </button>
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

const searchQuery = ref('')
const filterStatus = ref('')
const filterRole = ref('')
const selectedUser = ref(null)

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'premium', status: 'active', joined: '2024-01-15', lastActive: '2 hours ago', apiRequests: 15432, plan: 'Pro' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', joined: '2024-03-20', lastActive: '1 day ago', apiRequests: 8234, plan: 'Starter' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'enterprise', status: 'active', joined: '2023-11-10', lastActive: '3 hours ago', apiRequests: 45123, plan: 'Enterprise' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'user', status: 'suspended', joined: '2024-05-05', lastActive: '2 weeks ago', apiRequests: 234, plan: 'Starter' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'premium', status: 'banned', joined: '2024-02-28', lastActive: '1 month ago', apiRequests: 0, plan: 'Pro' },
])

const permissions = ['API Access', 'Dashboard Access', 'Export Data', 'Manage Keys', 'View Analytics', 'Billing Access']

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesSearch = !searchQuery.value || 
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesStatus = !filterStatus.value || user.status === filterStatus.value
    const matchesRole = !filterRole.value || user.role === filterRole.value

    return matchesSearch && matchesStatus && matchesRole
  })
})

const getRoleBadge = (role) => {
  const badges = {
    user: 'bg-gray-100 text-gray-800',
    premium: 'bg-blue-100 text-blue-800',
    enterprise: 'bg-purple-100 text-purple-800'
  }
  return badges[role] || 'bg-gray-100 text-gray-800'
}

const getStatusBadge = (status) => {
  const badges = {
    active: 'bg-green-100 text-green-800',
    suspended: 'bg-yellow-100 text-yellow-800',
    banned: 'bg-red-100 text-red-800'
  }
  return badges[status] || 'bg-gray-100 text-gray-800'
}

const viewUser = (user) => {
  selectedUser.value = { ...user }
}

const editUser = (user) => {
  selectedUser.value = { ...user }
}

const suspendUser = (user) => {
  if (confirm(`Are you sure you want to suspend ${user.name}?`)) {
    user.status = 'suspended'
  }
}

const banUser = (user) => {
  if (confirm(`Are you sure you want to ban ${user.name}? This action is severe.`)) {
    user.status = 'banned'
  }
}

const saveUserChanges = () => {
  const index = users.value.findIndex(u => u.id === selectedUser.value.id)
  if (index !== -1) {
    users.value[index] = { ...selectedUser.value }
  }
  selectedUser.value = null
}
</script>
