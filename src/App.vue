<template>
  <div class="">
    <main class="bg-gray-100">
      <router-view />
    </main>
    <ScrollToTop />
  </div>
</template>

<script setup>
import ScrollToTop from './components/ScrollToTop.vue'
</script>

