<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <Sidebar class="fixed z-10" />
    <div class="ml-6 lg:ml-12 w-full">
      <Navbar />
      <main class="bg-white p-2 sm:p-4">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../sidebar/Sidebar.vue'
import Navbar from '../Navbar/Navbar.vue';
import Footer from '../Footer/Footer.vue';
</script>

