<template>
  <div class="flex">
    <Sidebar  />
    <main class="min-h-screen w-full">
      <Navbar />
      <div class="min-h-screen w-full bg-white">
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

