<template>
  <div :class="`flex flex-col fixed top-0 left bg-gray-100 shadow-xl text-gray-400 transition-all duration-300 ${open ? 'w-52' : 'w-14'} h-screen`">
    <div class="flex items-center justify-start p-2">
      <button @click="open = !open" class="text-black">
        <img 
            class="w-12 h-8 my-2"
            src="../../assets//LogoBlack.png"
        />
      </button>
      <div v-if="open" class="flex items-center">
        <img src="../../assets/Banner.png" alt="logo" class="w-48 h-10 mr-2" />
      </div>
    </div>

    <hr class="w-full h-0.5 bg-white" />


    <div class="flex-1 flex flex-col overflow-y-auto">
     <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="flex items-center p-3 hover:bg-green-200 m-1 hover:rounded-xl hover:text-white cursor-pointer text-sm"
        :class="route.path === link.path ? 'bg-green-400 m-1 rounded-xl text-white' : ''"
        >
            <Icon :icon="link.icon" class="text-lg text-black" />
            <span v-if="open" class="ml-3 text-black semi-bold">{{ link.label }}</span>
        </router-link>

      <hr class="w-full h-0.5 bg-gray-700 my-2" />
      
      <div class="px-3 py-2">
        <p v-if="open" class="text-xs text-gray-500 uppercase mb-2">Role</p>
        <div class="flex items-center" :class="open ? '' : 'justify-center'">
          <div :class="getRoleBadgeClass(currentRole)" class="px-2 py-1 rounded text-xs font-semibold">
            {{ open ? currentRole : currentRole.charAt(0) }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex font-semibold text-black justify-center items-center py-4 hover:bg-red-600 cursor-pointer" @click="logout">
      <Icon icon="mdi:logout" class="text-lg" />
      <span v-if="open" class="ml-3">Sign Out</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const open = ref(false)
const route = useRoute()
const router = useRouter()
const currentRole = ref('SuperAdmin') // Could be: SuperAdmin, PlatformAdmin, Analyst

const navLinks = [
  { label: 'Dashboard', icon: 'mdi:view-dashboard', path: '/admin/dashboard' },
  { label: 'User Management', icon: 'mdi:account-group', path: '/admin/users' },
  { label: 'System Monitoring', icon: 'mdi:monitor-dashboard', path: '/admin/monitoring' },
  { label: 'Billing & Usage', icon: 'mdi:currency-usd', path: '/admin/billing' },
  { label: 'Audit Logs', icon: 'mdi:file-document', path: '/admin/audit-logs' },
]

const getRoleBadgeClass = (role) => {
  const classes = {
    SuperAdmin: 'bg-red-600 text-white',
    PlatformAdmin: 'bg-blue-600 text-white',
    Analyst: 'bg-purple-600 text-white'
  }
  return classes[role] || 'bg-gray-600 text-white'
}

const logout = () => {
  if (confirm('Are you sure you want to logout?')) {
    router.push('/admin/login')
  }
}
</script>
