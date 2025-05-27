<template>
  <div class="flex">
    <Sidebar  />
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../sidebar/Sidebar.vue'
</script>

<style>

</style>
