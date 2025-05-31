<template>
  <div class="flex">
    <Sidebar  />
    <main class="flex-1">
      <Navbar />
      <div class="min-h-screen bg-gray-10">
        <router-view />
      </div>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../sidebar/Sidebar.vue'
import Navbar from '../Navbar/Navbar.vue';
import Footer from '../Footer/Footer.vue';
</script>

