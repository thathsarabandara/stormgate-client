<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Sidebar from '../sidebar/Sidebar.vue'

const route = useRoute()
</script>

<style>
/* optional global or nav styles here */
</style>