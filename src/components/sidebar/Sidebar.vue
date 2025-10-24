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

    <div class="flex-1 flex flex-col">
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
    </div>
    <div class="flex semi-bold text-black justify-center items-center py-2 hover:bg-green-300 cursor-pointer">
        <Icon icon="mdi:logout" class="text-lg" />
        <span v-if="open" class="ml-3">Sign Out</span>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

const open = ref(false)
const route = useRoute()

const navLinks = [
  { label: 'Dashboard', icon: 'mdi:view-dashboard', path: '/service/dashboard' },
  { label: 'Auth Service', icon: 'mdi:shield-account', path: '/service/auth-service' },
  { label: 'Profile Service', icon: 'mdi:account-cog', path: '/service/profile-service' },
  { label: 'Notification Service', icon: 'mdi:bell', path: '/service/notification-service' },
  { label: 'Cart Service', icon: 'mdi:cart', path: '/service/cart-service' },
  { label: 'Order Service', icon: 'mdi:clipboard-list', path: '/service/order-service' },
  { label: 'Payment Service', icon: 'mdi:credit-card', path: '/service/payment-service' },
]
</script>
