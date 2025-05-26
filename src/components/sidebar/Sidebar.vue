<template>
  <div :class="`flex flex-col bg-gray-800 text-gray-400 transition-all duration-300 ${open ? 'w-52' : 'w-12'} h-screen`">
    <div class="flex items-center justify-start p-4">
      <button @click="open = !open" class="text-white mr-2">
        <FiMenu class="text-xl" />
      </button>
      <div v-if="open" class="flex items-center">
        <img src="../../assets/Banner.png" alt="logo" class="w-8 h-8 mr-2" />
        <p class="text-orange-500 text-lg font-bold">E-Mentor</p>
      </div>
    </div>

    <hr class="w-full h-0.5 bg-white" />

    <div class="flex-1 flex flex-col">
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="`/${link.path}`"
        class="flex items-center p-3 hover:bg-orange-500 hover:text-white cursor-pointer text-sm"
        :class="route.path === `/${link.path}` ? 'bg-orange-500 text-white' : ''"
      >
        <component :is="link.icon" />
        <span v-if="open" class="ml-3">{{ link.label }}</span>
      </router-link>
    </div>
    <div class="flex justify-center items-center py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
      <PiSignOut />
      <span v-if="open" class="ml-3">Sign Out</span>
    </div>
  </div>
</template>

<script lang="js">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { PiSignOut } from 'react-icons/pi'
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaUserShield, FaBell, FaShoppingCart, FaClipboardList, FaCreditCard, FaCogs } from 'react-icons/fa';

const open = ref(true)
const route = useRoute()

export const navLinks = [
  { label: 'Dashboard', icon: AiOutlineDashboard, path: '/dashboard' },
  { label: 'Auth Service', icon: FaUserShield, path: '/auth-service' },
  { label: 'Profile Service', icon: FaCogs, path: '/profile-service' },
  { label: 'Notification Service', icon: FaBell, path: '/notification-service' },
  { label: 'Cart Service', icon: FaShoppingCart, path: '/cart-service' },
  { label: 'Order Service', icon: FaClipboardList, path: '/order-service' },
  { label: 'Payment Service', icon: FaCreditCard, path: '/payment-service' },
];
</script>