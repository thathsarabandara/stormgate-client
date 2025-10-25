<template>
  <div class="fixed inset-0 bg-white flex items-center justify-center z-50">
    <!-- Simple Loading Spinner -->
    <div class="relative">
      <!-- Outer ring -->
      <div class="w-12 h-12 border-4 border-gray-200 rounded-full"></div>
      <!-- Inner spinning ring -->
      <div class="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-green-500 rounded-full animate-spin"></div>
    </div>
  </div>
</template>

<script setup>
// Simple loading component - no props needed
</script>

<style scoped>
/* Custom spinner animation if needed */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>   