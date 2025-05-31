<template>
  <div class="flex">
    <Sidebar  />
    <main class="w-full">
      <Navbar />
      <div class="bg-white">
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

