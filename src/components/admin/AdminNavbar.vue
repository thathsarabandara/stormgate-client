<template>
  <div class="bg-white shadow-sm border-b border-gray-200 p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <Icon icon="mdi:shield-crown" class="text-3xl text-green-600" />
        <div>
          <h1 class="text-xl font-bold text-gray-800">StormGate Admin</h1>
          <p class="text-xs text-gray-500">System Management Portal</p>
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <!-- Search -->
        <div class="relative hidden md:block">
          <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 w-64"
          />
        </div>

        <!-- Notifications -->
        <button class="relative p-2 hover:bg-gray-100 rounded-lg">
          <Icon icon="mdi:bell" class="text-2xl text-gray-600" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <!-- User Menu -->
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            AD
          </div>
          <div class="hidden md:block">
            <p class="text-sm font-semibold text-gray-800">Admin User</p>
            <p class="text-xs text-gray-500">admin@stormgate.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
