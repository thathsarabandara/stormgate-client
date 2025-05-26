<template>
  <div>
    <nav class="flex space-x-4 p-4 bg-gray-800 text-white">
      <router-link
        to="/login"
        class="hover:underline"
        :class="{ 'font-bold underline': route.path === '/login' }"
      >
        Login
      </router-link>
      <router-link
        to="/register"
        class="hover:underline"
        :class="{ 'font-bold underline': route.path === '/register' }"
      >
        Register
      </router-link>
      <router-link
        to="/dashboard"
        class="hover:underline"
        :class="{ 'font-bold underline': route.path === '/dashboard' }"
      >
        Dashboard
      </router-link>
    </nav>
    <Sidebar />

    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Sidebar from './components/sidebar/Sidebar.vue'

const route = useRoute()
</script>

<style>
/* optional global or nav styles here */
</style>
